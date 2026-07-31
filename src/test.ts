import { MpesaClient } from "./client/MpesaClient";

const mpesa = new MpesaClient ({
    consumerKey:"cNQxmvoSJKpTXlGM6pSWWLmH3897OOB3exRwV6wuWuDyDdGU",
    consumerSecret:"Gv61Tb8OckpfMD5hRN4R8j4uGT2P6O0w99X7K2MyxAg0uFtvaghKeuL0wLuOOzWf",
    shortCode:"174379",
    passKey:"bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
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

