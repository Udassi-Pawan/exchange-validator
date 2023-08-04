const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_mynft",
        "type": "address",
      },
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256",
      },
    ],
    "name": "ethReceived",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "uri",
        "type": "string",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256",
      },
    ],
    "name": "nftBurned",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "requestor",
        "type": "address",
      },
    ],
    "name": "transactionAttested",
    "type": "event",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "allTransactions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "versionCount",
        "type": "uint256",
      },
      {
        "internalType": "bool",
        "name": "minted",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256",
      },
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string",
      },
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256",
      },
    ],
    "name": "attestTransaction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "becomeAttestor",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_borrower",
        "type": "address",
      },
    ],
    "name": "buyCollateralNft",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256",
      },
    ],
    "name": "completeAttestedTx",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "exchangeNftAddr",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "_period",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "_nftTokenId",
        "type": "uint256",
      },
    ],
    "name": "getLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "name": "isAttestor",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "name": "loan",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "cutOffTimestamp",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "nftTokenId",
        "type": "uint256",
      },
      {
        "internalType": "bool",
        "name": "set",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "nonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "returnLoan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "sendEthOver",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "period",
        "type": "uint256",
      },
    ],
    "name": "stakeEth",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "stakeTokenAddr",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "stakes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokens",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "unlockTimestamp",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "name": "stakesNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256",
      },
    ],
    "name": "transferToDead",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "usersCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "validationTokenAddr",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256",
      },
    ],
    "name": "withdrawStakedEth",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256",
      },
    ],
    "name": "withdrawValidationTok",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
];
export default abi;
