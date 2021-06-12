import React from "react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import leaf from "../../assets/Group 114.png";
import c1 from "../../assets/Group 39.png";
import c3 from "../../assets/Group 55.png";
import c2 from "../../assets/Group 64.png";
import "./styles.css";

SwiperCore.use([Pagination, Navigation]);

const Companies = () => {
  return (
    <section className="companies-section">
      <div className="section-header">
        <img src={leaf} alt="leaf" />
        <h2 className="section-header-heading">Proudly presented by</h2>
        <p className="section-header-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="section-contents">
        <div className="companies-container">
          <Swiper
            slidesPerView={5}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="company-card">
                <img src={c1} alt="company" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="company-card">
                <img src={c2} alt="company" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="company-card">
                <img src={c3} alt="company" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="company-card">
                <img src={c2} alt="company" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="company-card">
                <img src={c1} alt="company" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Companies;
