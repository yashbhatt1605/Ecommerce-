import React, { useContext, useState } from "react";
import "./Home.css";
import { CartContext } from "../Cartcontext";

export default function Home() {

    const { addToCart } = useContext(CartContext);
    const [category, setCategory] = useState("all");

    const products = [

        // MEN
        {
            id: 1,
            name: "Men Stylish Jacket",
            price: 1999,
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
            name: "Men Winter Hoodie",
            price: 1799,
            category: "men",
            image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=400"
        },
        {
            id: 5,
            name: "Men Formal Shirt",
            price: 1399,
            category: "men",
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400"
        },
        {
            id: 6,
            name: "Men Cargo Pants",
            price: 1699,
            category: "men",
            image: "https://images.unsplash.com/photo-1593032465171-8c4c0f45c8e7?w=400"
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
            name: "Women Fashion Sneakers",
            price: 2199,
            category: "women",
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400"
        },
        {
            id: 9,
            name: "Women Crop Top",
            price: 899,
            category: "women",
            image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400"
        },
        {
            id: 10,
            name: "Women Denim Jacket",
            price: 2599,
            category: "women",
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400"
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
            name: "Women Stylish Skirt",
            price: 1499,
            category: "women",
            image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400"
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

        // ACCESSORIES
        {
            id: 17,
            name: "Stylish Sunglasses",
            price: 699,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
        },
        {
            id: 18,
            name: "Leather Wallet",
            price: 899,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400"
        },
        {
            id: 19,
            name: "Luxury Watch",
            price: 3499,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400"
        },
        {
            id: 20,
            name: "Women Handbag",
            price: 1899,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400"
        },
        {
            id: 21,
            name: "Baseball Cap",
            price: 499,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400"
        },
        {
            id: 22,
            name: "Travel Backpack",
            price: 1599,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=400"
        }
    ];

    const filteredProducts =
        category === "all"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <div className="home">

            {/* Hero */}
            <section className="hero">
                <h1>New Fashion Collection 2026</h1>
                <p>Discover the latest trends in clothing and accessories</p>
                <button>Shop Now</button>
            </section>

            {/* Categories */}
            <section className="categories">
                <h2>Shop By Category</h2>

                <div className="category-grid">
                    <div className="category-card" onClick={() => setCategory("men")}>Men</div>
                    <div className="category-card" onClick={() => setCategory("women")}>Women</div>
                    <div className="category-card" onClick={() => setCategory("kids")}>Kids</div>
                    <div className="category-card" onClick={() => setCategory("accessories")}>Accessories</div>
                    <div className="category-card" onClick={() => setCategory("all")}>All</div>
                </div>
            </section>

            {/* Products */}
            <section className="products">
                <h2>Featured Products</h2>

                <div className="product-grid">

                    {filteredProducts.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h4>{product.name}</h4>
                            <p>₹{product.price}</p>

                            <button onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
}