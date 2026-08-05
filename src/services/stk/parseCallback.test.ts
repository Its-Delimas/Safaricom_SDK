import {describe,it,expect} from "vitest";
import {parseCallback} from "./parseCallback";
import { DarajaSTKCallbackBody } from "../../types/callback";

describe("parseCallback",()=>{
    it("parses a successful callback into a flat event",()=>{
        const sampleSuccess: DarajaSTKCallbackBody = {
            Body:{
                stkCallback:{
                    MerchantRequestID: "125e-4091-abd7-137c1517ac6f99983",
                    CheckoutRequestID: "ws_CO_310720261700448118333997",
                    ResultCode: 0,
                    ResultDesc: "The service request is processed successfully.",
                    CallbackMetadata:{
                        Item:[
                            {Name:"Amount", Value:1},
                            {Name:"MpesaReceiptNumber", Value:"NLJ7RT61SV"},
                            {Name:"TransactionDate", Value:20260731170000},
                            {Name:"PhoneNumber",Value:254708374149},
                        ],
                    },
                },
            },
        };
        const result = parseCallback(sampleSuccess);

        expect(result).toEqual({
            success: true,
            merchantRequestId: "125e-4091-abd7-137c1517ac6f99983",
            checkoutRequestId: "ws_CO_310720261700448118333997",
            resultCode: 0,
            resultDesc: "The service request is processed successfully.",
            amount: 1,
            mpesaReceiptNumber: "NLJ7RT61SV",
            phoneNumber: "254708374149",
            transactionDate: "20260731170000",
        })
    });

    it("parses a callback with no metadata",()=>{
        const sampleFailure :DarajaSTKCallbackBody = {
            Body: {
                stkCallback:{
                    MerchantRequestID: "125e-4091-abd7-137c1517ac6f99999",
                    CheckoutRequestID: "ws_CO_310720261700448118333998",
                    ResultCode: 1032,
                    ResultDesc: "Request cancelled by user",
                }
            }
        }
        const result = parseCallback(sampleFailure);

        expect(result).toEqual({
            success: false,
            merchantRequestId: "125e-4091-abd7-137c1517ac6f99999",
            checkoutRequestId: "ws_CO_310720261700448118333998",
            resultCode: 1032,
            resultDesc: "Request cancelled by user",
        })
    })
})

