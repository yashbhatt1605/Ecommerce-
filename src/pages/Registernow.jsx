import React, { useState } from "react";
import "./Register.css";

export default function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registration Successful!");
    };

    return (
        <div className="register-container">

            <div className="register-card">

                <h2>Create Account</h2>
                <p className="register-subtitle">
                    Join FashionStore and start shopping today
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        onChange={handleChange}
                        required
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Register Now
                    </button>

                </form>

                <p className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </p>

            </div>

        </div>
    );
}