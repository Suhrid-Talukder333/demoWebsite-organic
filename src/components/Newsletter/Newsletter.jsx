import React from "react";
import quote from "../../assets/Group 86.png";
import women from "../../assets/women.png";
import sideLeaves from "../../assets/Group 134.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);
const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <img src={sideLeaves} className="side-img"></img>
      <div className="quote-section">
        <Swiper
          pagination={true}
          loop={true}
          slidesPerView={1}
          className="mySwiper quote-swipper"
        >
          <SwiperSlide>
            <div className="quote">
              <img className="quote-img" src={quote} alt="quote" />
              <div className="women-img-container">
                <img className="women-img" src={women} alt="person" />
              </div>
              <h2 className="person-name">Jane Doe</h2>
              <div className="stars">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p className="person-quote">
                Thank you for all the amazing produce and products you deliver
                each week… <br />
                you make my life so easy an bring goodness into our family
                eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="quote">
              <img className="quote-img" src={quote} alt="quote" />
              <div className="women-img-container">
                <img className="women-img" src={women} alt="person" />
              </div>
              <h2 className="person-name">Jane Doe</h2>
              <div className="stars">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p className="person-quote">
                Thank you for all the amazing produce and products you deliver
                each week… <br />
                you make my life so easy an bring goodness into our family
                eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="quote">
              <img className="quote-img" src={quote} alt="quote" />
              <div className="women-img-container">
                <img className="women-img" src={women} alt="person" />
              </div>
              <h2 className="person-name">Jane Doe</h2>
              <div className="stars">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p className="person-quote">
                Thank you for all the amazing produce and products you deliver
                each week… <br />
                you make my life so easy an bring goodness into our family
                eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="quote">
              <img className="quote-img" src={quote} alt="quote" />
              <div className="women-img-container">
                <img className="women-img" src={women} alt="person" />
              </div>
              <h2 className="person-name">Jane Doe</h2>
              <div className="stars">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p className="person-quote">
                Thank you for all the amazing produce and products you deliver
                each week… <br />
                you make my life so easy an bring goodness into our family
                eating.
                <br /> I’ve been roasting a lot of brussel sprouts and
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="newsletter">
        <div className="section-header">
          <h2 className="section-header-heading">
            Subscribe to Our Newsletter
          </h2>
          <p className="section-header-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="email-input-container">
          <input
            className="email-input-box"
            type="email"
            placeholder="Enter your email adress"
          ></input>
          <a href="#home" className="submit-btn">
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
