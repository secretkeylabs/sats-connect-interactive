import { request } from "sats-connect";

const response = await request("wallet_getCurrentPermissions", null);

if (response.status === "success") {
  console.log("Permissions:", response.result);
} else {
  console.error("Error:", response.error);
}
