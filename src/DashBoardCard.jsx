import React from "react";
import { useUserDeets } from "./components/UserData.jsx";
import transactionHistory from "./components/TransactionHistory.jsx";
import TradingViewWidget from "./TradingViewWidget.jsx";
import Notifications from "./components/Notifications.jsx";
import Recharts from "./Recharts.jsx";

export default function DashBoardCard() {
  const user = useUserDeets();
  return (
    <span style={{ flex: "1" }}>
      <Notifications />
      <div className="dashboard-card-wrapper">
        <span className="dashboard-card" style={{ flex: "1", maxWidth: "40%" }}>
          <div>
            <div
              style={{
                fontFamily: "Quicksand",
                padding: "0px 10px",
                letterSpacing: "0.05em",
              }}
            >
              EQUITY<b>:</b> ${user.equity}
            </div>
            <div className="dashboard-cardvalue">
              <div style={{ fontWeight: "700" }}>${user.balance}</div>
              <div
                style={{
                  fontSize: "0.5em",
                  alignSelf: "center",
                  margin: "10px",
                  color: "rgba(90, 150, 90)",
                }}
              >
                +${user.pnl}
              </div>
            </div>
          </div>
          <span className="button-wrap">
            <span
              className="deposit-button"
              style={{ width: "100%", background: "#53315c", color: "white" }}
            >
              <span className="icon-margin">
                <i class="fa-solid fa-money-bill-transfer"></i>
              </span>
              Deposit
            </span>
          </span>
        </span>
        <span className="dashboard-card">
          <div>Recent Transactions</div>
          <div>{transactionHistory()}</div>
          <span className="button-wrap">
            <span className="deposit-button" style={{ width: "100%" }}>
              View full Transaction History
            </span>
          </span>
        </span>
      </div>
      <div className="dashboard-card-wrapper">
        <Recharts />
      </div>
      <div
        style={{
          alignSelf: "center",
          width: "98%",
          height: "500px",
          boxSizing: "border-box",
          margin: "10px",
        }}
      >
        <TradingViewWidget />
      </div>
    </span>
  );
}
