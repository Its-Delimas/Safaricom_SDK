"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MpesaClient_1 = require("./client/MpesaClient");
const mpesa = new MpesaClient_1.MpesaClient({
    consumerKey: "cNQxmvoSJKpTXlGM6pSWWLmH3897OOB3exRwV6wuWuDyDdGU",
    consumerSecret: "Gv61Tb8OckpfMD5hRN4R8j4uGT2P6O0w99X7K2MyxAg0uFtvaghKeuL0wLuOOzWf",
    shortCode: "174379",
    passKey: "",
    environment: "sandbox"
});
mpesa.testauth().then((token) => {
    console.log("Access token:", token);
});
