# Author
Rohit Mishra

# Private Ethereum Blockchain with Hardhat

This project demonstrates how to create a **private Ethereum blockchain** using **Hardhat**, deploy a smart contract to it, and interact via **Remix** and **MetaMask**.

---

## 🛠 Tools Used

- [Hardhat](https://hardhat.org) – local Ethereum network
- [Solidity](https://soliditylang.org) – smart contract language
- [Remix](https://remix.ethereum.org) – web IDE for testing
- [MetaMask](https://metamask.io) – Ethereum wallet
- [Node.js + npm](https://nodejs.org)

---

## 🔧 Steps Performed

1. Installed Hardhat and initialized the project:
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   npx hardhat
   ```

2.  compiled simple smart contract `HelloWorld.sol`

3. Ran the local Hardhat blockchain:
   ```bash
   npx hardhat node
   ```

4. Deployed the contract locally:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. Connected Remix to `http://127.0.0.1:8545` via Web3 Provider and interacted with the contract.

---

## 🧪 How to Test

- Clone this repo
- Install dependencies:  
  `npm install`
- Compile contracts:  
  `npx hardhat compile`
- Start local blockchain:  
  `npx hardhat node`
- Deploy:  
  `npx hardhat run scripts/deploy.js --network localhost`
---
