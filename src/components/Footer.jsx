import React from "react";
import { Link } from "react-router-dom";
import "../pages/landingPage/landingPage.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-link-item-container d-flex flex-wrap justify-content-center align-items-center py-5 px-5">
        <Link to="/home" className="text-decoration-none">
          Home
        </Link>

        <a href="" className="text-decoration-none">
          About Us
        </a>
        <a href="" className="text-decoration-none">
          Terms Of Services
        </a>
        <a href="" className="text-decoration-none">
          Privacy Policy
        </a>
        <a href="" className="text-decoration-none">
          Help & Support
        </a>
      </div>

      <h3 className="text-center py-4 gap-2">
        &copy;
        <span>Service-Linker,</span> {currentYear} All Rights Reserved
      </h3>
    </footer>
  );
};

export default Footer;
