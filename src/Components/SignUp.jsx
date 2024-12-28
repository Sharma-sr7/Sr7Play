import React, { useState } from "react";
import "./Sign.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });

  const validateFields = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      setMessage("Account created successfully!");
      setErrors({});
    } else {
      setMessage("");
    }
  };

  return (
    <div className="sign-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="sign-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errors.email?errors.email:""}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errors.password?errors.password:""}</p>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errors.confirmPassword?errors.confirmPassword:""}</p>
        </div>
        <button type="submit" className="sign-button">Sign Up</button>
      </form>
      <p className="sign-message">{message?message:""}</p>
      <p className="switch-text">Already have an account? <Link to={'/login'}><span className="switch-link">Login</span></Link></p>
    </div>
  );
};

export default SignUp;
