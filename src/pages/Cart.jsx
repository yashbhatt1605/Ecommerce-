import React from "react";
import "./Pages.css";
import "./Cart.css"

export default function Cart() {
    return (
        <div className="page">

            <section className="page-hero">
                <h1>Your Cart</h1>
                <p>Review your selected products</p>
            </section>

            <section className="cart-section">
                <div className="cart-item">
                    <h4>Stylish Jacket</h4>
                    <p>₹1999</p>
                </div>

                <div className="cart-item">
                    <h4>Casual T-Shirt</h4>
                    <p>₹999</p>
                </div>

                <h3>Total: ₹2998</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
            </section>

        </div>
    );
}