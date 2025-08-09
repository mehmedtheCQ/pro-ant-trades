import { useState } from "react";

export default function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [signupData, setSignupData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    if (loading) return;

    if (
      !signupData.firstName ||
      !signupData.lastName ||
      !signupData.username ||
      !signupData.email ||
      !signupData.password ||
      !signupData.confirmPassword
    ) {
      setError("Please fill out all required fields");
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (signupData.password.length < 9) {
      setError("Passwords must have at least 9 chracters");
      return;
    }
    console.log("Form Validated, waiting for firebase Authentication");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        <h1>SignUp</h1>
        <input
          name="firstName"
          type="text"
          placeholder="Firstname"
          value={signupData.firstName}
          onChange={handleInput}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Lastname"
          value={signupData.lastName}
          onChange={handleInput}
        />
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={signupData.username}
          onChange={handleInput}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={signupData.email}
          onChange={handleInput}
        />
        <select
          name="nationality"
          value={signupData.nationality}
          onChange={handleInput}
        >
          <option value="">Select nationality</option>
          <option value="United States of America">
            United States of America
          </option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <select name="gender" value={signupData.gender} onChange={handleInput}>
          <option value="">Selcet Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleInput}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={signupData.confirmPassword}
          onChange={handleInput}
        />

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}
