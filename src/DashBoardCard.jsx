import { userDeets } from "./components/UserData.jsx";
import React from "react";
import transactionHistory from "./components/TransactionHistory.jsx";
import TradingViewWidget from "./TradingViewWidget.jsx";
import Notifications from "./components/Notifications.jsx";
import Recharts from "./Recharts.jsx";

export default function DashBoardCard() {
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
              EQUITY<b>:</b> ${userDeets().equity}
            </div>
            <div className="dashboard-cardvalue">
              <div style={{ fontWeight: "700" }}>${userDeets().balance}</div>
              <div
                style={{
                  fontSize: "0.5em",
                  alignSelf: "center",
                  margin: "10px",
                  color: "rgba(90, 150, 90)",
                }}
              >
                +${userDeets().pnl}
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
