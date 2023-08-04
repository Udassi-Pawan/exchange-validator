import abi from "./abi.js";
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const exchangeAddressFromId = new Map([
  ["11155111", "0x700771a05dA385a564Fa7Bbd4dC68A2416e3fe7F"],
  ["80001", "0xe501d76c9CE7A84b67F75E29B39A354ef8754EDb"],
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
