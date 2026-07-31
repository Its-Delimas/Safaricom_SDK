import "dotenv/config"
import { MpesaClient } from "./client/MpesaClient";

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
  amount:1000000,
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

