import React, { useContext, useState } from "react";
import { CartContext } from "../Cartcontext";
import "./Shop.css";

export default function Shop() {

    const { addToCart } = useContext(CartContext);
    const [category, setCategory] = useState("all");

    const products = [

        // MEN
        {
            id: 1,
            name: "Men Hoodie",
            price: 1799,
            category: "men",
            image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400"
        },
        {
            id: 2,
            name: "Men Casual T-Shirt",
            price: 999,
            category: "men",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
        },
        {
            id: 3,
            name: "Men Denim Jeans",
            price: 1499,
            category: "men",
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
        },
        {
            id: 4,
            name: "Men Formal Shirt",
            price: 1399,
            category: "men",
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400"
        },
        {
            id: 5,
            name: "Men Cargo Pants",
            price: 1699,
            category: "men",
            image: "https://images.unsplash.com/photo-1593032465171-8c4c0f45c8e7?w=400"
        },
        {
            id: 6,
            name: "Men Winter Jacket",
            price: 2599,
            category: "men",
            image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400"
        },

        // WOMEN
        {
            id: 7,
            name: "Women Summer Dress",
            price: 2499,
            category: "women",
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400"
        },
        {
            id: 8,
            name: "Women Crop Top",
            price: 899,
            category: "women",
            image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400"
        },
        {
            id: 9,
            name: "Women Denim Jacket",
            price: 2599,
            category: "women",
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400"
        },
        {
            id: 10,
            name: "Women Skirt",
            price: 1499,
            category: "women",
            image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400"
        },
        {
            id: 11,
            name: "Women Party Dress",
            price: 2799,
            category: "women",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"
        },
        {
            id: 12,
            name: "Women Fashion Sneakers",
            price: 2199,
            category: "women",
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400"
        },

        // KIDS
        {
            id: 13,
            name: "Kids Winter Jacket",
            price: 1399,
            category: "kids",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400"
        },
        {
            id: 14,
            name: "Kids Casual T-Shirt",
            price: 799,
            category: "kids",
            image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400"
        },
        {
            id: 15,
            name: "Kids Hoodie",
            price: 999,
            category: "kids",
            image: "https://images.unsplash.com/photo-1520975867597-0f1e5d6e0b3b?w=400"
        },
        {
            id: 16,
            name: "Kids Sneakers",
            price: 1199,
            category: "kids",
            image: "https://images.unsplash.com/photo-1528701800489-20be3cddf3fa?w=400"
        },
        {
            id: 17,
            name: "Kids Party Dress",
            price: 1299,
            category: "kids",
            image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400"
        },
        {
            id: 18,
            name: "Kids Denim Jeans",
            price: 1099,
            category: "kids",
            image: "https://images.unsplash.com/photo-1588099768524-1f5b5a1b4c21?w=400"
        }

    ];

    const filteredProducts =
        category === "all"
            ? products
            : products.filter(p => p.category === category);

    return (
        <div className="shop-page">

            <h1 className="shop-title">Shop Our Collection</h1>

            {/* Category Filters */}

            <div className="shop-filters">

                <button onClick={() => setCategory("all")}>All</button>
                <button onClick={() => setCategory("men")}>Men</button>
                <button onClick={() => setCategory("women")}>Women</button>
                <button onClick={() => setCategory("kids")}>Kids</button>

            </div>

            {/* Product Grid */}

            <div className="shop-grid">

                {filteredProducts.map((product) => (

                    <div className="shop-card" key={product.id}>

                        <img src={product.image} alt={product.name} />

                        <h4>{product.name}</h4>

                        <p>₹{product.price}</p>

                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}