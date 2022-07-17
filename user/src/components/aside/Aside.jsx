import "./aside.css";
import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <div className="aside-section">
        <Link to="/cart" className="link">
          <h3>SHOP</h3>
        </Link>
        <Link to="/test" className="link">
          <h3 component={Link} to={"test"}>
            COLLECTION
          </h3>
        </Link>
        <Link to="/" className="link">
          <h3>HOME</h3>
        </Link>
      </div>
    </>
  );
};

export default Aside;
