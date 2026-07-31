// Query types
export interface STKQueryRequest {
    checkoutRequestId:string;
}

export interface DarajaSTKQueryPayload {
    BusinessShortCode:string;
    Password:string;
    Timestamp:string;
    CheckoutRequestID:string
}

export interface STKQueryResponse {
    ResponseCode:string;
    ResponseDescription:string;
    MerchantRequestID:string;
    CheckoutRequestID:string;
    ResultCode:string;
    ResultDesc:string;
}

// STKPush requets, payload and response 
export interface STKPushRequest {
    phone:string;
    amount:number;
    accountReference:string;
    transactionDesc?:string;
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
    CallBackURL:string;
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