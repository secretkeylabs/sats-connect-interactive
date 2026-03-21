import { request } from "sats-connect";

const response = await request("stx_getAddresses", null);

if (response.status === "success") {
  for (const addr of response.result.addresses) {
    console.log(`${addr.purpose}: ${addr.address}`);
  }
} else {
  console.error("Error:", response.error);
}
