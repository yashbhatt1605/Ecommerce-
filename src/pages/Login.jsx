import React from "react";
import "./Pages.css"
import "./Login.css"

export default function Login() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>

                <form>
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>

                <p>
                    Don't have an account? <a href="/register">Register Now</a>
                </p>
            </div>
        </div>
    );
}