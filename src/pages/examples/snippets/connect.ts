import Wallet, { AddressPurpose } from "sats-connect";

const response = await Wallet.request("wallet_connect", {
  addresses: [
    AddressPurpose.Payment,
    AddressPurpose.Ordinals,
    AddressPurpose.Stacks,
    AddressPurpose.Spark,
  ],
  message: "My app wants to connect to your wallet!",
});

if (response.status === "success") {
  const { addresses, id, walletType } = response.result;
  console.log("Connected! Account ID:", id);
  console.log("Addresses:", addresses);
} else {
  console.error("Connection failed:", response.error);
}
