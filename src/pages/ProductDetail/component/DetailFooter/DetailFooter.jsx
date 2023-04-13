import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./DetailFooter.scss";

const DetailFooter = () => {
  return (
    <div className="detail-footer">
      <div className="footer-row">
        <div className="price">
          <span>Total Price</span>
          <p>$18.00</p>
        </div>
        <div className="cart">
          <button>
            <MdOutlineShoppingBag />1
          </button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailFooter;
