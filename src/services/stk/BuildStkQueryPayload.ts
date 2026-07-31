import { DarajaSTKQueryPayload } from "../../types/stk";

export function buildStkQueryPayload (checkoutRequestId:string,shortcode:string,password:string,timestamp:string): DarajaSTKQueryPayload {

return {
    BusinessShortCode:shortcode,
    Password:password,
    Timestamp:timestamp,
    CheckoutRequestID:checkoutRequestId,
}

}