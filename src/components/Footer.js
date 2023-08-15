import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPage4,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import icon1 from "../assests/footer icons/youtub.svg";
import icon2 from "../assests/footer icons/facebook.svg";
import icon3 from "../assests/footer icons/twitter.svg";
import icon4 from "../assests/footer icons/squre3.svg";
import icon5 from "../assests/footer icons/discord.svg";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assests/TEXT.png"
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="top">
            <ul>
              <Link to="/privacy-policy">Privacy Policy </Link>
              <Link to="/terms">Terms of Conditions </Link>
              <Link to="/user-agreement">User agreement</Link>
              <Link to="/guidelines"> MNFST Labs Website Guidelines.</Link>
              {/* <a href="#">REDmod</a> */}
            </ul>
          </div>

          <div className="icons">
            <h2>Find us on</h2>
            <ul>
              {/* <a href="#">
                <img src={icon1} alt="" />
              </a>
              <a href="#">
                <img src={icon2} alt="" />
              </a> */}
              <a href="#">
                <img src={icon3} alt="" />
              </a>
              {/* <a href="#">
                <img src={icon4} alt="" />
              </a> */}
              <a href="#">
                <img src={icon5} alt="" />
              </a>
            </ul>
          </div>

          <p style={{ maxWidth: "600px" }}>
            Venture with MNFST Labs in the Web 3.0 landscape. Dive into our universe of creativity and tech, uniting communities and shaping digital collectibles' future.

          </p>
          <span>© 2023 by MANIFEST LABS. All rights reserved!</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
