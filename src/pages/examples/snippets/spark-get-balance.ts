import { request } from "sats-connect";

const response = await request("spark_getBalance", null);

if (response.status === "success") {
  console.log("Spark Balance:", response.result);
} else {
  console.error("Error:", response.error);
}
