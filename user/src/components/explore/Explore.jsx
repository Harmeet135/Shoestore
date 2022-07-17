import React from "react";
import "./explore.css";
import circle from "../../assests/circle.svg";
import arrow from "../../assests/arrow.svg";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div id="ex-section">
      <a>Explore</a>
      <div className="linkss">
        <img id="circle" src={circle} alt="" />
        <Link to="/cart">
          <img id="arrow" src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Explore;
