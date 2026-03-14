import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";

export default function Cart() {

    const { cartItems, removeFromCart } = useContext(CartContext);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-section">

            <h2>Your Cart</h2>

            {cartItems.length === 0 && <p>Your cart is empty</p>}

            {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <button onClick={() => removeFromCart(index)}>
                        Remove
                    </button>
                </div>
            ))}

            <h3>Total: ₹{total}</h3>

        </div>
    );
}