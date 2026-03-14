import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Cartcontext";
import "./Header.css";

export default function Header() {

  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">

      <div className="logo">
        <h2>FashionStore</h2>
      </div>

      <nav className="nav-links">
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

          <li>
            <Link to="/cart">
              Cart 🛒 ({cartItems.length})
            </Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/registernow" className="register-btn">
              Register
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}