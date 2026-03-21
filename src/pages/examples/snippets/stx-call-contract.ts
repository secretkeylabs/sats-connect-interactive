import { request } from "sats-connect";

const response = await request("stx_callContract", {
  contract: "SP000000000000000000002Q6VF78.pox-4",
  functionName: "get-stacker-info",
  functionArgs: [],
});

if (response.status === "success") {
  console.log("Transaction ID:", response.result.txid);
} else {
  console.error("Error:", response.error);
}
