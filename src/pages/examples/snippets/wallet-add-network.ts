import { BitcoinNetworkType, request } from "sats-connect";

const response = await request("wallet_addNetwork", {
  chain: "bitcoin",
  type: BitcoinNetworkType.Regtest,
  name: "Local Regtest",
  rpcUrl: "http://127.0.0.1:3002",
  blockExplorerUrl: "http://127.0.0.1:3000",
  switch: true,
});

if (response.status === "success") {
  console.log("Network id:", response.result.id);
} else {
  console.error("Error:", response.error);
}
