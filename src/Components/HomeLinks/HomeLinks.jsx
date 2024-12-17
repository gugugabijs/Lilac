import React from "react";
import "./HomeLink.css";
import { Link } from "react-router-dom";

const HomeLinks = () => {
  return (
    <div>
      <div className="home-link">
        
        <div>
         <Link  style={{textDecoration:'none', color: "black"}} to='/bouqets'>
            <img src='https://partner.inloya.com/files/shop/categories/9YM4WSHQ7G02234H9ITAQB1J0Y8S60CE.jpg' />
            <h1 className="home-link-text">BOUQETS</h1>
            </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none', color: "black"}} to='/accessories'>
          <img
            src="https://partner.inloya.com/files/shop/categories/3E5FUB57UJ5KT8HCMW03295KXO5KT3R5.jpg"
            alt="bouqet"
          />
          <h1 className="home-link-text">ACCESSORIES</h1></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLinks;
