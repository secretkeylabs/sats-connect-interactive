import { request, RpcErrorCode } from "sats-connect";

const response = await request("spark_transfer", {
  recipients: [
    {
      address: recipientSparkAddress,
      amount: amountInSats,
    },
  ],
});

if (response.status === "success") {
  console.log("Transfer result:", response.result);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log("User cancelled the request");
  } else {
    console.error("Error:", response.error);
  }
}
