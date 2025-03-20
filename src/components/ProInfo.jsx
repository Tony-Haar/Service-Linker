import React from 'react'
import "../pages/homePage/homePage.css";

const ProInfo = (props) => {
  return (
    <div className="card mb-3 shadow-lg rounded h-100">
      <div className="row g-0">
        <div className="col-12 d-flex justify-content-center align-items-center p-3">
          <img
            src={props.image}
            alt="Plumber Image"
            className="img-fluid rounded"
            style={{
              height: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-12">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title m-0">Title: {props.title}</h5>
                <p className="m-0">
                  Rating:
                  <span className="text-warning ms-1">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                  </span>
                  <span className="ms-1">{props.rating}</span>
                </p>
              </div>

              <div
                className="my-2"
                style={{
                  height: "4px",
                  backgroundColor: "blue",
                  width: "100%",
                }}
              ></div>

              <p className="card-text">
                <strong>Name:</strong> {props.name}
              </p>
              <p className="card-text">
                <strong>Phone:</strong> {props.phone}
              </p>
              <p className="card-text">
                <strong>Service:</strong> {props.service}
              </p>
              <p className="card-text">
                <strong>Amount:</strong> {props.price}
              </p>
              <p className="card-text">
                <strong>Distance:</strong> {props.distance} km away from your
                location
              </p>
            </div>

            <div className="text-center mt-auto">
              <button className="btn btn-primary text-white w-100">
                Request For Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="card mb-3 shadow-lg rounded" style={{ maxWidth: "540px" }}>
    //   <div className="row g-0">
    //     <div className="col-12 d-flex justify-content-center align-items-center p-3">
    //       <img
    //         src={props.image}
    //         alt="Plumber Image"
    //         className="img-fluid rounded"
    //         style={{
    //           maxHeight: "200px",
    //           width: "100%",
    //           objectFit: "cover",
    //         }}
    //       />
    //     </div>

    //     <div className="col-12">
    //       <div className="card-body">
    //         <div className="d-flex justify-content-between align-items-center">
    //           <h5 className="card-title m-0">Title: {props.title}</h5>
    //           <p className="m-0">
    //             Rating:
    //             <span className="text-warning ms-1">
    //               <i className="bi bi-star-fill"></i>
    //               <i className="bi bi-star-fill"></i>
    //               <i className="bi bi-star-fill"></i>
    //               <i className="bi bi-star-half"></i>
    //               <i className="bi bi-star"></i>
    //             </span>
    //             <span className="ms-1">{props.rating}</span>
    //           </p>
    //         </div>

    //         <div
    //           className="my-2"
    //           style={{ height: "4px", backgroundColor: "blue", width: "100%" }}
    //         ></div>

    //         <p className="card-text">
    //           <strong>Name:</strong> {props.name}
    //         </p>
    //         <p className="card-text">
    //           <strong>Phone:</strong> {props.phone}
    //         </p>
    //         <p className="card-text">
    //           <strong>Service:</strong> {props.service}
    //         </p>
    //         <p className="card-text">
    //           <strong>Amount:</strong> {props.price}
    //         </p>
    //         <p className="card-text">
    //           <strong>Distance:</strong> {props.distance} km away from your
    //           location
    //         </p>

    //         <div className="text-center">
    //           <button className="btn btn-primary text-white w-100">
    //             Request For Service
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProInfo