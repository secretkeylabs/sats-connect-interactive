import { request, RpcErrorCode } from "sats-connect";

const recipientSparkAddress = "sp1q...";
const amountInSats = 1000;

const response = await request("spark_transfer", {
  receiverSparkAddress: recipientSparkAddress,
  amountSats: amountInSats,
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
