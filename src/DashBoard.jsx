import React from "react";
import "./DashBoard.css";
import SideBar from "./SideBar.jsx";
import DashBoardCard from "./DashBoardCard.jsx";
import TradingViewAssetlist from "./TradingViewAssetlist.jsx";
import { useUserDeets } from "./components/UserData.jsx";

export default function DashBoard() {
  const user = useUserDeets();
  const proudIndex = 1;
  const signed = (
    <>
      <div
        style={{
          fontSize: "2.1em",
          height: "100%",
          justifyContent: "center",
          margin: "20px",
          marginLeft: "90px",
          marginTop: "0px",
          paddingTop: "70px",
          paddingBottom: "10px",
          fontFamily: "Quicksand",
          fontWeight: "700",
          borderBottom: "1px solid rgba(256, 256, 256, 0)",
          position: "sticky",
          top: "0px",
          backdropFilter: "inherit",
        }}
      >
        {user.name}
      </div>
      <div className="dashboard-container">
        <SideBar index={proudIndex} />
        <DashBoardCard />
        <TradingViewAssetlist />
      </div>
    </>
  );

  return <>{signed}</>;
}
