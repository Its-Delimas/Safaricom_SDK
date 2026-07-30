"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStkPushPayloads = buildStkPushPayloads;
const phone_1 = require("../../utils/phone");
function buildStkPushPayloads(request, shortcode, password, timestamp, callbackUrl) {
    const phone = (0, phone_1.normalizePhone)(request.phone);
    return {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: request.amount,
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackUrl: callbackUrl,
        AccountReference: request.accountReference,
        TransactionDesc: request.transactionDesc,
    };
}
