import { MpesaClient } from "./client/MpesaClient";
import { generatePassword } from "./utils/password";
import { generateTimestamp } from "./utils/timestamp";

const mpesa = new MpesaClient ({
    consumerKey:"",
    consumerSecret:"",
    shortCode:"174379",
    passKey:"",
    environment:"sandbox",
    callbackUrl:"https://webhook.site/7b525410-1dac-4500-a996-fa02c684a90a"
});

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

