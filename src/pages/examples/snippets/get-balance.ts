import { request } from "sats-connect";

const response = await request("getBalance", undefined);

if (response.status === "success") {
  console.log("Confirmed:", response.result.confirmed);
  console.log("Unconfirmed:", response.result.unconfirmed);
  console.log("Total:", response.result.total);
} else {
  console.error("Error:", response.error);
}
