import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useAuth } from "../Auth";
import { getAuth } from "firebase/auth";

// User Profile
export const useUserDeets = () => {
  const [userDeet, setUserDeet] = useState(null);
  const { currentUser } = useAuth();
  useEffect(() => {
    const fetchUserDeets = async () => {
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
        name: `Welcome, ${userDeet.username}`,
        isAdmin: userDeet.isAdmin || false,
        balance: userDeet.balance,
        autoTrade: userDeet.autoTrade,
        KYC: userDeet.KYC,
        uID: userDeet.uID,
        pnl: userDeet.PnL,
        equity: (userDeet.balance || 0) + (userDeet.PnL || 0),
      }
    : {
        name: "Loading Dashboard...",
        isAdmin: false,
        balance: 0,
        autoTrade: null,
        KYC: null,
        uID: null,
        pnl: null,
        equity: null,
      };
};

export let tradeHistory = [
  { finalPnl: 200, date: 25 },
  { finalPnl: 400, date: 35 },
  { finalPnl: 800, date: 45 },
  { finalPnl: 1200, date: 65 },
  { finalPnl: 2350, date: 125 },
];

// User transactions
export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  useEffect(() => {
    console.log(currentUser);
    const getTransactions = async () => {
      if (!currentUser) return;
      try {
        console.log("Fetching transactions");
        const transactionsRef = collection(
          db,
          "users",
          currentUser.uid,
          "transactions",
        );
        const snapshot = await getDocs(transactionsRef);
        const transactionsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTransactions(transactionsData);
      } catch (err) {
        console.error("Error Fetching Transactions, please refresh", err);
      } finally {
        setLoading(false);
      }
    };
    getTransactions();
  }, [currentUser]);
  return { transactions, loading };
};
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
