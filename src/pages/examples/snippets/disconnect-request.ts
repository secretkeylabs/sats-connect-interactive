import { request } from "sats-connect";

const response = await request("wallet_disconnect", null);

if (response.status === "success") {
  console.log("Disconnected.");
} else {
  console.error("Error:", response.error);
}
