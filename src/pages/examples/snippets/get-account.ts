import { request } from "sats-connect";

const response = await request("wallet_getAccount", undefined);

if (response.status === "success") {
  const { id, addresses, walletType } = response.result;
  console.log("Account ID:", id);
  console.log("Wallet Type:", walletType);
  console.log("Addresses:", addresses);
} else {
  console.error("Error:", response.error);
}
