import { AddressPurpose, request } from "sats-connect";

const response = await request("getAddresses", {
  purposes: [AddressPurpose.Payment, AddressPurpose.Ordinals],
  message: "Provide your addresses",
});

if (response.status === "success") {
  for (const addr of response.result.addresses) {
    console.log(`${addr.purpose}: ${addr.address}`);
  }
} else {
  console.error("Error:", response.error);
}
