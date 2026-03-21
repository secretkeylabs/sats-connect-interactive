import { request, RpcErrorCode } from "sats-connect";

const response = await request("spark_signMessage", {
  message: "Hello from Spark!",
  publicKey: sparkPublicKey,
  protocol: "ECDSA",
});

if (response.status === "success") {
  console.log("Signature:", response.result.signature);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log("User cancelled the request");
  } else {
    console.error("Error:", response.error);
  }
}
