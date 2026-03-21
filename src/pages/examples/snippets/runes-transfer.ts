import { request } from "sats-connect";

const response = await request("runes_transfer", {
  recipients: [
    {
      runeName: "EXAMPLE•RUNE",
      amount: "100",
      address: "bc1q...",
    },
  ],
});

if (response.status === "success") {
  console.log("Transaction ID:", response.result.txid);
} else {
  console.error("Error:", response.error);
}
