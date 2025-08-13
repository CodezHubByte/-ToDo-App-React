import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      username: value,
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      email: value,
    }));

    if (value.length <= 5 || !value.includes("@")) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      password: value,
    }));

    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      confirmPassword: value,
    }));

    if (value !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      alert("Please enter your username");
      return;
    }

    if (!formData.email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!formData.password) {
      setPasswordError("Please enter your password");
      return;
    }

    if (!formData.confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    localStorage.setItem("RegisterData", JSON.stringify(formData));
    localStorage.setItem("LoginData", JSON.stringify(formData));

    navigate("/");
  };

  return (
    <>
      <div className="register-container">
        <div className="register-wrapper">
          <h1 className="register-heading">Create Your Account</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="register-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleUsernameChange}
                placeholder="Enter Username..."
                className="register-input"
              />
            </div>

            <div className="register-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleEmailChange}
                placeholder="Enter Email..."
                className="register-input"
              />
              <p className="register-error">{emailError}</p>
            </div>

            <div className="register-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handlePasswordChange}
                placeholder="Enter Password..."
                className="register-input"
              />
              <p className="register-error">{passwordError}</p>
            </div>

            <div className="register-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password..."
                className="register-input"
              />
              <p className="register-error">{confirmPasswordError}</p>
            </div>

            <button type="submit" className="register-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
