"use client";

import React, { useState } from 'react';
import InputField from '../components/inputField';

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
    // Add your signup logic here
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <InputField
            label="First Name:"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            />
        <InputField
            label="Last Name:"
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            />
        <InputField
            label="Email:"
            type="email"
            name="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
            required
            />
        <InputField
            label="Phone Number:"
            type="tel"
            name="Phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            />
        <InputField
            label="Password:"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            />
        <InputField
            label="Confirm Password:"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            />

        <button type="submit">Sign Up</button>
      </form>
      <hr />
    </div>
  );
};

export default SignupPage;
