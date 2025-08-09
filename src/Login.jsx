import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import SignUp from "./SignUp";

export default function Login() {
  const [emailcred, setEmailcred] = useState("");
  const [password, setPassword] = useState("");

  const loginProcess = async () => {
    try {
      await signInWithEmailAndPassword(auth, emailcred, password);
      console.log("Youre signed in");
    } catch (err) {
      console.error("Login failed", err.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Input Email"
        value={emailcred}
        onChange={(e) => setEmailcred(e.target.value)}
      />
      <input
        type="password"
        placeholder="pass"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginProcess}>Login</button>
      <Link to="/SignUp">New User? SignUp instead</Link>
    </div>
  );
}
