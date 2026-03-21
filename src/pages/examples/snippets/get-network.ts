import { request } from "sats-connect";

const response = await request("wallet_getNetwork", null);

if (response.status === "success") {
  console.log("Bitcoin:", response.result.bitcoin.name);
  console.log("Stacks:", response.result.stacks.name);
  console.log("Spark:", response.result.spark.name);
} else {
  console.error("Error:", response.error);
}
