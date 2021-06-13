import React from "react";
import leaf from "../../assets/Group 114.png";
import product from "../../assets/Group 207.png";
import "./styles.css";

const Products = () => {
  return (
    <section className="products-section">
      <div className="section-header">
        <img src={leaf} alt="leaf" />
        <h2 className="section-header-heading">Welcome to Nature</h2>
        <p className="section-header-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="section-contents">
        <div className="products-container">
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
