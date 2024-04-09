import React from "react";
import Logo from "../imgs/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <div className="footer-container">
        <div className="footer-container-flex">
        <div className="social">
          <img src={Logo} alt="logo" />
          <div className="icons">
            <FacebookIcon className="icon" />
            <TwitterIcon className="icon" />
            <InstagramIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li>Installation</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Financing</li>
            <li><Link to="/biorhythm">Biorhythm</Link></li>
          </ul>
        </div>
        </div>
        <p style={{ color: "white",textAlign:"center" }}>© 2024. All rights reserved.</p>
      </div>
  );
}

export default Footer;
