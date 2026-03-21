import { request } from "sats-connect";

const destinationAddress = "bc1p...";
const refundAddress = "bc1q...";

const response = await request("runes_etch", {
  runeName: "MY•NEW•RUNE",
  isMintable: true,
  destinationAddress,
  refundAddress,
  feeRate: 10,
  symbol: "R",
  terms: {
    amount: "1000",
    cap: "100000",
  },
});

if (response.status === "success") {
  console.log("Fund TX ID:", response.result.fundTransactionId);
  console.log("Order ID:", response.result.orderId);
} else {
  console.error("Error:", response.error);
}
