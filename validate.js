import { ethers } from "ethers";
import abi from "./abi.js";
import { getSignedContract } from "./helper.js";
import dotenv from "dotenv";
import { setTimeout } from "timers/promises";

dotenv.config();

const sepoliaContract = getSignedContract("11155111", process.env.pk);
const mumbaiContract = getSignedContract("80001", process.env.pk);

console.log("Validator node up and running.");
console.log("Waiting for Transactions to validate.");

// const waitTime = Math.random() * 2000;
// console.log("start");
// const result = await setTimeout(waitTime * 10, () => {});
// console.log("waited");

// sepoliaContract.on("nftBurned", async (sender, uri, nonce) => {
//   const waitTime = Math.random() * 2000;
//   console.log("Tx received. wait ", waitTime * 10);
//   const result = await setTimeout(waitTime * 10, "resolved");

//   console.log("##############################################");
//   console.log("attesting ", sender, uri, Number(nonce));
//   console.log("##############################################");
//   const tx = await mumbaiContract.attestTransaction(
//     Number(nonce),
//     uri,
//     sender,
//     0
//   );
//   console.log(await tx.wait());
// });

// sepoliaContract.on("ethReceived", async (amount, sender, nonce) => {
//   const waitTime = Math.random() * 2000;
//   const result = await setTimeout(waitTime * 10, "resolved");
//   console.log("##############################################");
//   console.log("attesting ", Number(amount), sender, Number(nonce));
//   console.log("##############################################");
//   const tx = await mumbaiContract.attestTransaction(
//     Number(nonce),
//     "",
//     sender,
//     Number(amount)
//   );
//   console.log(await tx.wait());
// });

// mumbaiContract.on("nftBurned", async (sender, uri, nonce) => {
//   const waitTime = Math.random() * 2000;
//   console.log("Tx received. wait ", waitTime * 10);
//   const result = await setTimeout(waitTime * 10, "resolved");

//   console.log("##############################################");
//   console.log("attesting ", sender, uri, Number(nonce));
//   console.log("##############################################");
//   const tx = await sepoliaContract.attestTransaction(
//     Number(nonce),
//     uri,
//     sender,
//     0
//   );
//   console.log(await tx.wait());
// });

mumbaiContract.on("ethReceived", async (amount, sender, nonce) => {
  const waitTime = Math.random() * 2000;
  console.log("Tx received. wait ", 20000);
  const result = await setTimeout(6000, "resolved");

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
});
