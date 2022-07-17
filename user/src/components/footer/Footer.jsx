import React from "react";
import "./footer.css";
import circle1 from "../../assests/circle.svg";
import arrow1 from "../../assests/arrow.svg";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer-section">
      <div className="foot-left">
        <h2>SUBSCRIBE TO NEWSLETTER</h2>
        <h2>
          <AiOutlineMail />
        </h2>
      </div>
      <div className="foot-right">
        <h3>INFO</h3>
        <h2>FAQ</h2>
        <h2>RETURNS</h2>
        <h2>CONTACT</h2>
      </div>
      <div className="foot-right">
        <h3>POLICY</h3>
        <h2>TERMS</h2>
        <h2>PRIVACY</h2>
        <h2>COOKIE</h2>
      </div>
      <div className="imggg">
        <img id="circle1" src={circle1} alt="" />

        <a href="#header">
          <img id="arrow1" src={arrow1} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
