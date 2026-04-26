

// pages/api/chargeCreditCard.ts

import { APIContracts, APIControllers, Constants as SDKConstants } from 'authorizenet';

import type { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from "next/server";
import {BookingRepository, BookingStatus, UpdateBookingInput} from "@/db/Bookings";
import {emailService} from "@/lib/EmailService";
import {BookingDetails} from "@/types/booking";
import {RedisCache} from "@/utils/redisCache";
const apiLoginKey = process.env.AUTHNET_API_LOGIN_ID!;
const transactionKey = process.env.AUTH_NET_TRANSACTION_KEY!;
const bookingRepository = new BookingRepository();
const cache = new RedisCache({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    defaultTtl: 1800 // 30 minutes
});


export async function POST(request: Request, { params }: { params: Promise<{ id: number }> }) {
    const { opaqueData ,id,email,phone,name} = await request.json();
    console.log("Name",name)
    console.log("Email",email)
    console.log("Phone",phone)
  //  const { id } = await params;

    if (!opaqueData?.dataValue || !id) {
        logWithTimestamp('Validation failed - missing payment token or booking ID');
        return NextResponse.json({ error: 'Missing payment token or booking ID' }, { status: 400 });
    }

     const booking = await bookingRepository.findBookingById(id);

    if (!booking) {
        logWithTimestamp('Booking not found in database');
        return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    let amount = booking.fare_charges

    let cardPaymentInfo = await chargeCreditCard(opaqueData,amount)

    let b:UpdateBookingInput = {
        status: BookingStatus.CONFIRMED,
        payment_mode: 'card',
        payment_id:cardPaymentInfo.transactionId,
        phone:phone,
        name:name,
        email:email,
        payment_time:new Date()
    }

    const updatedBooking =await bookingRepository.updateBooking(booking.booking_id, b);
    if (!updatedBooking) {
        return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
    }

    try {
        let d = booking.selected_date ? booking.selected_date.toISOString() : Date.now().toString()
        let t = booking.selected_time ? booking.selected_time.toString() : ''
        let bookingDetails:BookingDetails = {
            bookingId: id,
            name: name,
            email: email,
            phone: phone,
            pickupDate: d,
            pickupTime: t,
            pickupLocation: booking.pickup_address,
            dropLocation: booking.drop_off_address,
            mileage: booking.distance + " miles",
            total: booking.fare_charges + "$"
        }
          emailService.sendBookingConfirmation(bookingDetails).then(()=>{
              console.log("Booking Email sent to customer")
          });

        let adminEmail = process.env.ADMIN_EMAIL
          emailService.sendBookingConfirmation(bookingDetails,adminEmail).then(()=>{
              console.log("Booking Email sent to admin")
          });

        try{
            let key = "booking:"+id
            await cache.delete(key);
            await cache.set(key, booking, 3600*24*10); // 10 days TTL
        }
        catch (e){
            console.log(e)
        }

    } catch (error) {
        console.error('Error in sendEmail:', error);
    }

    return NextResponse.json({
        message: 'Payment successful',
        transactionId: cardPaymentInfo.transactionId,
        status: 'success',
        amount: amount,
        id,
    });

}
async function chargeCreditCard(opaqueDataParam:any,amount:number): Promise<any> {
    return new Promise((resolve, reject) => {
        const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
        merchantAuthenticationType.setName(apiLoginKey);
        merchantAuthenticationType.setTransactionKey(transactionKey);

        const opaqueData = new APIContracts.OpaqueDataType();
        opaqueData.setDataDescriptor('COMMON.ACCEPT.INAPP.PAYMENT');
        opaqueData.setDataValue(opaqueDataParam.dataValue);

        const paymentType = new APIContracts.PaymentType();
        paymentType.setOpaqueData(opaqueData);


        // const creditCard = new APIContracts.CreditCardType();
        // creditCard.setCardNumber('4242424242424242');
        // creditCard.setExpirationDate('0842');
        // creditCard.setCardCode('999');
        //
        // const paymentType = new APIContracts.PaymentType();
        // paymentType.setCreditCard(creditCard);

        const orderDetails = new APIContracts.OrderType();
        orderDetails.setInvoiceNumber('INV-12345');
        orderDetails.setDescription('Product Description');


        const transactionSetting1 = new APIContracts.SettingType();
        transactionSetting1.setSettingName('duplicateWindow');
        transactionSetting1.setSettingValue('120');

        const transactionSetting2 = new APIContracts.SettingType();
        transactionSetting2.setSettingName('recurringBilling');
        transactionSetting2.setSettingValue('false');

        const transactionSettingList = [];
        transactionSettingList.push(transactionSetting1);
        transactionSettingList.push(transactionSetting2);

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

        console.log(JSON.stringify(createRequest.getJSON(), null, 2));

        const ctrl = new APIControllers.CreateTransactionController(createRequest.getJSON());
        ctrl.setEnvironment(SDKConstants.endpoint.production);

        ctrl.execute(function() {
            const apiResponse = ctrl.getResponse();

            if (apiResponse != null) {
                const response = new APIContracts.CreateTransactionResponse(apiResponse);

             //   console.log(JSON.stringify(response, null, 2));

                if(response != null) {
                    if(response.getMessages().getResultCode() == APIContracts.MessageTypeEnum.OK) {
                        if(response.getTransactionResponse().getMessages() != null) {
                            console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
                            resolve({
                                success: true,
                                transactionId: response.getTransactionResponse().getTransId(),
                                responseCode: response.getTransactionResponse().getResponseCode(),
                                messageCode: response.getTransactionResponse().getMessages().getMessage()[0].getCode(),
                                description: response.getTransactionResponse().getMessages().getMessage()[0].getDescription()
                            });
                        } else {
                            console.log('Failed Transaction.');
                            if(response.getTransactionResponse().getErrors() != null) {
                                console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                                reject({
                                    success: false,
                                    errorCode: response.getTransactionResponse().getErrors().getError()[0].getErrorCode(),
                                    errorMessage: response.getTransactionResponse().getErrors().getError()[0].getErrorText()
                                });
                            }
                        }
                    } else {
                        console.log('Failed Transaction.');
                        if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null) {
                            console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                            reject({
                                success: false,
                                errorCode: response.getTransactionResponse().getErrors().getError()[0].getErrorCode(),
                                errorMessage: response.getTransactionResponse().getErrors().getError()[0].getErrorText()
                            });
                        } else {
                            console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                            reject({
                                success: false,
                                errorCode: response.getMessages().getMessage()[0].getCode(),
                                errorMessage: response.getMessages().getMessage()[0].getText()
                            });
                        }
                    }
                } else {
                    const apiError = ctrl.getResultcode();
                    console.log(apiError);
                    reject({
                        success: false,
                        errorMessage: 'Null response from payment processor'
                    });
                }
            }
        });
    });
}

function logWithTimestamp(message: string, data?: any) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`, data || '');
}

