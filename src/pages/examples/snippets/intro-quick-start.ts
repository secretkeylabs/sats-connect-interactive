import Wallet from "sats-connect";

// Connect to the user's wallet
const response = await Wallet.request("wallet_connect", {
  addresses: ["payment", "ordinals", "stacks"],
  message: "My app wants to connect!",
});

if (response.status === "success") {
  console.log("Connected:", response.result);
}
