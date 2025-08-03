import { createContext, useContext } from "react";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const userDeets = () => {
  let balance = 2500;
  let pnl = 3000;
  let uID = 0o1;
  let autoTrade = true;
  let KYC = false;
  let isAdmin = true;
  let name = "Mehmed";
  return {
    name,
    isAdmin,
    balance,
    autoTrade,
    KYC,
    uID,
    pnl,
    equity: balance + pnl,
  };
};

export let tradeHistory = [
  { finalPnl: 200, date: 25 },
  { finalPnl: 400, date: 35 },
  { finalPnl: 800, date: 45 },
  { finalPnl: 1200, date: 65 },
  { finalPnl: 2350, date: 125 },
];

export let transactions = [
  {
    amount: 500,
    date: "29th Oct",
    type: false,
    status: ["Pending", "Succesful", "Rejected"],
    method: ["Crypto", "Banking"],
  },
  {
    amount: 150,
    date: "14th Oct",
    type: true,
    status: ["Pending", "Succesful", "Rejected"],
    method: ["Crypto", "Banking"],
  },
  {
    amount: 10,
    date: "13th Oct",
    type: true,
    status: ["Pending", "Succesful", "Rejected"],
    method: ["Crypto", "Banking"],
  },
  {
    amount: 150,
    date: "14th Oct",
    type: false,
    status: ["Pending", "Succesful", "Rejected"],
    method: ["Crypto", "Banking"],
  },
  {
    amount: 800,
    date: "14th Oct",
    type: true,
    status: ["Pending", "Succesful", "Rejected"],
    method: ["Crypto", "Banking"],
  },
];
