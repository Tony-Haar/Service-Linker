import React from "react";
import { Link } from "react-router-dom";
import "../pages/landingPage/LandingPage.css";
export default function Service(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 service-item ">
      <Link
        to="/domain/service-details"
        className="service-link text-decoration-none"
      >
        <div className="service-card">
          <img
            src={props.image}
            alt={props.service}
            className="service-image"
          />

          <button className="service-btn btn-login mt-3 rounded">
            {props.service}
          </button>
        </div>
      </Link>
    </div>
  );
}
