import { request } from "sats-connect";

const response = await request("wallet_renouncePermissions", null);

if (response.status === "success") {
  console.log("Permissions renounced");
} else {
  console.error("Error:", response.error);
}
