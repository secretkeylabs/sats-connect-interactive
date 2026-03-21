import { request } from "sats-connect";

const recipientAddress = "bc1q...";
const inscriptionId = "abc123...i0";

const response = await request("ord_sendInscriptions", {
  transfers: [
    {
      address: recipientAddress,
      inscriptionId: inscriptionId,
    },
  ],
});

if (response.status === "success") {
  console.log("Transaction ID:", response.result.txid);
} else {
  console.error("Error:", response.error);
}
