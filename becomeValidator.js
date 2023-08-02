import { ethers } from "ethers";
import abi from "./abi.js";
import { getSignedContract } from "./helper.js";
import dotenv from "dotenv";
dotenv.config();
const sepoliaContract = getSignedContract("11155111", process.env.pk);
const mumbaiContract = getSignedContract("80001", process.env.pk);
console.log(
  "is mumbai validator",
  await mumbaiContract.isAttestor(process.env.myAddress)
);
if ((await mumbaiContract.isAttestor(process.env.myAddress)) == false) {
  console.log("becoming mumbai validator");
  const tx = await mumbaiContract.becomeAttestor({ value: "1001" });
  console.log("now validator", await tx.wait());
}
console.log(
  "is sepolia validator",
  await sepoliaContract.isAttestor(process.env.myAddress)
);

if ((await sepoliaContract.isAttestor(process.env.myAddress)) == false) {
  console.log("becoming sepolia validator");
  const tx = await sepoliaContract.becomeAttestor({ value: "1001" });
  console.log("now validator", await tx.wait());
}
