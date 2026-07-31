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
  phone:"254708374149",
  amount:1,
  accountReference:"TestOrder001",
  transactionDesc:"Test a payment"
}).then((res)=>{
  console.log("STK Push response:",res)
}).catch((err)=>{
  console.error("STK Push failed:",err)
})

