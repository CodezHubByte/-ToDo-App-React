import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginMessage, setLoginMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length <= 5 || !value.includes("@")) {
      setEmailError("Email must be valid");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoginMessage("");
    setLoginSuccess(false);

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (email.length <= 5 || !email.includes("@")) {
      setEmailError("Enter a valid email");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("RegisterData"));

    if (!storedData) {
      setLoginMessage("No registered user found. Please sign up first.");
      return;
    }

    if (email === storedData.email && password === storedData.password) {
      localStorage.setItem("LoginData", JSON.stringify({ email, password }));
      setLoginMessage("Login successful!");
      setLoginSuccess(true);
      navigate("/"); 
    } else {
      setLoginMessage("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            id="email"
            type="text"
            name="email"
            className="input"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            id="password"
            type="password"
            name="password"
            className="input"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>
        <br />
        <button type="submit" className="btn1">
          Login
        </button>
        <br />
        <br />
        {loginMessage && (
          <p style={{ color: loginSuccess ? "green" : "red" }}>
            {loginMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
