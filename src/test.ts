import { MpesaClient } from "./client/MpesaClient";

const mpesa = new MpesaClient ({
    consumerKey:"",
    consumerSecret:"",
    shortCode:"174379",
    passKey:"",
    environment:"sandbox"
});

mpesa.testAuth().then((token1) => {
  console.log("First call:", token1);
  mpesa.testAuth().then((token2) => {
    console.log("Second call:", token2);
    console.log("Same token?", token1 === token2);
  });
});