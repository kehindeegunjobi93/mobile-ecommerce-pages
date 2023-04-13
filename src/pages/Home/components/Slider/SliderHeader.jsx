import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';
import './SliderHeader.scss';

const SliderHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  return (
    <div className={`slider-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="search-form">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search.." />
        </div>
        <div className="header-icons">
          <AiOutlineShoppingCart size={28} color="black" className="header-icon" />
          <div className="cart-notification-badge">1</div>
          <BsChatSquareDots size={28} color="black" className="header-icon" />
          <div className="chat-notification-badge">9+</div>
        </div>
      </div>
  )
}

export default SliderHeader