import { request } from "sats-connect";

const response = await request("stx_signStructuredMessage", {
  domain: "app.example.com",
  message: JSON.stringify({ action: "login", nonce: "1234" }),
});

if (response.status === "success") {
  console.log("Signature:", response.result.signature);
  console.log("Public key:", response.result.publicKey);
} else {
  console.error("Error:", response.error);
}
