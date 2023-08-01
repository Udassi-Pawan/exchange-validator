import { ethers } from "ethers";
import abi from "./abi.js";
import { getSignedContract } from "./helper.js";
import dotenv from "dotenv";
dotenv.config();
const sepoliaContract = getSignedContract("11155111", process.env.pk);
const mumbaiContract = getSignedContract("80001", process.env.pk);
console.log(
  "is mumbai attestor",
  await mumbaiContract.isAttestor(process.env.myAddress)
);
if ((await mumbaiContract.isAttestor(process.env.myAddress)) == false) {
  console.log("becoming mumbai attestor");
  const tx = await mumbaiContract.becomeAttestor({ value: "1001" });
  console.log("now attestor", tx.wait());
}
console.log(
  "is sepolia attestor",
  await sepoliaContract.isAttestor(process.env.myAddress)
);

if ((await sepoliaContract.isAttestor(process.env.myAddress)) == false) {
  console.log("becoming sepolia attestor");
  const tx = await sepoliaContract.becomeAttestor({ value: "1001" });
  console.log("now attestor", await tx.wait());
}
