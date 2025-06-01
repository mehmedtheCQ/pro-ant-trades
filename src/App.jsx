import "./App.css";
import "./DashBoard.css";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HomeBody from "./HomeBody.jsx";
import DashBoard from "./DashBoard.jsx";
import { isSignedin } from "./components/UserData.jsx";
import { useState, useEffect } from "react";

function App() {
  const [authState, SetauthState] = useState(() =>
    localStorage.getItem("loginState")
      ? JSON.parse(localStorage.getItem("loginState"))
      : false,
  );

  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify(authState));
  }, [authState]);

  const inDashboard = !authState ? (
    <div
      style={{
        background: "rgba(5, 1, 3, 0.3)",
        boxSizing: "border-box",
        padding: "0px",
        margin: "0px",
      }}
    >
      <div>
        <Header />
        <div className="welcome">
          <Home />
        </div>
      </div>
      <HomeBody />

      <Footer />
    </div>
  ) : (
    <>
      <div className="dash-body" style={{ paddingTop: "0%" }}>
        <div className="dashboard-body">
          <DashBoard />
        </div>
      </div>
    </>
  );
  return (
    <>
      <isSignedin.Provider value={{ authState, SetauthState }}>
        {inDashboard}
      </isSignedin.Provider>
    </>
  );
}

export default App;
