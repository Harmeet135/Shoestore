import React from "react";
import "./shop.css";
import circle1 from "../../assests/circle.svg";
import arrow1 from "../../assests/arrow.svg";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div id="ex-section">
      <a>Shop All</a>
      <div className="linkss">
        <img id="circle" src={circle1} alt="" />
        <Link to="/test">
          <img id="arrow" src={arrow1} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Shop;
