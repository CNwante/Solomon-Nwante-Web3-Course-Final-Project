import { ethers } from 'ethers';
import { VOTING_CONTRACT_ABI } from './contractABI.js';

let provider;
let signer;

/* DOM elements
================*/
const connectWalletButton = document.getElementById('connect-wallet');
const walletInfo = document.getElementById('wallet-info');
const addressSpan = document.getElementById('address');
const balanceSpan = document.getElementById('balance');
const sendEthButton = document.getElementById('send-eth');
const recipientInput = document.getElementById('recipient');
const amountInput = document.getElementById('amount');
const messageParagraph = document.getElementById('message');


connectWalletButton.addEventListener('click', async () => {
  try {
    if (!window.ethereum) {
      alert('MetaMask is not installed. Please install it to use this app.');
      return;
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });

    provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    // provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();

    const address = await signer.getAddress();
    addressSpan.textContent = address;

    const balance = await provider.getBalance(address);
    balanceSpan.textContent = ethers.utils.formatEther(balance);

    walletInfo.style.display = 'block';
  } catch (error) {
    console.error('Error connecting wallet:', error);
    alert('Failed to connect wallet. Please try again.');
  }
});


sendEthButton.addEventListener('click', async () => {
  const recipient = recipientInput.value;
  const amount = amountInput.value;

  if (!recipient || !amount) {
    alert('Please enter both recipient address and amount.');
    return;
  }

  try {
    /* Convert amount to wei and send transaction
    ==============================================*/
    const tx = await signer.sendTransaction({
      to: recipient,
      value: ethers.utils.parseEther(amount),
    });

    await tx.wait();

    messageParagraph.textContent = `Transaction successful! Hash: ${tx.hash}`;
  } catch (error) {
    console.error('Error sending ETH:', error);
    alert('Failed to send ETH. Please try again.');
  }
});

/* Voting contract address
===========================*/
const VOTING_CONTRACT_ADDRESS = '0xB2E1185468e57A801a54162F27725CbD5B0EB4a6';

/* DOM elements
===========================*/
const castVoteButton = document.getElementById('cast-vote');
const proposalSelect = document.getElementById('proposal');
const voteMessageParagraph = document.getElementById('vote-message');

/* Cast a vote
=================*/
castVoteButton.addEventListener('click', async () => {
  if (!signer) {
    alert('Please connect your wallet first.');
    return;
  }

  const proposalId = proposalSelect.value;

  try {
    /* Initialize the contract
    ===========================*/
    const votingContract = new ethers.Contract(
      VOTING_CONTRACT_ADDRESS,
      VOTING_CONTRACT_ABI,
      signer
    );

    const tx = await votingContract.vote(proposalId);
    await tx.wait();

    voteMessageParagraph.textContent = `Vote successful! Transaction Hash: ${tx.hash}`;
    voteMessageParagraph.style.color = 'green';
  } catch (error) {
    console.error('Error casting vote:', error);
    voteMessageParagraph.textContent = 'Failed to cast vote. Please try again.';
    voteMessageParagraph.style.color = 'red';
  }
});
