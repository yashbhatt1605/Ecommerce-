import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-section">
                    <h3>FashionStore</h3>
                    <p>
                        Your one stop destination for the latest fashion trends.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>

                {/* Categories */}
                <div className="footer-section">
                    <h4>Categories</h4>

                    <ul>

                        <li>
                            <Link to="/shop?category=men">Men</Link>
                        </li>

                        <li>
                            <Link to="/shop?category=women">Women</Link>
                        </li>

                        <li>
                            <Link to="/shop?category=kids">Kids</Link>
                        </li>

                        <li>
                            <Link to="/shop?category=accessories">Accessories</Link>
                        </li>

                    </ul>

                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: support@fashionstore.com</p>
                    <p>Phone: +91 9876543210</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 FashionStore. All Rights Reserved.
            </div>

        </footer>
    );
}