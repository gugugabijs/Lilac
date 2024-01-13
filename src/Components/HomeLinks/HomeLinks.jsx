import React from "react";
import "./HomeLink.css";
import { Link } from "react-router-dom";

const HomeLinks = () => {
  return (
    <div>
      <div className="home-link">
        <div>
          <Link style={{textDecoration:'none'}} to='/compositions'>
          <img
            src="https://partner.inloya.com/files/shop/categories/Y1O3476CLIH5LTXSF75K519MX1N92S70.jpg"
            alt="bouqet"
          />
          <h1>Flower Subscription</h1></Link>
        </div>
        <div>
         <Link  style={{textDecoration:'none'}} to='/bouqets'>
            <img src='https://partner.inloya.com/files/shop/categories/9YM4WSHQ7G02234H9ITAQB1J0Y8S60CE.jpg' />
            <h1>BOUQETS</h1>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLinks;
