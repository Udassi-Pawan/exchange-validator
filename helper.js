import abi from "./abi.js";
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const exchangeAddressFromId = new Map([
  ["11155111", "0xe17EAa6456E5AcF44A5f7d3Ce83F997133867171"],
  ["80001", "0xD377d64960121f962F446f005cf254FC025C110e"],
]);
const wssFromId = new Map([
  ["11155111", process.env.sepoliaWebSocketUrl],
  ["80001", process.env.mumbaiWebSocketUrl],
]);

function getSignedContract(id, pk) {
  const provider = new ethers.providers.WebSocketProvider(wssFromId.get(id));
  const signer = new ethers.Wallet(pk, provider);
  const contract = new ethers.Contract(
    exchangeAddressFromId.get(id),
    abi,
    signer
  );
  return contract;
}

export { getSignedContract };
