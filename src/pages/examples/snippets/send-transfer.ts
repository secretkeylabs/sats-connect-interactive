import { request, RpcErrorCode } from "sats-connect";

const recipientAddress = "bc1q...";
const amountInSats = 1000;

const response = await request("sendTransfer", {
  recipients: [
    {
      address: recipientAddress,
      amount: amountInSats,
    },
  ],
});

if (response.status === "success") {
  console.log("Transaction ID:", response.result.txid);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log("User cancelled the request");
  } else {
    console.error("Error:", response.error);
  }
}
