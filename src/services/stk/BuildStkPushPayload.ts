import { STKPushRequest,DarajaSTKPushPayload } from "../../types/stk";
import { normalizePhone } from "../../utils/phone";

export function buildStkPushPayloads(request:STKPushRequest,shortcode:string,password:string,timestamp:string,callbackUrl:string): DarajaSTKPushPayload {
    const phone = normalizePhone(request.phone);
    return {
        BusinessShortCode:shortcode,
        Password:password,
        Timestamp:timestamp,
        TransactionType:"CustomerPayBillOnline",
        Amount:request.amount,
        PartyA:phone,
        PartyB:shortcode,
        PhoneNumber:phone,
        CallBackUrl:callbackUrl,
        AccountReference:request.accountReference,
        TransactionDesc:request.transactionDesc,
    };
}