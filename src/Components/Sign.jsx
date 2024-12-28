import React, { useState } from "react";
import "./Sign.css";
import { Link } from "react-router-dom";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateFields = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      if (email === "test@example.com" && password === "password123") {
        setMessage("Login successful!");
        setErrors({});
      } else {
        setMessage("Invalid email or password.");
      }
    } else {
      setMessage("");
    }
  };

  return (
    <div className="sign-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="sign-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
        <button type="submit" className="sign-button">
          Login
        </button>
      </form>
      <p className="sign-message">{message?message:""}</p>
      <p className="switch-text">Don’t have an account? <Link to={'/signup'}><span>Sign up</span></Link>
      </p>
    </div>
  );
};

export default Sign;
