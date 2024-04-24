import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Computer and Tech Store</h1>
        <p>Explore the latest tech products and accessories</p>
      </header>
      <section className="features">
        <h2>What you can do on this page:</h2>
        <ul>
          <li>Explore and modify product listings</li>
          <li>Add new products to your inventory</li>
          <li>Contact us for support or suggestions</li>
        </ul>
      </section>
      <section className="contact-info">
        <h2>Contact Information:</h2>
        <p>Email: techstore@techmail.com</p>
        <p>Phone: +54-1548-5487</p>
        <p>Instagram: @techstore.de</p>
      </section>
      <div className="logo">
        <img src="/src/assets/complete-logo.jpg" alt="Tech Store Logo" />
      </div>
      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with our latest products and promotions</p>
        {/* Add newsletter subscription form here if applicable */}
      </section>
    </div>
  );
}

export default Home;
