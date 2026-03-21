import Wallet, { AddressPurpose } from "sats-connect";

// Connect to the user's wallet
const response = await Wallet.request("wallet_connect", {
  addresses: [
    AddressPurpose.Payment,
    AddressPurpose.Ordinals,
    AddressPurpose.Stacks,
  ],
  message: "My app wants to connect!",
});

if (response.status === "success") {
  console.log("Connected:", response.result);
}
