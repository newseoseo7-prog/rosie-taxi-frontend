import { NextResponse } from 'next/server';
import {APIContracts, APIControllers, Constants as SDKConstants} from 'authorizenet';
import {BookingRepository, BookingStatus, UpdateBookingInput} from '@/db/Bookings';

const bookingRepository = new BookingRepository();

const apiLoginKey = process.env.AUTHNET_API_LOGIN_ID!;
const transactionKey = process.env.AUTH_NET_TRANSACTION_KEY!;



function logWithTimestamp(message: string, data?: any) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`, data || '');
}


interface PaymentResponse {
    success: boolean;
    transactionId?: string;
    responseCode?: string;
    messageCode?: string;
    description?: string;
    errorCode?: string;
    errorMessage?: string;
}

interface OpaqueData {
    dataDescriptor: string;
    dataValue: string;
}

  async function chargeCreditCard(
    opaqueDataParam: OpaqueData,
    orderNumber: number,
    amount: number
): Promise<PaymentResponse> {
    return new Promise((resolve, reject) => {
        const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
        merchantAuthenticationType.setName(process.env.AUTHORIZE_NET_API_LOGIN_KEY!);
        merchantAuthenticationType.setTransactionKey(process.env.AUTHORIZE_NET_TRANSACTION_KEY!);

        const opaqueData = new APIContracts.OpaqueDataType();
        opaqueData.setDataDescriptor('COMMON.ACCEPT.INAPP.PAYMENT');
        opaqueData.setDataValue(opaqueDataParam.dataValue);

        const paymentType = new APIContracts.PaymentType();
        paymentType.setOpaqueData(opaqueData);

        const orderDetails = new APIContracts.OrderType();
        orderDetails.setInvoiceNumber(orderNumber.toString());
        orderDetails.setDescription('Ride Booking');

        const transactionSetting1 = new APIContracts.SettingType();
        transactionSetting1.setSettingName('duplicateWindow');
        transactionSetting1.setSettingValue('120');

        const transactionSetting2 = new APIContracts.SettingType();
        transactionSetting2.setSettingName('recurringBilling');
        transactionSetting2.setSettingValue('false');

        const transactionSettingList = [transactionSetting1, transactionSetting2];
        const transactionSettings = new APIContracts.ArrayOfSetting();
        transactionSettings.setSetting(transactionSettingList);

        const transactionRequestType = new APIContracts.TransactionRequestType();
        transactionRequestType.setTransactionType(APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
        transactionRequestType.setPayment(paymentType);
        transactionRequestType.setAmount(amount);
        transactionRequestType.setOrder(orderDetails);
        transactionRequestType.setTransactionSettings(transactionSettings);

        const createRequest = new APIContracts.CreateTransactionRequest();
        createRequest.setMerchantAuthentication(merchantAuthenticationType);
        createRequest.setTransactionRequest(transactionRequestType);

        console.log('Payment Request:', JSON.stringify(createRequest.getJSON(), null, 2));

        const ctrl = new APIControllers.CreateTransactionController(createRequest.getJSON());
        ctrl.setEnvironment(SDKConstants.endpoint.production);

        ctrl.execute(() => {
            const apiResponse = ctrl.getResponse();

            if (!apiResponse) {
                const apiError = ctrl.getResultcode();
                console.error('Null Response:', apiError);
                return reject({
                    success: false,
                    errorMessage: 'No response from payment processor'
                });
            }

            const response = new APIContracts.CreateTransactionResponse(apiResponse);
            console.log('Payment Response:', JSON.stringify(response, null, 2));

            if (!response) {
                return reject({
                    success: false,
                    errorMessage: 'Invalid response format'
                });
            }

            // Handle successful transaction
            if (response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK) {
                const transactionResponse = response.getTransactionResponse();

                if (transactionResponse?.getMessages()) {
                    console.log(`Successfully created transaction with ID: ${transactionResponse.getTransId()}`);
                    return resolve({
                        success: true,
                        transactionId: transactionResponse.getTransId(),
                        responseCode: transactionResponse.getResponseCode(),
                        messageCode: transactionResponse.getMessages().getMessage()[0].getCode(),
                        description: transactionResponse.getMessages().getMessage()[0].getDescription()
                    });
                }

                // Handle transaction errors
                if (transactionResponse?.getErrors()) {
                    const error = transactionResponse.getErrors().getError()[0];
                    console.error(`Transaction failed: ${error.getErrorText()}`);
                    return reject({
                        success: false,
                        errorCode: error.getErrorCode(),
                        errorMessage: error.getErrorText()
                    });
                }
            }

            // Handle API-level errors
            const transactionResponse = response.getTransactionResponse();
            if (transactionResponse?.getErrors()) {
                const error = transactionResponse.getErrors().getError()[0];
                console.error(`Transaction failed: ${error.getErrorText()}`);
                return reject({
                    success: false,
                    errorCode: error.getErrorCode(),
                    errorMessage: error.getErrorText()
                });
            }

            // Handle other errors
            const message = response.getMessages().getMessage()[0];
            console.error(`Payment failed: ${message.getText()}`);
            reject({
                success: false,
                errorCode: message.getCode(),
                errorMessage: message.getText()
            });
        });
    });
}

export async function POST(request: Request, { params }: { params: Promise<{ id: number }> }) {
     logWithTimestamp('Payment processing started');
    console.log("API Key",apiLoginKey)
    console.log("Transaction Key",transactionKey)
    try {
        logWithTimestamp('Starting to parse params');
        const { id } = await params;
        logWithTimestamp('Params parsed', { id });

        logWithTimestamp('Starting to parse request body');
        const { opaqueData } = await request.json();
        logWithTimestamp('Request body parsed', { hasOpaqueData: !!opaqueData });

        if (!opaqueData?.dataValue || !id) {
            logWithTimestamp('Validation failed - missing payment token or booking ID');
            return NextResponse.json({ error: 'Missing payment token or booking ID' }, { status: 400 });
        }

        logWithTimestamp('Starting database lookup for booking');
        const booking = await bookingRepository.findBookingById(id);
        logWithTimestamp('Database lookup completed', { bookingFound: !!booking });

        if (!booking) {
            logWithTimestamp('Booking not found in database');
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        let amount = booking.fare_charges
       let cardPaymentInfo =await chargeCreditCard(opaqueData,id,amount)
        logWithTimestamp('Transaction response processed', { cardPaymentInfo });

        let b:UpdateBookingInput = {
            status: BookingStatus.CONFIRMED,
            payment_mode: 'card',
            payment_id:cardPaymentInfo.transactionId,
        }

        const updatedBooking = bookingRepository.updateBooking(booking.booking_id, b);
        if (!updatedBooking) {
            return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
        }
        return NextResponse.json({
            message: 'Payment successful',
            transactionId: cardPaymentInfo.transactionId,
            status: 'success',
            id,
        });


    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        logWithTimestamp('Payment processing failed', {
            error: errorMessage,
            stack: error instanceof Error ? error.stack : undefined
        });

        return NextResponse.json({
            error: 'Internal server error',
            details: errorMessage
        }, { status: 500 });
    }
}