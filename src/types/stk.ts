export interface STKPushRequest {
    phone:string;
    amount:number;
    accountReference:string;
    transactionDesc:string;
}

export interface DarajaSTKPushPayload {
    BusinessShortCode: string;
    Password:string;
    Timestamp:string;
    TransactionType:string;
    Amount:number;
    PartyA:string;
    PartyB:string;
    PhoneNumber:string;
    CallBackUrl:string;
    AccountReference:string;
    TransactionDesc:string;
}

export interface STKPushResponse {
    MerchantRequestID:string;
    CheckoutRequestID:string;
    ResponseCode:string;
    ResponseDescription:string;
    CustomerMessage:string;
}