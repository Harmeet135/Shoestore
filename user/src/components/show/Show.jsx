import React from "react";
import IMG1 from "../../assests/yellowshoe.jpeg";
import IMG2 from "../../assests/orangeshoe.jpeg";
import "./show.css";

const Show = () => {
  return (
    <div className="show-section">
      <div className="showyellow">
        <div className="inner--yellow--box">
          <img className="imgg" src={IMG1} alt="" />
        </div>
        <div className="inner--yellow">
          <p>(01)</p>
          <p>MAN</p>
        </div>
      </div>
      <div className="showorange">
        <div className="inner--orange--box">
          <img className="imgg" src={IMG2} alt="" />
        </div>
        <div className="inner--orange">
          <p>(02)</p>
          <p>WOMAN</p>
        </div>
      </div>
    </div>
  );
};

export default Show;
