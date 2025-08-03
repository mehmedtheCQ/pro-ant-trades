import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./DashBoard.css";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HomeBody from "./HomeBody.jsx";
import DashBoard from "./DashBoard.jsx";
import { useState, useEffect } from "react";
import Login from "./Login.jsx";
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./components/UserData.jsx";

function App() {
  const [userName, setuserName] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setuserName(user);
      setLoading(false);
      console.log(user, "Logged in");
    });

    return unsubscribe;
  }, []);

  const inDashboard = (
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
          <Login />
        </div>
      </div>
      <HomeBody />

      <Footer />
    </div>
  );
  const dashBoard = (
    <div className="dash-body" style={{ paddingTop: "0%" }}>
      <div className="dashboard-body">
        <DashBoard />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div>
        <Login />
        Loading...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={userName}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={inDashboard} />
          <Route
            path="Login"
            element={!userName ? <Login /> : <Navigate to="/DashBoard" />}
          />
          <Route
            path="/DashBoard"
            element={userName ? dashBoard : <Navigate to="/Login" />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
