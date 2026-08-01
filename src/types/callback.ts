export interface DarajaCallbackMetadataItem {
    Name:string;
    Value:string | number;
}

export interface DarajaSTKCallbackBody {
    Body: {
        stkCallback: {
            MerchantRequestID:string;
            CheckoutRequestID:string;
            ResultCode:number;
            ResultDesc:string;
            CallbackMetadata?:{
                Item: DarajaCallbackMetadataItem[];
            };
        };
    };
}

export interface STKCallbackEvent {
    success:boolean;
    merchantRequestId:string;
    checkoutRequestId:string;
    resultCode:number;
    resultDesc:string;
    amount?:number;
    mpesaReceiptNumber?:string;
    phoneNumber?:string;
    transactionDate?:string;
}