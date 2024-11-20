


# Projectstake Academy Intro to Web3 Course Final Project

## Inroduction 📝
This project is the culmination of concepts learned during weeks 1-4 of the Projectstake Academy's Intro to Web3 course. It demonstrates the practical application of Web3 development concepts.

## Overview  ✍️
The project consists of two major tasks:
* Implementing a simple SendETH DApp using ethers.js.
* Interacting with the smart contract of a voting system hosted on the Sepolia testnet by Projectstake.


## Aim 🎯
The primary goal of this project is to create a simple DApp with two functionalities:
* Send Ethereum from one account to another.
* Cast votes using the account connected to MetaMask.

## Features 📝
### 1. Connect Wallet:
* Prompts users to connect their wallet through the MetaMask browser extension.
* Displays the address and balance of the connected wallet.
### 2. Send Ethereum:
* Users can enter the recipient's address and the amount of ETH to send.
* Clicking "SendETH" transfers the specified amount of ETH to the provided address, provided the inputs are valid.
### 3. Voting System:
* Users can connect their wallet, select a proposal, and cast their vote.

## How to Test the App 👨‍💻
### Prerequisites
* Node.js (v20 or later).
* Ganache.
* MetaMask.

### Setup Instructions
#### 1. Install MetaMask Extension
* Available for Chrome, Edge, Firefox, and Brave browsers.
#### 2. Install Node.js
* If Node.js is not already installed, download and install it from Node.js Official Website.
####  3. Install Ganache


*  Use the following command to install Ganache CLI:
   ```bash
   npm install -g ganache

* Start the Ganache server by running:

    ```bash
    npm install

NOTE: Ganache provides 10 test wallet addresses (0-9), each preloaded with 1000 ETH. These addresses and their private keys are displayed in the terminal.

#### 4. Run the Application
Open the app using this link: https://solomon-nwante-web3-course-final-project.vercel.app/
#### 5. Connect Wallet
Click "Connect Wallet." MetaMask will prompt you to connect an account. By default, it connects to the first Ganache account.
#### 6. Set Up MetaMask

* Import a test account from Ganache using its private key (any account other than the one already connected to the app can be imported).
* Configure MetaMask to connect to Ganache by adding a custom network:
    * Network Name: Localhost 8545
    * RPC URL: http://127.0.0.1:8545
    * Chain ID: 1337
    * Currency Symbol: ETH
    * Block Explorer URL: Leave blank.
* After setup, you can view the ETH balance of the imported account in MetaMask.
#### 7. Test SendETH Functionality
* Use the app to send ETH from one account to another. Verify the balance updates in MetaMask.
#### 8. Test Voting System
* Select a proposal in the app and click "Cast Vote" to cast your vote.



## Achievements 🏆
Through this project, I have:
* Learned how to connect to the Ethereum blockchain.
* Interacted with smart contracts using ethers.js.
* Gained experience with testing tools like Ganache, Infura, and the Sepolia testnet.
* Learned how to deploy a project to Vercel.


## Acknowledgement 🙏
This project was made possible with guidance and resources from:
* MetaMask documentation.
* Ethers.js documentation.
* Online resources and tutorials.
* Projectstake Academy’s Intro to Web3 course.

Special thanks to the course instructor, Shegun Ogar, and program manager, Favour Chibuokem, for their support and guidance.

## Credit 👏
I also extend my gratitude to DappUniversity for their invaluable resources.

## onclusion   ✍️
This project marks the completion of the Projectstake Intro to Web3 course. It has been an insightful journey, providing a strong foundation in blockchain concepts, smart contract interaction, and decentralized application development. Moving forward, I plan to deepen my understanding of Web3 technologies and continue exploring smart contract development to advance my skills and contribute meaningfully to the blockchain ecosystem.
