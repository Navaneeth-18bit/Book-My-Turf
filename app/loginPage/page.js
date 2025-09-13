"use client";

import React, { useState } from "react";
import InputField from '../components/inputField';

const LoginPage = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("Please enter both username and password.");
    } else {
      setError("");
      console.log("Logging in:", { userName, password });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username: "
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />

        <InputField
          label="Password: "
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        {error && <div style={{ color: "red" }}>{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;