import React, { useState, useEffect } from "react";
import siteLogo from "./assets/logo.png";
import menuButton from "./assets/menu.svg";

export default function Header() {
  const [scrolled, setscrolled] = useState(false);
  const handleScroll = () => {
    window.scrollY > 0 ? setscrolled(true) : setscrolled(false);
  };
  const activeHeader = scrolled;
  const logoProant = () => (
    <span className="site-title">
      <span className="logo-container">
        <img
          className={activeHeader ? "logo-proant-scrolled" : "logo-proant"}
          src={siteLogo}
          alt="P R O A N T  C A P I T A L"
        />
      </span>
      <span className={activeHeader ? "proanttitle-scrolled" : "proanttitle"}>
        <h1>PROANT CAPITAL</h1>
      </span>
    </span>
  );
  const proAnttitle = logoProant();
  const menuIcon = () => (
    <img className="menu-icon" src={menuButton} alt="menu" />
  );
  const HomeText = "Home";
  const tradingText = "Trading";
  const contactText = "Contact";
  const marketsText = "Markets";
  const headerMenu = (
    <span className="menu-items-wrap">
      <span className="menu-items">{HomeText}</span>
      <span className="menu-items">{tradingText}</span>
      <span className="menu-items">{marketsText}</span>
      <span className="menu-items">{contactText}</span>
      <span>{menuIcon()}</span>
    </span>
  );
  const headerComp = headerMenu;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={activeHeader ? "header-scrolled" : "header"}>
        {proAnttitle}
        {headerComp}
      </div>
    </>
  );
}
