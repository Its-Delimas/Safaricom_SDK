import { DarajaSTKCallbackBody, STKCallbackEvent } from "../../types/callback";

export function parseCallback (rawBody:DarajaSTKCallbackBody):STKCallbackEvent {
    const callback = rawBody.Body.stkCallback;
    const success = callback.ResultCode === 0;

    const event: STKCallbackEvent = {
        success,
        merchantRequestId:callback.MerchantRequestID,
        checkoutRequestId:callback.CheckoutRequestID,
        resultCode:callback.ResultCode,
        resultDesc:callback.ResultDesc,
    };

    if (success && callback.CallbackMetadata){
        const items = callback.CallbackMetadata.Item;

        const findValue = (name:string)=>
            items.find((item)=>item.Name===name)?.Value;

        event.amount=findValue("Amount") as number | undefined;
        event.mpesaReceiptNumber = findValue("MpesaReceiptNumber") as string | undefined;
        event.phoneNumber = String(findValue("PhoneNumber")??"");
        event.transactionDate = String(findValue("TransactionDate")??"");
    }

    return event;
}