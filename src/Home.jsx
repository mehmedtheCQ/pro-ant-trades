import React from "react";
import TradingViewTickerTape from "./TradingViewPrice.jsx";
import { useContext, useState } from "react";
import { isSignedin } from "./components/UserData";

export default function Home() {
  const { SetauthState } = useContext(isSignedin);
  const setterFunction = () => SetauthState(true);
  const welcomeMessage =
    "Trade smarter.\nEmbrace a new era of trading excellence.";
  const subText =
    "Explore new horizons and diversify your portfolio for better profitability.\nDiscover emerging markets, innovative assets, and strategic investments to optimize returns.";
  const SigninText = "Get Started";

  return (
    <div className="home">
      <div className="homecontainer">
        <h1>{welcomeMessage}</h1>
        <div className="arial">{subText}</div>
        <a href="./App.jsx">
          <div className="header-button" onClick={setterFunction}>
            {SigninText}
            <span className="icon-margin">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </a>
      </div>
      <TradingViewTickerTape />
    </div>
  );
}
