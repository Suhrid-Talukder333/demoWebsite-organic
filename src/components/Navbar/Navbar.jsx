import React from "react";
import logo from "../../assets/Group 220.png";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="brand">
        <img className="brand-logo" src={logo} alt="brand logo" />
        <p className="brand-name">organic</p>
      </div>
      <div className="links">
        <ul>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#home">Products</a>
          </li>
          <li>
            <a href="#home">Blog</a>
          </li>
          <li>
            <a href="#home">About Us</a>
          </li>
        </ul>
        <a className="contact-button" href="#home">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
