import { BitcoinNetworkType, request } from "sats-connect";

const response = await request("wallet_changeNetwork", {
  name: BitcoinNetworkType.Testnet,
});

if (response.status === "success") {
  console.log("Network changed.");
} else {
  console.error("Error:", response.error);
}
