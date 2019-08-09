---
sort: 3
priority: 50
excerpt: This article is meant for those that already have an ZIL wallet. Zillet offers a variety of ways to access one’s Zilliqa wallet, by selecting the ‘Access My Wallet’ option on the front page. Keystore/JSON File + Password, Mnemonic Phrase + Password and Private Key
---

# How to Access Your Wallet

This article is meant for those that already have an ZIL wallet. If you would like to create a wallet from scratch, please refer to [this](/how-to-create-a-wallet).

Zillet offers a variety of ways to access one’s Zilliqa wallet, by selecting the ‘Access Wallet’ option on the front page.

They are, from most to least recommended:

- Hardware Wallet <small>(Cooming Soon)</small>
- [Moonlet](https://moonlet.xyz) or [ZilPay](https://zilpay.xyz/) <small>(Highly Secure)</small>
- Keystore/JSON File + Password
- Mnemonic Phrase + Password
- Private Key


## Moonlet or ZilPay

Thease are the Chrome Extension that allows the creation of an zilliqa-based wallet that keeps one’s 
private key encrypted within the extension itself. It also generates a 12-word mnemonic phrase for
recovery purposes. These allow users to name their separate wallets, see funds within the 
extension, and offers the option to import the private key information of a previously created wallet, if desired. 

### __To connect Zillet with Moonlet or ZilPay:__
#### __This assumes you already have Moonlet or ZilPay wallet.__

**Step 1.** Login to your Moonlet or ZilPay wallet via their Chrome Extension.

**Step 2.** On the Zillet front page, select 'Access My Wallet'.

**Step 3.** Select the 'Moonlet' or 'ZilPay' option to connect.

**Step 4.** Confirm connection in the Moonlet or ZilPay pop-up window.

**Step 5.** You're done!

## __Keystore/JSON + Password__

The Keystore/JSON is a file that holds an encrypted version of one’s private key. This key is 
encrypted with a chosen password by the user. As such, it is impossible to change the password
 for these files. Keystore files should not be opened. They are only to be utilized when accessing
  the Keystore/JSON option on our site and when prompted for one’s ‘JSON file’. You can read more
   about the functionality of a Keystore/JSON file [here](/getting-started/common-terms#keystore-file).


### To connect with Keystore/JSON + Password:


**Step 1.** On the front page, select ‘Access Wallet’.

**Step 2.** Choose the ‘Keystore File’ option to connect, then ‘Selecte Wallet File’ (Keystore/JSON).

**Step 3.** Locate your Keystore/JSON file in the pop-up window. It should begin with ‘UTC–’.

**Step 4.** Enter your password, and click ‘Unlock wallet’.

**Step 5.** You’re done!

## __Mnemonic Phrase (+ Password)__
This is a list of 12 words that are generated and given to users upon certain forms of wallet 
creation (i.e. Zillet, Moonlet, ZilPay, Hardware Wallets, Trust wallets, etc.). Sometimes these
phrases have passwords associated with them, and sometimes they do not. The order and spelling of
the words in a mnemonic phrase is directly tied to one’s private key, and therefore is not 
recommended as a regular way to access a wallet. It is best to only use this phrase for 
recovery purposes.

### To connect with Mnemonic Phrase (+ Password):
#### __This is not a recommended way to connect. We highly suggest using Zillet offline for this option.__

**Step 1.** On the front page, select ‘Access Wallet’.

**Step 2.** Choose the ‘Mnemonic phrase’ option to connect.

**Step 3.** Fill out the form with 12 word phrase.

**Step 4.** Enter your password (leave this blank if you did not set password), and click ‘Unlock wallet’.

**Step 5.** You’re done!

## __Private Key__

The private key is a string of 64 characters tied permanently to a public address. This is 
sometimes given to users when wallets are created and sometimes kept encrypted (in the case 
of Moonlet, Zilpay, and Hardware Wallets). *Using one’s private key should always be a last-ditch effort of access, only to be utilized when all else fails.* This should not be the main method of entry for anyone to 
access their wallets. Private keys are the number one most sensitive information anyone 
can have for a wallet, because private keys allow immediate access and can never be changed. 
Therefore, it is extremely important to keep this safe, secure, and secret.

### To connect with Private Key:

**Step 1.** On the front page, select ‘Access Wallet’.

**Step 2.** Choose the ‘Private Key’ option to connect.

**Step 3.** Copy and paste your private key into the value field.

**Step 4.** Click ‘Unlock Wallet’ and you’re done!
