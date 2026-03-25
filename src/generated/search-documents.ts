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
      "Response"
    ],
    "excerpt": "An app can connect to the user's wallet using wallet_connect . This method grants read permissions on the account selected by the user and returns commonly used data about the a...",
    "body": "Connect Wallet An app can connect to the user's wallet using wallet_connect . This method grants read permissions on the account selected by the user and returns commonly used data about the account, such as addresses and current network. If the user has already granted permissions, no connection request popup will appear, ensuring a smooth user experience. Parameters Try it Response On success, wallet_connect returns an object containing the user's wallet addresses, account ID, wallet type, and network information."
  },
  {
    "id": "Disconnect",
    "title": "Disconnect Wallet",
    "path": "/disconnect",
    "section": "Connecting",
    "headings": [
      "How it works"
    ],
    "excerpt": "To disconnect your app from the user's wallet, use the wallet_renouncePermissions method. This revokes all permissions previously granted by the user. After disconnecting, your...",
    "body": "Disconnect Wallet To disconnect your app from the user's wallet, use the wallet_renouncePermissions method. This revokes all permissions previously granted by the user. After disconnecting, your app will need to request a new connection via wallet_connect before making any further requests. How it works Calling Wallet.disconnect() internally calls wallet_renouncePermissions and clears the stored provider ID. This ensures a clean disconnection. Users can also disconnect directly from their wallet UI. Your app should listen for the disconnect event to handle this case gracefully:"
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
    "id": "WalletProviders",
    "title": "Wallet Providers",
    "path": "/wallet-providers",
    "section": "Getting Started",
    "headings": [
      "Xverse Wallet Provider",
      "Unisat Wallet Provider",
      "🔜 WBIP004 Web Providers"
    ],
    "excerpt": "Sats Connect lets your app connect with a variety of Bitcoin, Spark, Starknet & Stacks wallets: - The Xverse browser extension and mobile in-app browser - The Unisat browser ext...",
    "body": "Wallet Providers Sats Connect lets your app connect with a variety of Bitcoin, Spark, Starknet & Stacks wallets: - The Xverse browser extension and mobile in-app browser - The Unisat browser extension - 🔜 Any Bitcoin wallet which follows the WBIP004 standard - 🔜 Support for more Bitcoin, Spark, Stacks & Starknet wallets coming soon When installed in your user's browser, the wallets listed above inject a wallet provider into the window of your application. Sats Connect detects the wallet provider and lets your app interact with it via the Wallet component and Wallet.request methods. Xverse Wallet Provider Xverse's browser extension and mobile in-app browser will inject an XverseProviders object into the window of your application. The XverseProviders interface exposes two sets of methods: - Standard methods which can be invoked with Wallet.request - Xverse custom methods , which can only be invoked for users using the Xverse wallet Unisat Wallet Provider The Unisat browser extension injects a window.unisat object into the window of your application. Sats Connect lets you interact with the Unisat wallet provider via the standard Wallet.request methods. 🔜 WBIP004 Web Providers Sats Connect will soon detect wallet extensions that inject their provider information under window.btc_providers , following the WBIP004 standard, and let you interact with them via the standard Wallet.request methods. If no wallet extension is detected, Sats Connect will show a wallet selection prompt guiding the user to install a supported wallet."
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
    "excerpt": "Use the getInfo method to retrieve information about the connected wallet, such as its version, platform, and supported methods. Your app must first be connected to the wallet....",
    "body": "getInfo Use the getInfo method to retrieve information about the connected wallet, such as its version, platform, and supported methods. Your app must first be connected to the wallet. No parameters are required. Try it Response The getInfo method returns an object with wallet metadata:"
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
    "excerpt": "Use the wallet_getNetwork method to retrieve the currently selected network configuration for Bitcoin, Stacks, and Spark. Your app must first be connected to the wallet. No para...",
    "body": "wallet_getNetwork Use the wallet_getNetwork method to retrieve the currently selected network configuration for Bitcoin, Stacks, and Spark. Your app must first be connected to the wallet. No parameters are required. Try it Response Returns an object with the network names for each chain:"
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
      "Try it",
      "Response"
    ],
    "excerpt": "Use the wallet_requestPermissions method to explicitly request permissions from the user's wallet. This is an alternative to wallet_connect that focuses solely on obtaining perm...",
    "body": "wallet_requestPermissions Use the wallet_requestPermissions method to explicitly request permissions from the user's wallet. This is an alternative to wallet_connect that focuses solely on obtaining permissions without returning address data. In most cases, using wallet_connect is preferred as it combines permission granting with address retrieval in a single step. Use wallet_requestPermissions when you need fine-grained control over the permission flow. Try it Response On success, the method returns the list of permissions granted by the user."
  }
];
