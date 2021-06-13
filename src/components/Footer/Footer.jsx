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
        <a className="brand-link" href="#home">
          <img src={logo} className="footer-logo" alt="footer logo"></img>
        </a>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <span className="footer-line"></span>
        <p className="copy-right">© Copyright 2021 Nature</p>
      </div>
      <div className="block flex-row">
        <ul className="ul-list">
          <h3 className="footer-title">Information</h3>
          <span className="footer-line2"></span>
          <li>
            <a className="footer-links" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="footer-links" href="#">
              Products
            </a>
          </li>
          <li>
            <a className="footer-links" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="footer-links" href="#">
              Terms of Service
            </a>
          </li>
        </ul>
        <ul className="ul-list margins">
          <li>
            <a className="footer-links" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="footer-links" href="#">
              Products
            </a>
          </li>
        </ul>
      </div>
      <div className="block">
        <h3 className="footer-title">Follow Us</h3>
        <span className="footer-line2"></span>
        <div className="social-links">
          <a className="brand-link" href="#home">
            <img src={facebook} alt="facebook" />
          </a>
          <a className="brand-link" href="#home">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a className="brand-link" href="#home">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
