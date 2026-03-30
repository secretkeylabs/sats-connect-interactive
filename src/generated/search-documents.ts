export type SearchDocument = {
  id: string;
  title: string;
  path: string;
  section: string;
  headings: string[];
  excerpt: string;
  body: string;
};

export const searchDocuments: SearchDocument[] = [
  {
    "id": "Connect",
    "title": "Connect Wallet",
    "path": "/connect",
    "section": "Connecting",
    "headings": [
      "Parameters",
      "Try it",
      "Response",
      "After connecting"
    ],
    "excerpt": "Use wallet_connect when you want a single request that both asks the user to connect and returns the account data your app usually needs right away. On success, the method grant...",
    "body": "Connect Wallet Use wallet_connect when you want a single request that both asks the user to connect and returns the account data your app usually needs right away. On success, the method grants read permissions for the selected account and returns the account id, addresses, wallet type, and active network state. If the user has already granted permissions, no connection request popup will appear, ensuring a smooth user experience. Parameters Try it Response On success, wallet_connect returns an object containing the user's wallet addresses, account ID, wallet type, and network information. After connecting - Use wallet_getAccount when you need the current connected account again later. - Use wallet permissions to understand when read access is reused versus re-requested. - Use wallet events so your UI stays in sync when the user changes accounts, networks, or disconnects."
  },
  {
    "id": "ConnectOtherWallets",
    "title": "Connect to other wallets",
    "path": "/connecting/other-wallets",
    "section": "Documentation",
    "headings": [
      "Related topics"
    ],
    "excerpt": "Use the default Wallet export from sats-connect when you want the SDK to route requests through the user's preferred compatible wallet. If a default provider is already stored,...",
    "body": "Connect to other wallets Use the default Wallet export from sats-connect when you want the SDK to route requests through the user's preferred compatible wallet. If a default provider is already stored, Wallet.request(...) will reuse it. If no provider has been chosen yet, the SDK can prompt the user to select one from the installed wallets it detects. The request itself can be any supported method, but permission-gated reads such as getAccounts , getAddresses , or wallet_connect make the connection flow explicit. Related topics - Wallet Providers - getProviders & getProviderById - Manage a default wallet"
  },
  {
    "id": "Connecting",
    "title": "Connecting to the wallet",
    "path": "/connecting",
    "section": "Documentation",
    "headings": [
      "Choose a flow",
      "After the first connection"
    ],
    "excerpt": "Sats Connect supports two complementary connection styles: - wallet_connect for a direct Xverse-style connection flow - Wallet.request(...) for multi-wallet flows that can promp...",
    "body": "Connecting to the wallet Sats Connect supports two complementary connection styles: - wallet_connect for a direct Xverse-style connection flow - Wallet.request(...) for multi-wallet flows that can prompt the user to pick a compatible provider first A successful connection gives your app read access for the selected wallet account. Your UI should still listen for wallet events because the user can change accounts, networks, or disconnect after the initial handshake. Choose a flow - Use Connect Wallet when you want addresses, account metadata, and network state returned immediately. - Use Connect to other wallets when your app supports multiple compatible providers. - Use Manage a default wallet if you want explicit control over which provider future requests should use. After the first connection - Wallet permissions - Wallet events - wallet_getAccount - wallet_getNetwork - Disconnect Wallet"
  },
  {
    "id": "Disconnect",
    "title": "Disconnect Wallet",
    "path": "/disconnect",
    "section": "Connecting",
    "headings": [
      "Disconnect via request",
      "How it works"
    ],
    "excerpt": "The current SDK exposes two request-level ways to end a session: - request(\"wallet_disconnect\", null) - request(\"wallet_renouncePermissions\", null) The convenience helper Wallet...",
    "body": "Disconnect Wallet The current SDK exposes two request-level ways to end a session: - request(\"wallet_disconnect\", null) - request(\"wallet_renouncePermissions\", null) The convenience helper Wallet.disconnect() currently wraps wallet_renouncePermissions , clears the stored provider id, and removes the default provider selection. Disconnect via request After disconnecting, your app will need to request a new connection via wallet_connect before making any further requests. How it works If you specifically want to revoke permissions without using the helper, see wallet_renouncePermissions. Users can also disconnect directly from their wallet UI. Your app should listen for the disconnect event to handle this case gracefully:"
  },
  {
    "id": "Introduction",
    "title": "👋 Introduction",
    "path": "/",
    "section": "Getting Started",
    "headings": [
      "✨ What you can do with Sats Connect",
      "🛠️ Why Sats Connect?",
      "🚀 Get started",
      "⚡ Power your Bitcoin apps with plug-and-play infra",
      "🤝 Join the community"
    ],
    "excerpt": "Sats Connect is a JavaScript library that connects apps to Bitcoin , Spark , Starknet , Stacks , and other Bitcoin Layer 2 wallets like Xverse. It's already powering apps across...",
    "body": "👋 Introduction Sats Connect is a JavaScript library that connects apps to Bitcoin , Spark , Starknet , Stacks , and other Bitcoin Layer 2 wallets like Xverse. It's already powering apps across the BitcoinFi ecosystem, with close to 2 million downloads — making it one of the most widely used ways for developers to integrate Bitcoin wallets today. This interactive documentation lets you explore every Sats Connect method with live, runnable examples. Click \"Show code\" on any example to see the implementation. ✨ What you can do with Sats Connect Developers building on Bitcoin and its L2s can use Sats Connect to interact directly with users' wallets: - 🔑 Retrieve wallet addresses for Bitcoin, Spark, Starknet, Stacks, and more - ✍️ Request signatures of messages for authentication or verification - 🔗 Sign & send transactions : Bitcoin PSBTs, Spark BTC & token transfers, Starknet & Stacks transfers & contract calls - 🖼️ Ordinals, Runes & BRC-20 : Track balances, transfer tokens and inscriptions, inscribe sats with arbitrary content 🛠️ Why Sats Connect? - Wallet-first – every interaction happens directly in the user's wallet, with explicit approval - Bitcoin-native & multi-asset – supports Bitcoin L1 (BTC, Ordinals, Runes, BRC-20) as well as emerging L2s like Spark, Starknet, and Stacks - Comprehensive toolkit – from simple address retrieval to advanced features like signing PSBTs, transferring Spark tokens, or inscribing Ordinals - Battle-tested – trusted by leading BitcoinFi apps, with close to 2M downloads and a growing developer ecosystem 🚀 Get started Install the Sats Connect SDK into your project: Then import and use it in your application: ⚡ Power your Bitcoin apps with plug-and-play infra Sats Connect lets your app connect directly to users' wallets. The Xverse API gives you plug-and-play access to Bitcoin data and infrastructure — Ordinals, Runes, mempool, balances, transactions, collections, and more — without running your own nodes or indexers. Together, they remove the heavy lifting so you can focus on building the next generation of Bitcoin apps. 🤝 Join the community If you're building with Sats Connect or Xverse API and need help with integration, join the developer forum to connect with the community and the Xverse team."
  },
  {
    "id": "ManageDefaultWallet",
    "title": "Manage a user's default wallet",
    "path": "/connecting/default-wallet",
    "section": "Documentation",
    "headings": [
      "Example",
      "Available helpers"
    ],
    "excerpt": "Sats Connect stores a default provider id once the user has selected a wallet. Future Wallet.request(...) calls reuse that provider until you change or clear it. In most apps yo...",
    "body": "Manage a user's default wallet Sats Connect stores a default provider id once the user has selected a wallet. Future Wallet.request(...) calls reuse that provider until you change or clear it. In most apps you do not need to manage this manually. The default provider is selected automatically during request flows, and \" \" Wallet.disconnect() clears it when the user signs out. Example Available helpers - getDefaultProvider() reads the stored provider id - setDefaultProvider(providerId) forces future requests to use a specific provider - removeDefaultProvider() clears the stored selection"
  },
  {
    "id": "ProviderDiscovery",
    "title": "getProviders & getProviderById",
    "path": "/wallet-providers/provider-discovery",
    "section": "Documentation",
    "headings": [
      "Example",
      "Provider metadata",
      "Related topics"
    ],
    "excerpt": "Use getProviders() to inspect the wallet providers currently available in the browser, and getProviderById() when you want the raw provider object for one specific wallet. These...",
    "body": "getProviders & getProviderById Use getProviders() to inspect the wallet providers currently available in the browser, and getProviderById() when you want the raw provider object for one specific wallet. These helpers do not require account permissions. They only inspect provider metadata already injected into the page. Example Provider metadata Related topics - Wallet Providers - Connect to other wallets - Manage a default wallet"
  },
  {
    "id": "RequestMethods",
    "title": "request methods",
    "path": "/wallet/request-methods",
    "section": "Documentation",
    "headings": [
      "Response format",
      "Common error codes",
      "Permission-aware requests"
    ],
    "excerpt": "Use request or Wallet.request to call the JSON-RPC methods documented throughout this site. - Use the named request export when you already know which provider should handle the...",
    "body": "request methods Use request or Wallet.request to call the JSON-RPC methods documented throughout this site. - Use the named request export when you already know which provider should handle the call. - Use the default Wallet export when you want Sats Connect to reuse or select a provider for the user. The interactive examples in this repo generally use \" \" Wallet.request or request from sats-connect , both of which ultimately return the same \" status, result error \" \" \" response shape. Response format Common error codes - PARSE_ERROR ( -32700 ) for invalid JSON - INVALID_REQUEST ( -32600 ) for malformed request objects - METHOD_NOT_FOUND ( -32601 ) when the method is unavailable - INVALID_PARAMS ( -32602 ) when parameters fail validation - INTERNAL_ERROR ( -32603 ) for wallet-side failures - USER_REJECTION ( -32000 ) when the user cancels or rejects - METHOD_NOT_SUPPORTED ( -32001 ) when the provider cannot perform the method for the selected address or asset - ACCESS_DENIED ( -32002 ) when your app lacks the required permission Permission-aware requests"
  },
  {
    "id": "WalletEvents",
    "title": "Xverse Wallet Events",
    "path": "/wallet/events",
    "section": "Documentation",
    "headings": [
      "Example",
      "Available events"
    ],
    "excerpt": "Use Wallet.addListener() to keep your UI in sync with account, network, and disconnect changes after the user has connected. The shipped event names in sats-connect@4.2.1 are ac...",
    "body": "Xverse Wallet Events Use Wallet.addListener() to keep your UI in sync with account, network, and disconnect changes after the user has connected. The shipped event names in sats-connect@4.2.1 are accountChange , networkChange , and disconnect . Example Available events"
  },
  {
    "id": "WalletMethods",
    "title": "Wallet Methods",
    "path": "/wallet-methods",
    "section": "Documentation",
    "headings": [
      "Wallet lifecycle and permissions",
      "Wallet state and network management",
      "Method families"
    ],
    "excerpt": "The docs in this site cover two related method families: - standard request methods for Bitcoin, Stacks, Spark, Runes, and Ordinals - wallet_ methods for connection, permissions...",
    "body": "Wallet Methods The docs in this site cover two related method families: - standard request methods for Bitcoin, Stacks, Spark, Runes, and Ordinals - wallet_ methods for connection, permissions, wallet inspection, and network management Use request methods for the transport and response model. Use Xverse custom methods for the wallet-specific extensions currently documented in this repo. Wallet lifecycle and permissions - Connect Wallet - Disconnect Wallet - wallet_requestPermissions - wallet_getCurrentPermissions - wallet_renouncePermissions Wallet state and network management - wallet_getAccount - wallet_getWalletType - wallet_getNetwork - wallet_changeNetwork - wallet_addNetwork Method families - Bitcoin methods - Stacks methods - Spark methods"
  },
  {
    "id": "WalletPermissions",
    "title": "Xverse Wallet Permissions",
    "path": "/wallet/permissions",
    "section": "Documentation",
    "headings": [
      "Methods that benefit from read permissions",
      "Request permissions on demand",
      "Inspect or revoke permissions",
      "Signatures still prompt per request"
    ],
    "excerpt": "Permissions let your app read account or wallet state without prompting the user again on every request. In sats-connect@4.2.1 , wallet_connect is still the simplest way to requ...",
    "body": "Xverse Wallet Permissions Permissions let your app read account or wallet state without prompting the user again on every request. In sats-connect@4.2.1 , wallet_connect is still the simplest way to request the initial account-read permission. Use wallet_requestPermissions when you want to trigger or retry the permission flow explicitly. Methods that benefit from read permissions - wallet_getAccount - getAddresses - getBalance - ord_getInscriptions - runes_getBalance - stx_getAccounts - spark_getAddresses - spark_getBalance Request permissions on demand Inspect or revoke permissions - wallet_getCurrentPermissions shows the permissions currently granted to your app - wallet_renouncePermissions clears them again Signatures still prompt per request Bitcoin, Stacks, and Spark signing or transaction methods still require explicit user approval each time you call them."
  },
  {
    "id": "WalletProviders",
    "title": "Wallet Providers",
    "path": "/wallet-providers",
    "section": "Getting Started",
    "headings": [
      "Xverse Wallet Provider",
      "Unisat Wallet Provider",
      "🔜 WBIP004 Web Providers",
      "Provider Discovery"
    ],
    "excerpt": "Sats Connect lets your app connect with a variety of Bitcoin, Spark, Starknet, and Stacks wallets: - The Xverse browser extension and mobile in-app browser - The Unisat browser...",
    "body": "Wallet Providers Sats Connect lets your app connect with a variety of Bitcoin, Spark, Starknet, and Stacks wallets: - The Xverse browser extension and mobile in-app browser - The Unisat browser extension - 🔜 Any Bitcoin wallet which follows the WBIP004 standard - 🔜 Support for more Bitcoin, Spark, Stacks & Starknet wallets coming soon When installed in your user's browser, compatible wallets inject provider metadata and request methods into the window of your application. Sats Connect can inspect those providers directly through getProviders & getProviderById, or it can manage provider selection for the user through Wallet.request . Xverse Wallet Provider Xverse's browser extension and mobile in-app browser will inject an XverseProviders object into the window of your application. The XverseProviders interface exposes two sets of methods: - Standard methods which can be invoked with Wallet.request - Xverse custom methods , which can only be invoked for users using the Xverse wallet Unisat Wallet Provider The Unisat browser extension injects a window.unisat object into the window of your application. Sats Connect lets you interact with the Unisat wallet provider via the standard Wallet.request methods. 🔜 WBIP004 Web Providers Sats Connect will soon detect wallet extensions that inject their provider information under window.btc_providers , following the WBIP004 standard, and let you interact with them via the standard Wallet.request methods. Provider Discovery Use getProviders & getProviderById to inspect installed providers and getInfo to read wallet metadata such as version, platform, and supported methods. If no compatible provider is detected, discovery helpers will return an empty list and request flows may fall back to wallet selection or installation guidance."
  },
  {
    "id": "XverseCustomMethods",
    "title": "Xverse Custom Methods",
    "path": "/wallet/custom-methods",
    "section": "Documentation",
    "headings": [
      "Currently documented wallet methods"
    ],
    "excerpt": "The shipped wallet\\_\\ request surface extends the standard request methods with wallet lifecycle, permission, and network-management primitives. Not every provider implements ev...",
    "body": "Xverse Custom Methods The shipped wallet\\_\\ request surface extends the standard request methods with wallet lifecycle, permission, and network-management primitives. Not every provider implements every wallet_ method. If a wallet does not support one, expect METHOD_NOT_FOUND or METHOD_NOT_SUPPORTED . Currently documented wallet methods - Connect Wallet - Disconnect Wallet - wallet_requestPermissions - wallet_getCurrentPermissions - wallet_renouncePermissions - wallet_getAccount - wallet_getWalletType - wallet_getNetwork - wallet_changeNetwork - wallet_addNetwork The package also exports wallet_changeNetworkById for switching to a custom network by the id returned from wallet_addNetwork ."
  },
  {
    "id": "bitcoin/EtchRunes",
    "title": "runes_etch",
    "path": "/bitcoin/runes-etch",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the runes_etch method to create (etch) a new Rune on the Bitcoin blockchain. This defines the Rune's properties including name, symbol, and minting terms. Parameters Try it...",
    "body": "runes_etch Use the runes_etch method to create (etch) a new Rune on the Bitcoin blockchain. This defines the Rune's properties including name, symbol, and minting terms. Parameters Try it Response"
  },
  {
    "id": "bitcoin/GetAccounts",
    "title": "getAccounts",
    "path": "/bitcoin/get-accounts",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the getAccounts method to request wallet account details for specific purposes. Similar to getAddresses but returns additional wallet type information. Parameters Try it Res...",
    "body": "getAccounts Use the getAccounts method to request wallet account details for specific purposes. Similar to getAddresses but returns additional wallet type information. Parameters Try it Response Returns an array of account objects, each containing:"
  },
  {
    "id": "bitcoin/GetAddresses",
    "title": "getAddresses",
    "path": "/bitcoin/get-addresses",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the getAddresses method to request wallet addresses for specific purposes like payment, ordinals, or Stacks. The wallet will prompt the user to share their addresses. Parame...",
    "body": "getAddresses Use the getAddresses method to request wallet addresses for specific purposes like payment, ordinals, or Stacks. The wallet will prompt the user to share their addresses. Parameters Try it Response Returns an object with an addresses array, where each address includes:"
  },
  {
    "id": "bitcoin/GetBalance",
    "title": "getBalance",
    "path": "/bitcoin/get-balance",
    "section": "Bitcoin Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the getBalance method to retrieve your user's Bitcoin balance — the amount of BTC that their connected wallet's Bitcoin payment address holds. Your app must first be connect...",
    "body": "getBalance Use the getBalance method to retrieve your user's Bitcoin balance — the amount of BTC that their connected wallet's Bitcoin payment address holds. Your app must first be connected to the wallet and have account read permissions. No query parameters are required. Try it Response The getBalance method returns an object representing the connected wallet's payment address BTC holdings: This method does not trigger any wallet prompt or signing request. It simply reads the balance from the connected account."
  },
  {
    "id": "bitcoin/GetInfo",
    "title": "getInfo",
    "path": "/bitcoin/get-info",
    "section": "Bitcoin Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the getInfo method to retrieve metadata about the selected wallet provider, such as its version, platform, and supported request methods. No prior account permissions are re...",
    "body": "getInfo Use the getInfo method to retrieve metadata about the selected wallet provider, such as its version, platform, and supported request methods. No prior account permissions are required. If no provider has been selected yet, calling Wallet.request(\"getInfo\", null) may first prompt the user to choose a compatible wallet. Try it Response The getInfo method returns an object with wallet metadata:"
  },
  {
    "id": "bitcoin/GetInscriptions",
    "title": "ord_getInscriptions",
    "path": "/bitcoin/get-inscriptions",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the ord_getInscriptions method to retrieve a paginated list of ordinal inscriptions owned by the connected wallet. Parameters Try it Response Returns an object with the insc...",
    "body": "ord_getInscriptions Use the ord_getInscriptions method to retrieve a paginated list of ordinal inscriptions owned by the connected wallet. Parameters Try it Response Returns an object with the inscriptions and pagination details:"
  },
  {
    "id": "bitcoin/GetRunesBalance",
    "title": "runes_getBalance",
    "path": "/bitcoin/runes-get-balance",
    "section": "Bitcoin Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the runes_getBalance method to retrieve the Runes token balances held by the connected wallet. Your app must first be connected to the wallet. No parameters are required. Tr...",
    "body": "runes_getBalance Use the runes_getBalance method to retrieve the Runes token balances held by the connected wallet. Your app must first be connected to the wallet. No parameters are required. Try it Response Returns an object with a balances array. Each balance includes:"
  },
  {
    "id": "bitcoin/MintRunes",
    "title": "runes_mint",
    "path": "/bitcoin/runes-mint",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the runes_mint method to mint Runes tokens. This creates a funding transaction to mint a specified Rune. Parameters Try it Response",
    "body": "runes_mint Use the runes_mint method to mint Runes tokens. This creates a funding transaction to mint a specified Rune. Parameters Try it Response"
  },
  {
    "id": "bitcoin/SendInscriptions",
    "title": "ord_sendInscriptions",
    "path": "/bitcoin/send-inscriptions",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the ord_sendInscriptions method to send ordinal inscriptions from the connected wallet to a recipient address. Parameters Each transfer object contains: Try it Response",
    "body": "ord_sendInscriptions Use the ord_sendInscriptions method to send ordinal inscriptions from the connected wallet to a recipient address. Parameters Each transfer object contains: Try it Response"
  },
  {
    "id": "bitcoin/SendTransfer",
    "title": "sendTransfer",
    "path": "/bitcoin/send-transfer",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the sendTransfer method to request a transfer of Bitcoin to one or more recipients from the user's wallet. The user will be prompted to review the transaction, including rec...",
    "body": "sendTransfer Use the sendTransfer method to request a transfer of Bitcoin to one or more recipients from the user's wallet. The user will be prompted to review the transaction, including recipients, amounts, and the desired transaction fee. Parameters \", required: true, description: \"Array of recipient objects, each with a Bitcoin address and an amount in satoshis.\", , /> Try it Response On success, sendTransfer returns a result object containing the transaction ID: This method will prompt the user to sign and broadcast a real Bitcoin transaction. Make sure to double-check addresses and amounts before sending."
  },
  {
    "id": "bitcoin/SignMessage",
    "title": "signMessage",
    "path": "/bitcoin/sign-message",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the signMessage method to request the user to sign a message with their wallet's Bitcoin address. This is commonly used for authentication, identity verification, or proof-o...",
    "body": "signMessage Use the signMessage method to request the user to sign a message with their wallet's Bitcoin address. This is commonly used for authentication, identity verification, or proof-of-ownership. Parameters Try it Response On success, signMessage returns the signature and message hash: Use ECDSA for legacy and SegWit addresses. Use BIP322 for taproot (P2TR) addresses. The wallet user will see the message content before approving the signing request."
  },
  {
    "id": "bitcoin/SignPsbt",
    "title": "signPsbt",
    "path": "/bitcoin/sign-psbt",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the signPsbt method to request the user to sign a Partially Signed Bitcoin Transaction (PSBT). This is the most versatile method for constructing custom Bitcoin transactions...",
    "body": "signPsbt Use the signPsbt method to request the user to sign a Partially Signed Bitcoin Transaction (PSBT). This is the most versatile method for constructing custom Bitcoin transactions. Parameters \", required: true, description: \"Map of address to array of input indices that address should sign.\", , name: \"broadcast\", type: \"boolean\", required: false, description: \"If true, the signed transaction will be broadcast to the network. Defaults to false.\", , /> Try it Response On success, signPsbt returns: Make sure you construct a valid PSBT before requesting a signature. The wallet will reject malformed PSBTs."
  },
  {
    "id": "bitcoin/TransferRunes",
    "title": "runes_transfer",
    "path": "/bitcoin/runes-transfer",
    "section": "Bitcoin Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the runes_transfer method to transfer Runes tokens to one or more recipients. Parameters Each recipient object contains: Try it Response",
    "body": "runes_transfer Use the runes_transfer method to transfer Runes tokens to one or more recipients. Parameters Each recipient object contains: Try it Response"
  },
  {
    "id": "spark/GetAddresses",
    "title": "spark_getAddresses",
    "path": "/spark/get-addresses",
    "section": "Spark Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the spark_getAddresses method to retrieve the Spark layer addresses from the connected wallet. Your app must first be connected to the wallet. No parameters are required. Tr...",
    "body": "spark_getAddresses Use the spark_getAddresses method to retrieve the Spark layer addresses from the connected wallet. Your app must first be connected to the wallet. No parameters are required. Try it Response Returns an object with an addresses array containing Spark address details:"
  },
  {
    "id": "spark/GetBalance",
    "title": "spark_getBalance",
    "path": "/spark/get-balance",
    "section": "Spark Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the spark_getBalance method to retrieve the user's Spark balance. Spark is a Bitcoin Layer 2 that enables instant, low-fee BTC transfers. Your app must be connected to the w...",
    "body": "spark_getBalance Use the spark_getBalance method to retrieve the user's Spark balance. Spark is a Bitcoin Layer 2 that enables instant, low-fee BTC transfers. Your app must be connected to the wallet with Spark address permissions before calling this method. Try it Response The method returns the user's Spark balance information."
  },
  {
    "id": "spark/SignMessage",
    "title": "spark_signMessage",
    "path": "/spark/sign-message",
    "section": "Spark Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the spark_signMessage method to sign a message with the user's Spark key. This can be used for authentication or identity verification on Spark. Parameters Try it Response",
    "body": "spark_signMessage Use the spark_signMessage method to sign a message with the user's Spark key. This can be used for authentication or identity verification on Spark. Parameters Try it Response"
  },
  {
    "id": "spark/Transfer",
    "title": "spark_transfer",
    "path": "/spark/transfer",
    "section": "Spark Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the spark_transfer method to send BTC via the Spark Layer 2 network. Spark transfers are instant and have minimal fees compared to on-chain Bitcoin transactions. Parameters...",
    "body": "spark_transfer Use the spark_transfer method to send BTC via the Spark Layer 2 network. Spark transfers are instant and have minimal fees compared to on-chain Bitcoin transactions. Parameters \", required: true, description: \"Array of recipient objects with Spark addresses and amounts in satoshis.\", , /> Try it Response On success, returns the transfer result with transaction details. Spark transfers settle instantly, making them ideal for micropayments and frequent transfers."
  },
  {
    "id": "spark/TransferToken",
    "title": "spark_transferToken",
    "path": "/spark/transfer-token",
    "section": "Spark Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the spark_transferToken method to transfer a token on the Spark layer. This is different from spark_transfer which transfers BTC — this method transfers specific tokens iden...",
    "body": "spark_transferToken Use the spark_transferToken method to transfer a token on the Spark layer. This is different from spark_transfer which transfers BTC — this method transfers specific tokens identified by a Bech32m token identifier. Parameters Try it Response"
  },
  {
    "id": "stacks/CallContract",
    "title": "stx_callContract",
    "path": "/stacks/call-contract",
    "section": "Stacks Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_callContract method to call a function on a deployed Stacks smart contract. The wallet will prompt the user to sign and broadcast the transaction. Parameters To conv...",
    "body": "stx_callContract Use the stx_callContract method to call a function on a deployed Stacks smart contract. The wallet will prompt the user to sign and broadcast the transaction. Parameters To convert Clarity values to hex, use the cvToHex helper from the @stacks/transactions package. Try it Response"
  },
  {
    "id": "stacks/DeployContract",
    "title": "stx_deployContract",
    "path": "/stacks/deploy-contract",
    "section": "Stacks Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_deployContract method to deploy a Clarity smart contract to the Stacks blockchain. The wallet will prompt the user to sign and broadcast the deployment transaction....",
    "body": "stx_deployContract Use the stx_deployContract method to deploy a Clarity smart contract to the Stacks blockchain. The wallet will prompt the user to sign and broadcast the deployment transaction. Parameters Try it Response"
  },
  {
    "id": "stacks/GetAccounts",
    "title": "stx_getAccounts",
    "path": "/stacks/get-accounts",
    "section": "Stacks Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_getAccounts method to retrieve the Stacks account details from the connected wallet, including addresses and Gaia hub information. Your app must first be connected t...",
    "body": "stx_getAccounts Use the stx_getAccounts method to retrieve the Stacks account details from the connected wallet, including addresses and Gaia hub information. Your app must first be connected to the wallet. No parameters are required. Try it Response Returns an object with an addresses array and network information:"
  },
  {
    "id": "stacks/GetAddresses",
    "title": "stx_getAddresses",
    "path": "/stacks/get-addresses",
    "section": "Stacks Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_getAddresses method to retrieve the Stacks addresses from the connected wallet. Your app must first be connected to the wallet. No parameters are required. Try it Re...",
    "body": "stx_getAddresses Use the stx_getAddresses method to retrieve the Stacks addresses from the connected wallet. Your app must first be connected to the wallet. No parameters are required. Try it Response Returns an object with an addresses array containing Stacks address details:"
  },
  {
    "id": "stacks/SignMessage",
    "title": "stx_signMessage",
    "path": "/stacks/sign-message",
    "section": "Stacks Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_signMessage method to request the user to sign a message with their Stacks address. This is useful for authentication and proof-of-ownership. Parameters Try it Response",
    "body": "stx_signMessage Use the stx_signMessage method to request the user to sign a message with their Stacks address. This is useful for authentication and proof-of-ownership. Parameters Try it Response"
  },
  {
    "id": "stacks/SignStructuredMessage",
    "title": "stx_signStructuredMessage",
    "path": "/stacks/sign-structured-message",
    "section": "Stacks Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_signStructuredMessage method to request a signature for structured Stacks payloads. The wallet treats domain and message as opaque strings. Your app is responsible f...",
    "body": "stx_signStructuredMessage Use the stx_signStructuredMessage method to request a signature for structured Stacks payloads. The wallet treats domain and message as opaque strings. Your app is responsible for choosing and validating the structured format it wants users to sign. Parameters Try it Response"
  },
  {
    "id": "stacks/SignTransaction",
    "title": "stx_signTransaction",
    "path": "/stacks/sign-transaction",
    "section": "Stacks Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_signTransaction method to sign a Stacks transaction. The transaction should be provided as a hex-encoded string. Optionally, the wallet can broadcast it after signin...",
    "body": "stx_signTransaction Use the stx_signTransaction method to sign a Stacks transaction. The transaction should be provided as a hex-encoded string. Optionally, the wallet can broadcast it after signing. Parameters You can construct unsigned transactions using the @stacks/transactions package with functions like makeUnsignedSTXTokenTransfer or makeUnsignedContractCall . Try it Response"
  },
  {
    "id": "stacks/TransferStx",
    "title": "stx_transferStx",
    "path": "/stacks/transfer-stx",
    "section": "Stacks Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the stx_transferStx method to request a transfer of STX tokens from the user's Stacks wallet to a recipient address. Parameters Try it Response Stacks amounts are denominate...",
    "body": "stx_transferStx Use the stx_transferStx method to request a transfer of STX tokens from the user's Stacks wallet to a recipient address. Parameters Try it Response Stacks amounts are denominated in micro-STX. To send 1 STX, set the amount to 1,000,000."
  },
  {
    "id": "wallet/AddNetwork",
    "title": "wallet_addNetwork",
    "path": "/wallet/add-network",
    "section": "Wallet Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_addNetwork method to register a custom Bitcoin, Stacks, or Starknet network with the connected wallet. Support for adding custom networks depends on the wallet. T...",
    "body": "wallet_addNetwork Use the wallet_addNetwork method to register a custom Bitcoin, Stacks, or Starknet network with the connected wallet. Support for adding custom networks depends on the wallet. The interactive example uses sample local-network values that you should replace with your own endpoints. Parameters Try it Response"
  },
  {
    "id": "wallet/ChangeNetwork",
    "title": "wallet_changeNetwork",
    "path": "/wallet/change-network",
    "section": "Wallet Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_changeNetwork method to switch the active Bitcoin network in the connected wallet. In sats-connect@4.2.1 , this method accepts a Bitcoin network name. If your wal...",
    "body": "wallet_changeNetwork Use the wallet_changeNetwork method to switch the active Bitcoin network in the connected wallet. In sats-connect@4.2.1 , this method accepts a Bitcoin network name. If your wallet has assigned ids to custom networks, use wallet_changeNetworkById for id-based switching. Parameters Try it Response Returns null on success."
  },
  {
    "id": "wallet/GetAccount",
    "title": "wallet_getAccount",
    "path": "/wallet/get-account",
    "section": "Wallet Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_getAccount method to retrieve account information for the currently connected wallet. This includes the account ID, wallet type, and all associated addresses. Thi...",
    "body": "wallet_getAccount Use the wallet_getAccount method to retrieve account information for the currently connected wallet. This includes the account ID, wallet type, and all associated addresses. This method requires the user to have previously connected their wallet to your app. If the app doesn't have permissions, you'll receive an ACCESS_DENIED error. Try it Response"
  },
  {
    "id": "wallet/GetCurrentPermissions",
    "title": "wallet_getCurrentPermissions",
    "path": "/wallet/get-current-permissions",
    "section": "Wallet Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_getCurrentPermissions method to check what permissions your app currently has from the connected wallet. Your app must first be connected to the wallet. No parame...",
    "body": "wallet_getCurrentPermissions Use the wallet_getCurrentPermissions method to check what permissions your app currently has from the connected wallet. Your app must first be connected to the wallet. No parameters are required. Try it Response Returns an array of permission objects. Each permission has a type ( \"account\" or \"wallet\" ) and describes what actions are allowed:"
  },
  {
    "id": "wallet/GetNetwork",
    "title": "wallet_getNetwork",
    "path": "/wallet/get-network",
    "section": "Wallet Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_getNetwork method to retrieve the currently selected network configuration for Bitcoin, Stacks, and Spark. Your app must first be connected to the wallet. In sats...",
    "body": "wallet_getNetwork Use the wallet_getNetwork method to retrieve the currently selected network configuration for Bitcoin, Stacks, and Spark. Your app must first be connected to the wallet. In sats-connect@4.2.1 , the shipped result type includes Bitcoin, Stacks, and Spark network data. Try it Response Returns an object with the network names for each chain:"
  },
  {
    "id": "wallet/GetWalletType",
    "title": "wallet_getWalletType",
    "path": "/wallet/get-wallet-type",
    "section": "Wallet Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_getWalletType method to determine the type of wallet the user is using — whether it's a software wallet, Ledger hardware wallet, or Keystone hardware wallet. Your...",
    "body": "wallet_getWalletType Use the wallet_getWalletType method to determine the type of wallet the user is using — whether it's a software wallet, Ledger hardware wallet, or Keystone hardware wallet. Your app must first be connected to the wallet. No parameters are required. Try it Response Returns one of: \"software\" , \"ledger\" , or \"keystone\" ."
  },
  {
    "id": "wallet/RenouncePermissions",
    "title": "wallet_renouncePermissions",
    "path": "/wallet/renounce-permissions",
    "section": "Wallet Methods",
    "headings": [
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_renouncePermissions method to voluntarily give up all permissions your app currently has from the connected wallet. This effectively resets the connection state....",
    "body": "wallet_renouncePermissions Use the wallet_renouncePermissions method to voluntarily give up all permissions your app currently has from the connected wallet. This effectively resets the connection state. No parameters are required. After renouncing, your app will need to request permissions again to access wallet data. Try it Response Returns null on success."
  },
  {
    "id": "wallet/RequestPermissions",
    "title": "wallet_requestPermissions",
    "path": "/wallet/request-permissions",
    "section": "Wallet Methods",
    "headings": [
      "Parameters",
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_requestPermissions method to explicitly request wallet permissions without also returning account data. In most cases, using wallet_connect is preferred as it com...",
    "body": "wallet_requestPermissions Use the wallet_requestPermissions method to explicitly request wallet permissions without also returning account data. In most cases, using wallet_connect is preferred as it combines permission granting with address retrieval in a single step. Use wallet_requestPermissions when you need fine-grained control over the permission flow. Parameters Try it Response On success, the method returns true ."
  }
];
