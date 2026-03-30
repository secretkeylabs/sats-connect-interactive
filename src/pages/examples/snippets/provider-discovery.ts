import { getProviderById, getProviders } from "sats-connect";

const providers = getProviders();

for (const provider of providers) {
  console.log(provider.id, provider.name, provider.methods);
}

if (providers[0]) {
  const selectedProvider = getProviderById(providers[0].id);
  const info = await selectedProvider.request("getInfo", null);
  console.log(info);
}
