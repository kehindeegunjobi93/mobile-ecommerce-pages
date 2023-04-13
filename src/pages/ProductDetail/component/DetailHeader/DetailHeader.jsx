import React from "react";
import {
  MdArrowBackIos,
  MdFavorite,
  MdOutlineShare,
  MdOutlineShoppingBag,
} from "react-icons/md";
import "./DetailHeader.scss";
import { Link } from "react-router-dom";

const DetailHeader = () => {
  return (
    <div className="header">
      <div className="back-btn">
        <Link to="/">
          <MdArrowBackIos />
        </Link>
      </div>
      <div className="header-icons">
        <MdFavorite className="fave-icon" />
        <MdOutlineShare />
        <MdOutlineShoppingBag className="cart-icon" />
        <div className="cart-notification-badge">1</div>
      </div>
    </div>
  );
};

export default DetailHeader;
