import { request } from "sats-connect";

const destinationAddress = "bc1p...";
const refundAddress = "bc1q...";

const response = await request("runes_mint", {
  destinationAddress,
  feeRate: 10,
  repeats: 1,
  runeName: "EXAMPLE•RUNE",
  refundAddress,
});

if (response.status === "success") {
  console.log("Fund TX ID:", response.result.fundTransactionId);
  console.log("Order ID:", response.result.orderId);
} else {
  console.error("Error:", response.error);
}
