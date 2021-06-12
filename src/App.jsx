import React from "react";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Companies from "./components/Companies/Companies";
import Newsletter from "./components/Newsletter/Newsletter";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const APP = () => {
  return (
    <>
      <Hero />
      <Products />
      <Companies />
      <Newsletter />
      <Blogs />
      <Footer />
    </>
  );
};

export default APP;
