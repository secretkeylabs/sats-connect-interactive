import Wallet, { AddressPurpose } from "sats-connect";

const response = await Wallet.request("getAccounts", {
  purposes: [AddressPurpose.Payment, AddressPurpose.Ordinals],
  message: "Connect a wallet to continue",
});

if (response.status === "success") {
  console.log(response.result);
} else {
  console.error("Error:", response.error);
}
