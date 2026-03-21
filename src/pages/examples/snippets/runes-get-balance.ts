import { request } from "sats-connect";

const response = await request("runes_getBalance", null);

if (response.status === "success") {
  for (const balance of response.result.balances) {
    console.log(`${balance.runeName}: ${balance.amount}`);
  }
} else {
  console.error("Error:", response.error);
}
