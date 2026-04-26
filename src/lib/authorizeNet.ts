// lib/authorizeNet.ts

import {
    APIContracts,
    APIControllers,
} from 'authorizenet';

const apiLoginKey = '2Ew7rD9Y2GJ';
const transactionKey = '87SbtUu6Cr4mU46b';

export async function getAnAcceptPaymentPage(): Promise<APIContracts.GetHostedPaymentPageResponse | null> {
    const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(apiLoginKey);
    merchantAuthenticationType.setTransactionKey(transactionKey);

    const transactionRequestType = new APIContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    transactionRequestType.setAmount(10.0);

    const setting1 = new APIContracts.SettingType();
    setting1.setSettingName('hostedPaymentButtonOptions');
    setting1.setSettingValue('{"text": "Pay"}');

    const setting2 = new APIContracts.SettingType();
    setting2.setSettingName('hostedPaymentOrderOptions');
    setting2.setSettingValue('{"show": false}');

    const settingList: APIContracts.SettingType[] = [setting1, setting2];

    const alist = new APIContracts.ArrayOfSetting();
    alist.setSetting(settingList);

    const getRequest = new APIContracts.GetHostedPaymentPageRequest();
    getRequest.setMerchantAuthentication(merchantAuthenticationType);
    getRequest.setTransactionRequest(transactionRequestType);
    getRequest.setHostedPaymentSettings(alist);

    const ctrl = new APIControllers.GetHostedPaymentPageController(getRequest.getJSON());

    try {
        const response = await new Promise<APIContracts.GetHostedPaymentPageResponse | null>((resolve, reject) => {
            ctrl.execute(() => {
                const rawResponse = ctrl.getResponse();
                if (rawResponse) {
                    const responseObj = new APIContracts.GetHostedPaymentPageResponse(rawResponse);
                    resolve(responseObj);
                } else {
                    reject(new Error('No response from Authorize.Net controller.'));
                }
            });
        });

        if (response?.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK) {
            console.log('Hosted payment page token:', response.getToken());
            return response;
        } else {
            const messages = response?.getMessages()?.getMessage();
            if (messages && messages.length > 0) {
                console.error('Error Code:', messages[0].getCode());
                console.error('Error Message:', messages[0].getText());
            }
            return response;
        }
    } catch (error) {
        console.error('Controller execution failed:', error);
        return null;
    }
}
