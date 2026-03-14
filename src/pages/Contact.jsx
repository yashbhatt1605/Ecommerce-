import React from "react";
import "./Pages.css";

export default function Contact() {
    return (
        <div className="page">

            <section className="page-hero">
                <h1>Contact Us</h1>
                <p>We would love to hear from you</p>
            </section>

            <section className="contact-form">
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

        </div>
    );
}