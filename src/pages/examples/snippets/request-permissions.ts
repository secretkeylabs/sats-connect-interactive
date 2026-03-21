import { request } from "sats-connect";

const response = await request("wallet_requestPermissions", undefined);

if (response.status === "success") {
  console.log("Permissions granted:", response.result);
} else {
  console.error("Error:", response.error);
}
