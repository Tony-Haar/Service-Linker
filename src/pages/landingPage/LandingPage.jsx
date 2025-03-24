import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { assets } from "../../assets/assets";
import Service from "../../components/service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProInformation from "../../components/ProInformation";

import { serviceData } from "../../assets/assets";
import "./landingPage.css";
import WhyChooseUs from "../../components/WhyChooseUs";

function LandingPage({ isLoggedIn, username }) {
  const navigate = useNavigate();
  const [request, setRequest] = useState("");
  const [showModal, setShowModal] = useState(false);

  const serviceElements = serviceData.map((service) => (
    <Service key={service.id} service={service.service} image={service.image} />
  ));

  const handleClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      let userType = "";
      if (username !== "") {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((user) => user.username === username);
        if (user) {
          userType = user.userType;
        } else {
          console.warn("User not found");
        }
      }
      const requests = JSON.parse(localStorage.getItem("requests")) || [];
      const urgency = 0;
      if (userType === "needer") {
        navigate("/professionals", {
          state: {
            request: request,
            from: username,
          },
        });
        const newRequest = { username, request, urgency };
        requests.push(newRequest);
        localStorage.setItem("requests", JSON.stringify(requests));
      } else {
        navigate("/requests", {
          state: {
            request: request,
            from: username,
          },
        });
        const newRequest = { username, request, urgency };
        requests.push(newRequest);
        localStorage.setItem("requests", JSON.stringify(requests));
      }
    } else {
      console.log("popup");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className="mt-3 mx-0 header-hero">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 fs-4">
              <p className="d-flex align-items-center gap-2">
                Search For what fits you
                <i className="bi bi-chevron-right"></i>
              </p>
              <form className="d-flex mt-3">
                <input
                  type="text"
                  name="request"
                  value={request}
                  onChange={(e) => {
                    setRequest(e.target.value);
                  }}
                  className="form-control me-2"
                  placeholder="Search for any service"
                />
                <button
                  type="submit"
                  className="btn btn-search px-3"
                  onClick={handleClick}
                >
                  Search
                </button>
              </form>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={assets.Illustration1}
                alt="Illustration"
                className="img-fluid illustration-img"
                style={{
                  width: "80%",
                  borderTopLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Required</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>You need to log in to proceed with your request.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <Link to="/auth/signin">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="partners-container container-fluid mt-5 mb-5 py-5">
        <h2 className="text-center mb-4">Partners</h2>
      </div>

      <main className="landing-page-main-container container-fluid mt-5 mb-5 d-flex flex-column">
        <div className="services-display-container container-fluid">
          <h1 className="text-start">Services</h1>
          <div className="line mb-5"></div>
          <div className="horizontal-images container">
            <div className="row justify-content-center">{serviceElements}</div>
          </div>
        </div>

        {/* .................OFFERS SECTION.................. */}

        <div className="container-fluid offer-section">
          <div className="tex-start offer-label-container">
            <h1 className="offer-label text-start mt-5">Offers</h1>
            <div className="line mx-auto"></div>
          </div>

          <section className="container mt-5 mb-5 py-5 px-5 section-row">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-5">
              <div className="col-lg-6 col-md-12 d-flex justify-content-center offer-illustration-image">
                <img
                  src={assets.Warranty}
                  className="img-fluid offer-image"
                  alt="Warranty Illustrator"
                />
              </div>

              <div className="col-lg-6 col-md-12 d-flex justify-content-center offer-illustration-text">
                <div className="offer-illustration-center-text p-5 text-start">
                  <h2>WARRANTY ASSURANCE</h2>
                  <p>
                    In each point H2 and H3 provide and explain <br />
                    each offer for both the customer user and service <br />
                    proposer.
                  </p>
                  <Link to="/benefits">
                    <button className="btn btn-primary">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="container mt-5 mb-5 py-5 px-5 section-row">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-5">
              <div className="col-lg-6 col-md-12 d-flex justify-content-center offer-illustration-text">
                <div className="offer-illustration-center-text p-5 text-start">
                  <h2>GOOD DEAL WITH US</h2>
                  <p>
                    In each point H2 and H3 provide and explain <br />
                    each offer for both the customer user and service <br />
                    proposer.
                  </p>
                  <Link to="/benefits">
                    <button className="btn btn-primary">Learn More</button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex justify-content-center offer-illustration-image">
                <img
                  src={assets.GettheDeal}
                  className="img-fluid offer-image"
                  alt="Warranty Illustrator"
                />
              </div>
            </div>
          </section>
        </div>

        {/* ................................... */}

        <div className="testimonies-container">
          <h1 className="text-start mx-5">Testimonies</h1>
          <div className="line"></div>
        </div>
      </main>
      <div className="reasons-container container-fluid">
        <h1 className="mx-5">Why using our platform?</h1>
        <div className="line"></div>
        <WhyChooseUs
          style={{
            width: "100%",
            borderTopLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            padding: "10px",
          }}
        />

        <Link to="/benefits">
          <button>Learn More</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
export default LandingPage;
