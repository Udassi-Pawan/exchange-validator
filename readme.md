# Setup

Install Dependencies and create .env file

```sh
cd exchange-validator
npm i
touch .env
```

#### Set up following environment variables:

| Name                | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| pk                  | Private Key of your Ethereum Account with enough balance to perform validation transactions |
| myaddress           | Account address of your Ethereum Account                                                    |
| sepoliaWebSocketUrl | Web Socket url to connect to Sepolia Testnet                                                |
| mumbaiWebSocketUrl  | Web Socket url to connect to Mumbai Testnet                                                 |

#### Become Validator

Run the becomeValidator.js once to stake 1000 wei and become a validator

```sh
node becomeValidator.js
```

Exit using Control+C and now run the validate.js script to up the validator node

```sh
node validate.js
```

## You are now running a validator node.

## Go to [exchange](https://exchange-jy9p.onrender.com/decentralised/validators) to withdraw your staked ethereum.
