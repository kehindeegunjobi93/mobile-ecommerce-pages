import { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ items, itemsPerPage = 5 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const pageRange = Array.from({ length: pageCount }, (_, i) => i);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.slice(
          activeIndex * itemsPerPage,
          activeIndex * itemsPerPage + itemsPerPage
        ).map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-icon">
            <img src={item.icon} alt="options" />
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {pageRange.map((index) => (
          <div
            key={index}
            className={`carousel-indicator ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
