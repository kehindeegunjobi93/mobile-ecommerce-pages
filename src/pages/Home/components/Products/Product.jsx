import React, { useEffect, useState } from "react";
import "./Product.scss";
import { AiTwotoneStar, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.pageYOffset > 130;
      setIsFixed(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product-container">
      <div className={`title ${isFixed ? "title--fixed" : ""}`}>
        <h2>Best Sale Product</h2>
        <p>See more</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <Link to="/product-detail">
            <div className="product" key={product.id}>
              <div className="favorite">
                <AiFillHeart color="red" />
              </div>
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <span>Shirt</span>
                <h2>{product.title}</h2>
                <div className="product-footer">
                  <div className="rating">
                    <AiTwotoneStar color="gold" />
                    <span> 4.9 / 2300</span>
                  </div>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
