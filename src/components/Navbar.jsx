import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";
import { assets } from "../assets/assets";

export default function Navbar({
  isLoggedIn,
  setIsLoggedIn,
  username,
  userType,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
  };

  return (
    <>
      <nav className="aboja navbar container-fluid navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={assets.Logo} alt="Fix-It-Logo" className="Logo" />
          </Link>
          {isLoggedIn && <p>{username}</p>}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto navbar-menu text-center d-flex gap-0">
              <li className="nav-item">
                <Link
                  to="/exchanges"
                  className="nav-link navbar-link-item fs-5 fs-md-6"
                >
                  Messages
                </Link>
              </li>

              {/* {userType === "provider" && isLoggedIn && (
                <li className="nav-item">
                  <Link
                    to="/requests"
                    className="nav-link navbar-link-item fs-5 fs-md-6"
                  >
                    Requests
                  </Link>
                </li>
              )} */}

              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link navbar-link-item fs-5 fs-md-6"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link navbar-link-item fs-5 fs-md-6"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item navbar-menu-inner-div d-flex flex-dm-column align-items-center gap-2 p-2">
                {isLoggedIn ? (
                  <button
                    type="button"
                    className="btn btn-logout fs-5 btn-sm btn-logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/auth/signin" className="">
                    <button type="button" className="btn btn-login fs-5 btn-sm">
                      Login
                    </button>
                  </Link>
                )}
                <Link to="/registration-form" className="w-100">
                  <button type="button" className="btn btn-join fs-5 btn-sm">
                    Become A Professional
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
