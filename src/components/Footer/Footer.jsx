import React from "react";
import background from "../../assets/Group 229.png";
import logo from "../../assets/Group 225.png";
import facebook from "../../assets/Group 99.png";
import linkedin from "../../assets/Group 100.png";
import instagram from "../../assets/Group 105.png";
import "./styles.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="block">
        <img src={logo} className="footer-logo" alt="footer logo"></img>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <span className="footer-line"></span>
        <p className="copy-right">© Copyright 2021 Nature</p>
      </div>
      <div className="block flex-column"></div>
      <div className="block"></div>
    </section>
  );
};

export default Footer;
