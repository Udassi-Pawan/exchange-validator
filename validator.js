import { ethers } from "ethers";
import abi from "./abi.js";
import { getSignedContract } from "./helper.js";
import dotenv from "dotenv";
dotenv.config();

const sepoliaContract = getSignedContract("11155111", process.env.pk);
const mumbaiContract = getSignedContract("80001", process.env.pk);

sepoliaContract.on("nftBurned", async (sender, uri, nonce) => {
  console.log("attesting ", sender, uri, Number(nonce));
  const tx = await mumbaiContract.attestTransaction(
    Number(nonce),
    uri,
    sender,
    0
  );
  console.log(await tx.wait());
});

sepoliaContract.on("ethReceived", async (amount, sender, nonce) => {
  console.log("attesting ", Number(amount), sender, Number(nonce));
  const tx = await mumbaiContract.attestTransaction(
    Number(nonce),
    "",
    sender,
    Number(amount)
  );
  console.log(await tx.wait());
});

mumbaiContract.on("nftBurned", async (sender, uri, nonce) => {
  console.log("attesting ", sender, uri, Number(nonce));
  const tx = await sepoliaContract.attestTransaction(
    Number(nonce),
    uri,
    sender,
    0
  );
  console.log(await tx.wait());
});

mumbaiContract.on("ethReceived", async (amount, sender, nonce) => {
  console.log("attesting ", Number(amount), sender, Number(nonce));
  const tx = await sepoliaContract.attestTransaction(
    Number(nonce),
    "",
    sender,
    Number(amount)
  );
  console.log(await tx.wait());
});
