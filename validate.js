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
  const waitTime = Math.random() * 400;
  console.log("Tx received. wait ", waitTime * 10);
  setTimeout(async () => {
    console.log("##############################################");
    console.log("attesting ", sender, uri, Number(nonce));
    console.log("##############################################");
    const tx = await mumbaiContract.attestTransaction(
      Number(nonce),
      uri,
      sender,
      0
    );
    console.log(await tx.wait());
  }, 10 * waitTime);
});

sepoliaContract.on("ethReceived", async (amount, sender, nonce) => {
  const waitTime = Math.random() * 400;
  console.log("Tx received. wait ", waitTime * 10);

  setTimeout(async () => {
    console.log("##############################################");
    console.log("attesting ", Number(amount), sender, Number(nonce));
    console.log("##############################################");
    const tx = await mumbaiContract.attestTransaction(
      Number(nonce),
      "",
      sender,
      Number(amount)
    );
    console.log(await tx.wait());
  }, 10 * waitTime);
});

mumbaiContract.on("nftBurned", async (sender, uri, nonce) => {
  console.log("Tx received. wait ", waitTime * 10);

  const waitTime = Math.random() * 400;
  setTimeout(async () => {
    console.log("##############################################");
    console.log("attesting ", sender, uri, Number(nonce));
    console.log("##############################################");
    const tx = await sepoliaContract.attestTransaction(
      Number(nonce),
      uri,
      sender,
      0
    );
    console.log(await tx.wait());
  }, 10 * waitTime);
});

mumbaiContract.on("ethReceived", async (amount, sender, nonce) => {
  console.log("Tx received. wait ", waitTime * 10);

  const waitTime = Math.random() * 400;
  setTimeout(async () => {
    console.log("##############################################");
    console.log("attesting ", Number(amount), sender, Number(nonce));
    console.log("##############################################");
    const tx = await sepoliaContract.attestTransaction(
      Number(nonce),
      "",
      sender,
      Number(amount)
    );
    console.log(await tx.wait());
  }, 10 * waitTime);
});
