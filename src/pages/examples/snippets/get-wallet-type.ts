import { request } from "sats-connect";

const response = await request("wallet_getWalletType", null);

if (response.status === "success") {
  console.log("Wallet type:", response.result);
} else {
  console.error("Error:", response.error);
}
