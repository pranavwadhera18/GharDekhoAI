import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Made with Love By</span>
          <span className="secondaryText">Pranav Wadhera</span>
          <span className="secondaryText">Chandigarh, India</span>
          <span className="secondaryText">7529096980</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
