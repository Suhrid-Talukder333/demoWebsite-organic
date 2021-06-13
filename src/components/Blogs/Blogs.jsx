import React from "react";
import leaf from "../../assets/Group 114.png";
import containers from "../../assets/containers.png";
import eucalyptus from "../../assets/eucalyptus.png";
import potted from "../../assets/potted.png";
import "./styles.css";

const Blogs = () => {
  return (
    <section className="blogs-section">
      <div className="section-header" data-aos="fade-left">
        <img src={leaf} alt="leaf" />
        <h2 className="section-header-heading">Read Our Blog</h2>
        <p className="section-header-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="section-contents">
        <div className="blogs-container">
          <div className="blogs-card" data-aos="fade-up" data-aos-delay="100">
            <img src={potted} alt="blogs" />
            <h3 className="blogs-name">Blog Post One</h3>
            <h4 className="blogs-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h4>
            <a className="blogs-readmore" href="#home">
              Read More
              <span className="line"></span>
            </a>
          </div>
          <div className="blogs-card" data-aos="fade-up" data-aos-delay="200">
            <img src={containers} alt="blogs" />
            <h3 className="blogs-name">Blog Post One</h3>
            <h4 className="blogs-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h4>
            <a className="blogs-readmore" href="#home">
              Read More
              <span className="line"></span>
            </a>
          </div>
          <div className="blogs-card" data-aos="fade-up" data-aos-delay="300">
            <img src={eucalyptus} alt="blogs" />
            <h3 className="blogs-name">Blog Post One</h3>
            <h4 className="blogs-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h4>
            <a className="blogs-readmore" href="#home">
              Read More
              <span className="line"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
