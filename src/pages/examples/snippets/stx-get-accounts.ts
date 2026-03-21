import { request } from "sats-connect";

const response = await request("stx_getAccounts", null);

if (response.status === "success") {
  for (const addr of response.result.addresses) {
    console.log(`${addr.address} (${addr.publicKey})`);
  }
} else {
  console.error("Error:", response.error);
}
