import { AddressPurpose, request } from "sats-connect";

const response = await request("getAccounts", {
  purposes: [AddressPurpose.Payment, AddressPurpose.Ordinals],
});

if (response.status === "success") {
  for (const account of response.result) {
    console.log(`${account.purpose}: ${account.address}`);
  }
} else {
  console.error("Error:", response.error);
}
