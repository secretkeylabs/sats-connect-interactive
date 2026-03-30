import {
  getDefaultProvider,
  getProviders,
  setDefaultProvider,
} from "sats-connect";

const providers = getProviders();
const currentDefault = getDefaultProvider();

if (!currentDefault && providers[0]) {
  setDefaultProvider(providers[0].id);
}

console.log("Default provider:", getDefaultProvider());
