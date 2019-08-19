---
sort: 5
priority: 60
excerpt: Troubleshooting common ledger hardware issues, Unable to Connect Ledger Hardware Wallet on Zillet, U2F Not Supported Error

---

# Troubleshooting Ledger Hardware issues

## Unable to Connect Ledger Hardware Wallet on Zillet

Sample error message: *"Your Ledger is currently in use with another application. Please wait, or close other wallet applications before trying again."*

Your Ledger Hardware Wallet can be finnicky at times. Here are some troubleshooting tips that should help solve most of the common issues when connecting to a Ledger.

* If you are using the Zillet.io website with your Ledger, turn browser support turned ON. This option is on your Ledger device itself. Navigate to Ethereum -> Settings -> Browser Support.
* Update your Ledger Firmware. [Ledger Firmware Update](https://support.ledger.com/hc/en-us/articles/360002731113-Update-device-firmware)
* Restart your computer.
* Try unplugging and replugging your hardware wallet
* Try a different USB cable.
* Try a different USB port.
* Try a different computer.
* Try using Google Chrome, Opera, or Brave.
* Make sure you don't have any other apps open that connect to your Ledger (e.g., Ledger Live, Mist, etc.).
* Make sure that you are confirming any transactions via your Ledger.
* If you are using Linux and Ledger Nano, you may need to add udev rules as explained [here](https://support.ledger.com/hc/en-us/articles/115005165269-Fix-connection-issues) (under Linux section, scroll down).

## U2F Not Supported Error

If you see the "U2F not supported" error, this means that your browser does not (properly) support the U2F protocol. This protocol is used by Zillet to connect with your hardware wallet.

To solve this issue, you can try using a different browser, such as Google Chrome.
