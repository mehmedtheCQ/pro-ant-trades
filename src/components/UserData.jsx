import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../Auth";

export const useUserDeets = () => {
  const [userDeet, setUserDeet] = useState(null);
  const { currentUser } = useAuth();
  useEffect(() => {
    const fetchUserDeets = async () => {
      console.log("useEffect triggered. currentUser:", currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserDeet(userDocSnap.data());
          } else {
            console.log("No Document found for this user");
            setUserDeet(null);
          }
        } catch (error) {
          console.error("Error fetching Userdeets", error);
          setUserDeet(null);
        }
      }
    };
    fetchUserDeets();
  }, [currentUser]);

  return userDeet
    ? {
        name: userDeet.username,
        isAdmin: userDeet.isAdmin || false,
        balance: userDeet.balance,
        autoTrade: userDeet.autoTrade,
        KYC: userDeet.KYC,
        uID: userDeet.uID,
        pnl: userDeet.PnL,
        equity: (userDeet.balance || 0) + (userDeet.PnL || 0),
      }
    : {
        name: "???",
        isAdmin: false,
        balance: 0,
        autoTrade: false,
        KYC: false,
        uID: 0,
        pnl: 0,
        equity: 0,
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
