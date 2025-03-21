import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="service-card" onClick = {handleClick}>
      <img src={props.image} alt="" />
      <h3>{props.service}</h3>
    </div>
/*     <Link to="/domain/service-details">
      <div className="service-card">
        <img src={props.image} alt="" />
        <h3>{props.service}</h3>
      </div>
    </Link> */
  );
}
