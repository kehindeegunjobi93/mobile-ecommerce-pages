import React, { useEffect, useState } from "react";
import "./home.scss";
import Slider from "./components/Slider/Slider";
import optionsJson from "../../data/options.json";
import productsJson from "../../data/products.json";
import Carousel from "./components/Carousel/Carousel";
import Product from "./components/Products/Product";
import Footer from "./components/Footer/Footer";

const Home = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setCarouselData(optionsJson);
    setProductsData(productsJson);
  }, []);

  const sliderImages = [
    {
      id: 1,
      image: "/assets/slider1.jpeg",
      title: "#FASHION DAY",
      subtitle: "80% OFF",
    },
    {
      id: 2,
      image: "/assets/slider2.jpeg",
      title: "#BEAUTY SALE",
      subtitle: "DISCOVER OUR BEAUTY SALE",
    },
  ];

  return (
    <>
      <Slider images={sliderImages} autoPlayInterval={5000} />
      <Carousel items={carouselData} />
      <Product products={productsData} />
      <Footer/>
    </>
  );
};

export default Home;
