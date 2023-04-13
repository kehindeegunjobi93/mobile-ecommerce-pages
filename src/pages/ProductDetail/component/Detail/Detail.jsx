import React from "react";
import { AiOutlineShop, AiTwotoneStar } from "react-icons/ai";
import "./Detail.scss";

const Detail = () => {
  return (
    <div className="detail">
      <img src="/assets/featured.png" alt="featured" />
      <span>
        <AiOutlineShop /> tokabaju.id
      </span>
      <h2>
        Essentials Men's Short-Sleeve
        <br />
        Crewneck T-Shirt
      </h2>
      <div className="product-info">
        <div className="ratings">
          <AiTwotoneStar color="gold" /> 4.9 Ratings
        </div>
        <div className="reviews">2.3k+ Reviews</div>
        <div className="sold">2.9k+ Sold</div>
      </div>
    </div>
  );
};

export default Detail;
