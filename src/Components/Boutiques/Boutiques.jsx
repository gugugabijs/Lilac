import React from "react";
import "./Boutiques.css";
import { Link } from "react-router-dom";

const Boutiques = () => {
  return (
    <div>
  
      <div className="boutiques">
        <div>
          <Link style={{ textDecoration: "none" }} to="/boutiques">
            <img src="https://partner.inloya.com/files/shop/branch/I82M41OU4R3133O048C9323MN81MSD4S.jpg" />
            <h1>Lilac Winter Park</h1>
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/boutiques">
            <img src="https://partner.inloya.com/files/shop/branch/Y2C487Y36DIAOOOYR20HPF62G45R8V68.jpg" />
            <h1>Lilac Port Baku</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Boutiques;
