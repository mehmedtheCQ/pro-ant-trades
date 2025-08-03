import { useContext, useState } from "react";
import lougoutIcon from "./assets/icons/logout.svg";
import SidebarArray from "./components/SidebarArray.jsx";
// import { motion, AnimatePresence } from "framer-motion";

export default function SideBar(prop) {
  const [menuState, setMenuState] = useState(false);
  const sideMenu = SidebarArray.map((item, index) =>
    !menuState ? (
      <span className="shrinked-class">
        <span key={index} className="image-container">
          <img className="side-bar-image" src={item.icon} alt={item.title} />
        </span>
      </span>
    ) : (
      <span key={index} className="expanded-class">
        <span className="image-container">
          <img className="side-bar-image" src={item.icon} alt={item.title} />
        </span>
        <span className="side-bar-text">{item.title}</span>
      </span>
    ),
  );
  console.log(menuState);
  const clickedMenu = () => setMenuState(true);
  const unclickedMenu = () => setMenuState(false);
  return (
    <>
      <span
        onClick={clickedMenu}
        onMouseEnter={clickedMenu}
        onMouseLeave={unclickedMenu}
        className={!menuState ? "sidebar-container" : "sidebar-container-wide"}
      >
        {sideMenu}
        <a href="./Home.jsx">
          <div className="shrinked-class">
            <img src={lougoutIcon} className="side-bar-image" alt="Logout" />
          </div>
        </a>
      </span>
    </>
  );
}
