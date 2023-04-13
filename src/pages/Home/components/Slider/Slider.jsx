import React, { useState, useEffect } from "react";
import "./Slider.scss";
import SliderHeader from "./SliderHeader";

const Slider = ({ images, autoPlayInterval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, autoPlayInterval);
    return () => clearTimeout(timer);
  }, [activeIndex, images.length, autoPlayInterval]);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="slider">
      <SliderHeader />
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider__slide ${
            index === activeIndex ? "slider__slide--active" : ""
          }`}
          style={{ backgroundImage: `url(${image?.image})` }}
        >
          <div className="slider__slide-content">
            <p>{image.title}</p>
            <h2>{image.subtitle}</h2>
            <button>Check this out</button>
          </div>
        </div>
      ))}
      <div className="slider-indicators">
        {images.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeIndex
                ? "slider-indicator active"
                : "slider-indicator"
            }
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
