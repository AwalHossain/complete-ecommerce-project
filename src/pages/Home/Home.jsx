import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Catagory from "../../components/Catagory/Catagory";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsLettet from "../../components/NewsLetter.jsx/NewsLettet";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar></Navbar>
      <Slider></Slider>
      <Catagory></Catagory>
      <Products></Products>
      <NewsLettet></NewsLettet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
