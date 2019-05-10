---
title: 21 Common terms in Zilliqa/ Crypto community
sort: 10
priority: 80
excerpt: Here is a list of terms you may encounter in Zilliqa or in other services on a daily basis. What is Account address, Private key, Gas Limit, Gas Price, Nonce, Keystore file, Mnemonice Seed, Scilla

---


# Common terms in Crypto community

**Here is a list of terms you may encounter in Zilliqa or in other services on a daily basis.**

### Wallet

- The interface / client / wrapper / holder that you use to manage your account(s).
- Example: Zillet.io for Zilliqa, MyEtherWallet.com, MetaMask In case of Ethereum or a hardware wallet (i.e. Ledger, Trezor, etc..).

### Account

- A public & private keypair that “holds” your funds.
- Your funds are actually stored on the blockchain, not in the wallet or account.
- Just like your Facebook account has a username (public) and password (private), so does your Zilliqa account.  For additional security, you can use a password to encrypt your private key which would result in a username (public) and password (private) and password for that password (private + more secure).

### (Account / Zilliqa / Public) Address

- You use this to send funds to an account.
- Sometimes referred to as the “public key”
- A string made up of 0x + 40 hexadecimal characters. (42 total characters).
- In Zilliqa, the address begins with 0x. similar to Ethereum but these two address generation process is diffrent so the **Ethereum address won't work on Zilliqa Blockchain** Example: 0x7e257de121fbac2400ab963ca9f39ee996517c11

### Public Key

- In cryptography, you have a keypair: the public and private key.
- You can derive a public key from a private key, but cannot derive a private key from a public key.

### Private Key

- You use this to access and send funds from an account.
- The secret half of your Address / public key pairing.
- A string of 64 hexadecimal characters. (Almost) every string of 64 hexadecimal characters is a private key.
- If you hand-type a private key differently today than yesterday, you will access a different wallet. Never hand-type your private key.
- This is the key you need to keep safe. Without it you cannot access your funds. Although, you don’t need to save this raw, unencrypted private key in this format. You can saving the fancy versions of it (i.e. the Keystore File / Mnemonic Phrase). Example: 2cf290b8d2b330dcc3b967c6133884c5373bb543965c16a6579cc992c7749191

### Keystore File

- Encrypted version of your private key in JSON format (though it does not have a JSON extension).
- A fancy version of your private key that is protected by a password of your choosing.
- Safer than a private key because you need the password.
- File name usually is in the format:
UTC + -- + DATE_CREATED + -- + YOUR_ADDRESS_WITHOUT_THE_Ox
- Example of file: <br />Name: UTC--2019-05-10T06_17_02.603Z.0--7e257de121fbac2400ab963ca9f39ee996517c11 <br /> Content: {"address":"7e257de121fbac2400ab963ca9f39ee996517c11","crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"6970790ef7830357a5e01d1824f508f6"},"ciphertext":"985f4e7a1a18cfd8638a01c8d562d1031fd300433d2ac83c930ae06ed5b287f5","kdf":"scrypt","kdfparams":{"salt":"1ee623c31e7204b83e99620c26c42316eb2006f2be813a924e80b27f4f846824","n":8192,"c":262144,"r":8,"p":1,"dklen":32},"mac":"99b74bce3bcc552ee771109703806e2b357b29ab4d66481293ebde92cc20ecf6"},"id":"64383436-3762-4439-b933-323135356338","version":3}

### Mnemonic Phrase (Recovery Phrase)

- Mnemonic phrases, also known as ‘recovery phrases’ or ‘seed words’, are ordered lists of 12 - 24 words which bring you to specific wallet addresses. These are typically used for recovery and allow direct access into one’s wallet, so they should be treated carefully. Example: `barely print notice caution ancient zebra dwarf tell aerobic siren float mind`


- Mnemonic phrases can sometimes be paired with a password as well for added encryption and security. When wallets offer this service, the password is used as an extra added word to the end of the phrase. For example, 12-word phrases become 13 words, and 24-word phrases become 25 words.

- In terms of privacy, mnemonic phrases are just as sensitive as your private key. Anyone can permanently access your wallet with your phrase. Furthermore, these phrases cannot be changed so keeping them safe is crucial.

### Hardware Wallet

- Typically, a single-purpose device that “holds” your private key(s), ensuring these keys are safe.
- Generally, they use a 24-word phrase. This phrase you should write down on paper (not on your computer) and store separately from your hardware wallet, in multiple locations.
- If you lose your hardware wallet, you can still gain access to your accounts & funds via the word-phrase you wrote down.
- Never type the recovery phrase on your computer. It defeats the purpose of your hardware wallet.

### Gas Limit

- The Gas Limit is the maximum amount of Gas that a user is willing to pay for performing this action or confirming a transaction.

- *1000 Li  is the standard Gas Limit for regular transactions.*

### Gas Price

- The price of Gas (Gas Price) is the amount of ZIL that the user is willing to spend on each unit of Gas.

- *1 ZIL is the standard Gas Price for regular transactions.*


### Nonce 

- It's simply the transaction count of an account.
- A transaction counter in each account. This prevents replay attacks where a transaction sending eg. 20 coins from A to B can be replayed by B over and over to continually drain A's balance.

### Hexadecimal

- Used all over Zilliqa for a variety of things, a hexadecimal string is comprised of the numbers 0 1 2 3 4 5 6 7 8 9 and A B C D E F.

### Seed

- The input given to derive a private key.
- Some use this as another way of saying ‘Recovery Phrase’ or ‘Mnemonic Phrase’.
- This should always be generated in a truly random way, not something you make up with your brain.
If you chose the seed, it is known as a brain wallet.

### Brain Wallet

- An account generated from a seed / password / passphrase of your choosing.
- Humans are not capable of generating enough entropy, so the wallets derived from these phrases are insecure.
- Brain wallets can generally be brute-forced easily by super fast computers.
- Don’t use brain wallets.

<!-- 
### Entropy

- Also known as “randomness”. The more random something is, the more entropy it has, and the more secure it is.
- Usually defined in “bits of entropy”, or the number of years it would take to brute-force a ____ (i.e. private key) derived with that much entropy.
- Zilliqa private keys are 256-bit keys -->

### Encrypted vs Unencrypted Keys

- An unencrypted private key is 64 characters long, and it is used to restore wallets.
- An encrypted key is also 64 letters long and is a regular private key that has gone through the process of encryption, as defined above.
- Example: If the world ‘Apple’ was your shortened private key, then it was encrypted three letters down the alphabet, your new shortened encrypted key would be ‘Dssoh’. Since you know the way to encrypt this key, you could derive the original private key from it by reversing the method of encryption.
- Usually, encrypted private keys are kept within the extension or device they are encrypted by, and they remain out of sight from the user. This is meant to add another layer of security to keep a user’s wallet information safe.

<hr />

## General terms

### Blockchain

**Blockchain is a digital ledger in which transactions made in bitcoin or another cryptocurrency are recorded chronologically and publicly.**

A Blockchain is a type of database. Essentially, it is a spreadsheet where data is stored in cells (or “blocks”) that are linked together in order by cryptographic codes. This database is generally distributed on many computers instead of being stored in one central location. In Bitcoin, the blockchain describes both the ledger and technology behind the ledger. Many who aren’t believers in Bitcoin as a currency / digital asset are supporters of blockchain technology and its many applications both within finance and beyond.

Picture a spreadsheet that is duplicated thousands of times across a network of computers. Then imagine that this network is designed to update this spreadsheet every 10-15 minutes regularly and you have a basic understanding of the blockchain.

Information held on a blockchain exists as a shared — and continually reconciled — database. This is a way of using the network that has obvious benefits. The blockchain database isn’t stored in any single location, meaning the records it keeps are truly public and easily verifiable. No centralized version of this information exists for a hacker to corrupt. Hosted by millions of computers simultaneously, its data is accessible to anyone on the internet.

### Cryptocurrencies

Cryptocurrencies are a new form of digital currencies which are built on top of a new technology called blockchain. Cryptocurrencies are secure (through latest encryption techniques), fast and fully traceable.

A cryptocurrency is a digital or virtual currency designed to work as a medium of exchange. It uses cryptography to secure and verify transactions as well as to control the creation of new units of a particular cryptocurrency. Essentially, cryptocurrencies are limited entries in a database that no one can change unless specific conditions are fulfilled.

### Zilliqa

**Zilliqa is the first public blockchain designed to implement sharding, allowing for linear scaling as the blockchain grows in size.**

So far, scalability has been a prominent issue for blockchain and distributed ledger technologies. Transactions fees and time rise owing to network limitations. 

Zilliqa changes the way a blockchain reaches consensus. It can process tens or hundreds of thousands of transactions per second, depending on the number of nodes on the network. Theoretically, there’s no limit to this number.

Zilliqa also promises to support smart contracts- a major technical challenge on a sharded network.

### Trustless

A distributed trustless consensus which the blockchain is responsible for. Since everyone has a copy of the ledger of all transactions ever executed, there is no need for a third-party. You can verify the transactions yourself, however the Zilliqa blockchain was created to ensure rules and agreements between all parties are executed only when all conditions are met.

### Smart Contracts

A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performance of credible transactions without third parties.

Smart contracts help you exchange money, property, shares, or anything of value in a transparent, conflict-free way while avoiding the services of a middleman.

### What is Scilla?

Smart Contract Intermediate-Level Language- in short Scilla, is an intermediate-level smart contract language being developed for Zilliqa. It has been designed as a principled language keeping smart contract safety in perspective.

Scilla eliminates certain unknown vulnerabilities directly at the language-level, hence making applications less prone to attacks. Its principles structure further enforces security and reduces vulnerabilities. Scilla is inherently amenable to formal verification.

The language is being developed hand-in-hand with the formalization of its semantics and its embedding into the Coq proof assistant — a state-of-the-art tool for mechanized proofs about properties of programs.
