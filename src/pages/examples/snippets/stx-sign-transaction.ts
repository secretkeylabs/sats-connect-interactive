import { request } from "sats-connect";

const response = await request("stx_signTransaction", {
  transaction: "0x0200000000...", // hex-encoded unsigned Stacks transaction
  broadcast: true,
});

if (response.status === "success") {
  console.log("Signed TX:", response.result.transaction);
} else {
  console.error("Error:", response.error);
}
