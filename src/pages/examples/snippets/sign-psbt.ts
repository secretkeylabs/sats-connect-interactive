import { request, RpcErrorCode } from "sats-connect";

const response = await request("signPsbt", {
  psbt: psbtBase64, // Base64-encoded PSBT
  broadcast: false, // Set true to broadcast after signing
  signInputs: {
    [address]: [0], // Map of address to input indices to sign
  },
});

if (response.status === "success") {
  console.log("Signed PSBT:", response.result.psbt);
  // If broadcast was true:
  // console.log('Transaction ID:', response.result.txid);
} else {
  if (response.error.code === RpcErrorCode.USER_REJECTION) {
    console.log("User cancelled the request");
  } else {
    console.error("Error:", response.error);
  }
}
