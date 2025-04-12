import React from "react";

import { Link, useNavigate } from "react-router-dom";
import "../pages/landingPage/LandingPage.css";

export default function Service(props) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/domain/service-details", {
      state: {
        domain: props.service,
      }
    })
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 service-item ">
      <div className="service-card" onClick={handleClick}>
        <img src={props.image} alt={props.service} className="service-image" />

        <button className="service-btn btn-login mt-3 rounded">
          {props.service}
        </button>
      </div>
    </div>
  );
}
