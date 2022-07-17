import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="h-section">
        <h1 className="heading--text">SPRING</h1>
        <div className="combo">
          <h1 className="heading--text">SUMMER</h1>
          <div className="heading--text-smaller">
            COLL.
            <br />
            2022
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
