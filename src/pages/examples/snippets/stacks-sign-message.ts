import { request, RpcErrorCode } from "sats-connect";

const response = await request("stx_signMessage", {
  message: "Hello, Stacks!",
});

if (response.status === "success") {
  console.log("Signature:", response.result.signature);
  console.log("Public Key:", response.result.publicKey);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log("User cancelled the request");
  } else {
    console.error("Error:", response.error);
  }
}
