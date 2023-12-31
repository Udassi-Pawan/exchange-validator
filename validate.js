import { ethers } from "ethers";
import abi from "./abi.js";
import { getSignedContract } from "./helper.js";
import dotenv from "dotenv";

dotenv.config();

const sepoliaContract = getSignedContract("11155111", process.env.pk);
const mumbaiContract = getSignedContract("80001", process.env.pk);

console.log("Validator node up and running.");
console.log("Waiting for Transactions to validate.");

sepoliaContract.on("nftBurned", async (sender, uri, nonce) => {
  console.log("##############################################");
  console.log(
    "received from sepolia attesting at mumbai",
    sender,
    uri,
    "nonce :",
    Number(nonce)
  );
  console.log("##############################################");
  const tx = await mumbaiContract.attestTransaction(
    Number(nonce),
    uri,
    sender,
    0
  );
  console.log(await tx.wait());
});

sepoliaContract.on("ethReceived", async (amount, sender, nonce) => {
  console.log("##############################################");
  console.log(
    "received from sepolia attesting at mumbai",
    sender,
    "amount:",
    amount,
    "nonce :",
    Number(nonce)
  );
  console.log("##############################################");
  const tx = await mumbaiContract.attestTransaction(
    Number(nonce),
    "",
    sender,
    Number(amount)
  );
  console.log(await tx.wait());
});

mumbaiContract.on("nftBurned", async (sender, uri, nonce) => {
  console.log("##############################################");
  console.log(
    "received from mumbai attesting at sepolia",
    sender,
    uri,
    "nonce :",
    Number(nonce)
  );
  console.log("##############################################");
  const tx = await sepoliaContract.attestTransaction(
    Number(nonce),
    uri,
    sender,
    0
  );
  console.log(await tx.wait());
});

mumbaiContract.on("ethReceived", async (amount, sender, nonce) => {
  console.log("##############################################");
  console.log(
    "received from mumbai attesting at sepolia",
    sender,
    amount,
    "nonce :",
    Number(nonce)
  );
  console.log("##############################################");
  const tx = await sepoliaContract.attestTransaction(
    Number(nonce),
    "",
    sender,
    Number(amount)
  );
  console.log(await tx.wait());
});
