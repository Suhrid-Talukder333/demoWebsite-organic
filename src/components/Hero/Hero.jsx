import React from "react";
import logo from "../../assets/Group 228.png";
import flower from "../../assets/Group 195.png";
import "./styles.css";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <>
      <div id="home" className="hero-section">
        <Navbar />
        <section className="text-decoration-container">
          <div className="text">
            <h2 className="hero-text-1">Healthy life with</h2>
            <h1 className="hero-text-2">Nature Organic</h1>
            <p className="hero-text-3">
              Vegetables are the edible parts of a plant that is used in cooking
              or can be eaten now.
            </p>
            <a className="hero-button" href="#home" alt="explore button">
              Explore Now
            </a>
          </div>
          <div className="decoration">
            <div className="inner-box">
              <img src={logo} alt="brand logo" />
            </div>
            <img
              className="decoration-flower"
              src={flower}
              alt="white flower"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
