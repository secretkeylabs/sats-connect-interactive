import { request, RpcErrorCode, MessageSigningProtocols } from "sats-connect";

const bitcoinAddress = "bc1q...";

const response = await request("signMessage", {
  address: bitcoinAddress,
  message: "Hello, Bitcoin!",
  protocol: MessageSigningProtocols.ECDSA, // or MessageSigningProtocols.BIP322
});

if (response.status === "success") {
  console.log("Signature:", response.result.signature);
  console.log("Message Hash:", response.result.messageHash);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log("User cancelled the request");
  } else {
    console.error("Error:", response.error);
  }
}
