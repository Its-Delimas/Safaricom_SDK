"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MpesaClient_1 = require("./client/MpesaClient");
const mpesa = new MpesaClient_1.MpesaClient({
    consumerKey: "cNQxmvoSJKpTXlGM6pSWWLmH3897OOB3exRwV6wuWuDyDdGU",
    consumerSecret: "Gv61Tb8OckpfMD5hRN4R8j4uGT2P6O0w99X7K2MyxAg0uFtvaghKeuL0wLuOOzWf",
    shortCode: "174379",
    passKey: "",
    environment: "sandbox",
    callbackUrl: "https://webhook.site/7b525410-1dac-4500-a996-fa02c684a90a"
});
mpesa.stkPush({
    phone: "254708374149",
    amount: 1,
    accountReference: "TestOrder001",
    transactionDesc: "Test a payment"
}).then((res) => {
    console.log("STK Push response:", res);
}).catch((err) => {
    console.error("STK Push failed:", err);
});
