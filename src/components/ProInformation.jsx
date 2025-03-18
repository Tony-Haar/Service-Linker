import React from 'react'
import { assets } from '../assets/assets';


const ProInformation = (props) => {
  return (
    <div className="card mb-3 " style={{ maxWidth: "440px" }}>
      <div className="row g-0 d-flex flex-column ">
        <div className="col">
          <img
            src={assets.Profile}
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start d-flex justify-content-center"
            style={{ height: "100%" }}
          />
        </div>
        <div className="col">
          <div className="card-body">
            <div className="d-flex justify-content-between gap-5">
              <h5 className="card-title">Title: Mechanic</h5>
              <p>
                Rating:
                <span class="star-rating text-warning text-end">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                  <i class="bi bi-star"></i>
                </span>
              </p>
            </div>
<div style={{

                height: "5px",
                backgroundColor: "blue",
                width: "100%",
                marginBottom: "10px"

}}></div>
            <p className="card-text">Name: Chuan Haar</p>
            <p className="card-text">Phone No: 9020478900</p>
            <p className="card-text">Service Amount: 200</p>

            {/* <p className="card-text">
              What I Offer: I repair and maintain your vehicle with precision
            </p>
            <p className="card-text">
              Distance: 2.5 km away from your location
            </p>
            <p className="card-text">Rating: 4.5</p> */}
            <div className="d-flex justify-content-center">
              <button
                href="##"
                className="btn btn-primary text-center text-white"
              >
                Request For Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProInformation