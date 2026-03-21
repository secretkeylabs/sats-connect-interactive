import { request, RpcErrorCode } from "sats-connect";

const response = await request("stx_transferStx", {
  recipient: stacksAddress,
  amount: amountInMicroStx, // 1 STX = 1,000,000 uSTX
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
