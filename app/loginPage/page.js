"use client";

import React, { useState } from "react";
import InputField from "../components/inputField";
import "../css/loginPage.css";

const LoginPage = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false); // 🔥 toggle for sliding

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("Please enter both username and password.");
    } else {
      setError("");
      console.log(isSignup ? "Signing up:" : "Logging in:", { userName, password });
    }
  };

  return (
    <div className="login-container">
      <div className="Login-Text">
        <h3>{isSignup ? "Hi Newbie!" : "Welcome Back Player!"}</h3>
        <p>{isSignup ? "Explore and Compete In games " : "Please Login To Continue"}</p>
      </div>

      {/* 🔥 Sliding Switch Tabs */}
      <div className="toggle-container">
        <div className={`toggle-btn ${!isSignup ? "active" : ""}`} onClick={() => setIsSignup(false)}>
          Sign In
        </div>
        <div className={`toggle-btn ${isSignup ? "active" : ""}`} onClick={() => setIsSignup(true)}>
          Sign Up
        </div>
        <div className={`slider ${isSignup ? "right" : ""}`}></div>
      </div>

      {/* 🔥 Form */}
      <form onSubmit={handleSubmit} className="Login-Form">
        <label className="Label-Style">
          <strong>Username:</strong>
        </label>


        <InputField
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          className="Input-Field"
          placeholder="Enter your username"
          required
        />

        {isSignup && (
          <>
            <label className="Label-Style">
              <strong>Email:</strong>
            </label>
            
            <InputField
              type="email"
              name="email"
              className="Input-Field"
              onChange={""}
              placeholder="Enter your email"
              required
            />
            
          <div className="Name-container">
            <label>
              <strong>
                First Name
              </strong>
            </label>
            
            <InputField
            label="First Name:"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={""}
            className="Input-Field-Name"
            required
            />
            <label>
              <strong>Last Name: </strong>
            </label>

          <InputField
            label="Last Name:"
            type="text"
            name="LastName"
            onChange={""}
            placeholder="Last Name"
            className="Input-Field-Name"
            
            />
          </div>
            

          <label>
            <strong>New Password</strong>
          </label>
    

          <InputField
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          className="Input-Field"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          />

          <label>
            <strong>Confirm Password</strong>
          </label>
          <InputField
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          className="Input-Field"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          />
          </>

          

        )}


        

        {isSignup === false && (
          <>
          <label>
            <strong>Password: </strong>
          </label>

            <InputField
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          className="Input-Field"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          />

          <div className="Checkbox-Container">
          <label className="Label-Style">
            <strong>Show Password</strong>
          </label>
          <input
            type="checkbox"
            className="checkBox-styling"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
        </div>

          </>
          
        )}

        <button type="submit" className="Button-style-Login">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <hr className="Divider" />

      <div className="google-auth-container">
        <button
          type="button"
          className="Button-style-Google"
          onClick={() => {
            console.log("Google authentication triggered");
          }}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            style={{ width: "20px", height: "20px", marginRight: "10px", top: "4px" }}
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
