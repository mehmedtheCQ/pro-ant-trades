import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./DashBoard.css";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HomeBody from "./HomeBody.jsx";
import DashBoard from "./DashBoard.jsx";
import Login from "./Login.jsx";
import { useAuth } from "./Auth.jsx";

function App() {
  const { currentUser } = useAuth();

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={inDashboard} />
        <Route
          path="Login"
          element={!currentUser ? <Login /> : <Navigate to="/DashBoard" />}
        />
        <Route
          path="/DashBoard"
          element={currentUser ? dashBoard : <Navigate to="/Login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
