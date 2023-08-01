import abi from "./abi.js";
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const exchangeAddressFromId = new Map([
  ["11155111", "0x00e91A750B5DD0237cF0A0623BB628C1B1724101"],
  ["80001", "0x8F07078E70fe55316cDC106ef06A03Bc1fA8797F"],
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
