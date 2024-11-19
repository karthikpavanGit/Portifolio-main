import React from "react";

import "./footer.css";

// import icons here
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <div className="FooterComponent">
      <div className="FooterComponent-in">
        <div className="Footer-one"></div>
        <div className="Footer-two">
          <div className="Footer-two-one">
            <div className="Footer-two-name">
              <p>
                Designed & Developed by Pavan Karthik Mandadapu. All rights
                reserved.
              </p>
            </div>
          </div>
          <div className="Footer-two-two">
            <div className="Footer-two-socials">
              <FaGithub className="social-icon" />
              <FaLinkedin className="social-icon" />
              <IoLogoInstagram className="social-icon" />
              <FaYoutube className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
