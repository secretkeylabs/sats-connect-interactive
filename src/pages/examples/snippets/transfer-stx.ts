import { request, RpcErrorCode } from "sats-connect";

const stacksAddress = "SP2...";
const amountInMicroStx = 1000000; // 1 STX = 1,000,000 uSTX

const response = await request("stx_transferStx", {
  recipient: stacksAddress,
  amount: amountInMicroStx,
  memo: "optional memo",
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
