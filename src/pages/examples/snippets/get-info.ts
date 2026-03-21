import { request } from "sats-connect";

const response = await request("getInfo", null);

if (response.status === "success") {
  console.log("Version:", response.result.version);
  console.log("Methods:", response.result.methods);
} else {
  console.error("Error:", response.error);
}
