import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Instagram, Twitter } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../assets/logo.png";
import kayipark_sanayi from "../assets/KayıPark_Sanayi.png";
import kayipark from "../assets/KayıPark_Logo.png";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer
      className="footer bg-dark text-light d-flex align-items-center"
      style={{ height: "170px" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="d-flex footer-images">
              <img src={kayipark} alt="kayipark" className="footer-image" />
              <img src={logo} alt="Kayipark_yapi" className="footer-image" />
              <img
                src={kayipark_sanayi}
                alt="kayipark_sanayi"
                className="footer-image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end footer-social-icons">
              <Link
                to="https://www.instagram.com/kayiparkyapi/"
                target="_blank"
                style={{ margin: "10px" }}
              >
                <Instagram className="text-light text-decoration-none footer-social-icon" />
              </Link>
              <Link
                to="https://twitter.com/kayiparkyapi"
                target="_blank"
                style={{ margin: "10px" }}
              >
                <Twitter className="text-light text-decoration-none footer-social-icon" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/kay%C4%B1-park-yap%C4%B1"
                target="_blank"
                style={{ margin: "10px" }}
              >
                <LinkedInIcon className="text-light text-decoration-none footer-social-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
