import "dotenv/config"
import { MpesaClient } from "./client/MpesaClient";
import { parseCallback } from "./services/stk/parseCallback";

const mpesa = new MpesaClient ({
    consumerKey:process.env.DARAJA_CONSUMER_KEY!,
    consumerSecret:process.env.DARAJA_CONSUMER_SECRET!,
    shortCode:"174379",
    passKey:process.env.DARAJA_PASSKEY!,
    environment:"sandbox",
    CallBackURL:"https://webhook.site/7b525410-1dac-4500-a996-fa02c684a90a"
})

mpesa.stkPush({
  phone:"0118333997",
  amount:1,
  accountReference:"TestOrder001",
}).then (async (pushResponse)=> {
  console.log("STK Push response:",pushResponse);
  console.log("Waiting 10 seconds before querying...");
  await new Promise((resolve)=>setTimeout(resolve,10000));

  const queryResponse = await mpesa.queryCheckout(pushResponse.CheckoutRequestID);
  console.log("STK Query response:",queryResponse);
}).catch((err)=>{
  console.log("Error:",err)
})

// Test for callback


const sampleSuccess = {
  Body: {
    stkCallback: {
      MerchantRequestID: "125e-4091-abd7-137c1517ac6f99983",
      CheckoutRequestID: "ws_CO_310720261700448118333997",
      ResultCode: 0,
      ResultDesc: "The service request is processed successfully.",
      CallbackMetadata: {
        Item: [
          { Name: "Amount", Value: 1 },
          { Name: "MpesaReceiptNumber", Value: "NLJ7RT61SV" },
          { Name: "TransactionDate", Value: 20260731170000 },
          { Name: "PhoneNumber", Value: 254708374149 },
        ],
      },
    },
  },
};

console.log("Parsed:", parseCallback(sampleSuccess));

const sampleFailure = {
  Body: {
    stkCallback: {
      MerchantRequestID: "125e-4091-abd7-137c1517ac6f99999",
      CheckoutRequestID: "ws_CO_310720261700448118333998",
      ResultCode: 1032,
      ResultDesc: "Request cancelled by user",
    },
  },
};

console.log("Parsed:", parseCallback(sampleFailure));

