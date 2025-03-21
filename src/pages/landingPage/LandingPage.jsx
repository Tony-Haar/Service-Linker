import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Service from "../../components/service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProInformation from "../../components/ProInformation";

import { serviceData } from "../../assets/assets";
import "./landingPage.css";

function LandingPage() {
  const serviceElements = serviceData.map((service) => (
    <Service key={service.id} service={service.service} image={service.image} />
  ));

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
                  className="form-control me-2"
                  placeholder="Search for any service"
                />
                <button type="submit" className="btn btn-search px-3">
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

          <section className="section-first-row container mt-5 mb-5 py-5 px-5 gap-5">
            <div className="row-1 d-flex align-items-center gap-5">
              <div className="col-lg-6 col-md-12 text-start offer-illustration-left">
                <img
                  src={assets.Warranty}
                  className="img-fluid offer-image"
                  alt="Warranty Illustrator"
                />
              </div>

              <div className="col-lg-6 col-md-6 text-start offer-illustration-right">
                <div className="offer-illustration-right-text text-start">
                  <h1 className="text-start">WARRANTY ASSURANCE</h1>
                  <p className="text-start">
                    In each point H2 and H3 provide and explain <br />
                    each offer for both the customer user and service <br />
                    proposer.
                  </p>
                  <Link to="/benefits">
                    <button className="btn btn-primary text-start">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="section-first-row d-flex flex-column justify-content-center align-items-center container mt-5 mb-5 py-5 px-5 gap-5">
            <div className="row gap-5 d-flex align-items-center flex-wrap">
              <div className="col-lg-6 col-md-12 text-start offer-illustration-left">
                <img
                  src={assets.Warranty}
                  className="img-fluid offer-image"
                  alt="Warranty Illustrator"
                />
              </div>

              <div className="col-lg-6 col-md-12 text-start offer-illustration-right mt-0">
                <div className="offer-illustration-right-text text-start">
                  <h1 className="text-start">WARRANTY ASSURANCE</h1>
                  <p className="text-start">
                    In each point H2 and H3 provide and explain <br />
                    each offer for both the customer user and service <br />
                    proposer.
                  </p>
                  <Link to="/benefits">
                    <button className="btn btn-primary text-start">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section className="section-first-row d-flex flex-column justify-content-center align-items-center container mt-5 mb-5 py-5 px-5 gap-5">
            <div className="row gap-5">
              <div className="col text-start offer-illustration-left">
                <img
                  src={assets.Warranty}
                  className="img-fluid offer-image"
                  alt="Warranty Illustrator"
                />
              </div>

              <div className="col text-start offer-illustration-right mt-0">
                <div className="offer-illustration-right-text text-start">
                  <h1 className="text-start">WARRANTY ASSURANCE</h1>
                  <p className="text-start">
                    In each point H2 and H3 provide and explain <br />
                    each offer for both the customer user and service <br />
                    proposer.
                  </p>
                  <Link to="/benefits">
                    <button className="btn btn-primary text-start">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section className="pro-service row align-items-center flex-md-row-reverse">
            <div className="row">
              <div className="col-lg-6 text-center">
                <img
                  src={assets.GettheDeal}
                  className="img-fluid offer-image"
                  alt="Good Deal Illustration"
                />
              </div>
              <div className="col-lg-6 pro-service-inner-left-container">
                <h1>GOOD DEAL WITH US</h1>
                <p>
                  In each point H2 and H3 provide and explain <br />
                  each Pro service for both the customer user <br />
                  and service proposer.
                </p>
                <Link to="/benefits">
                  <button className="btn btn-success">Learn More</button>
                </Link>
              </div>
            </div>
          </section> */}
        </div>

        {/* ..........END................... */}

        {/* <h1 className="offer-label mt-5">Offers</h1>
        <div className="line w-100"></div>
        <section className="offer">
          <div className="offer-illustration">
            <img
              src={assets.Warranty}
              className="img-fluid"
              alt="Warranty illustrator"
            />
          </div>
          <div className="offer-inner-right-container">
            <div>
              <h1>WARRANTY ASSURANCE</h1>
            </div>
            <p>
              in each point H2 and H3 provide and explain <br />
              each offer for both the customer user and service <br />
              proposer
            </p>
            <Link to="/benefits">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </section>

        <section className="pro-service">
          <div className="pro-service-inner-left-container">
            <div>
              <h1>GOOD DEAL WITH US</h1>
            </div>
            <p>
              in each point H2 and H3 provide and explain <br />
              each Pro service for both the customer user <br />
              and service proposer
            </p>
            <Link to="/benefits">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="pro-service-illustration">
            <img
              src={assets.GettheDeal}
              className="img-fluid "
              alt="Six Image"
            />
          </div>
        </section> */}

        {/* .............ENDS HERE................ */}

        <div className="testimonies-container">
          <h1>Testimonies</h1>
        </div>

        <div className="reasons-container">
          <h1>Why using our platform?</h1>
          <div className="line"></div>
          <p>
            We offer the best services ever that you can find in the market.
            <br />
            Here are some reasons why you should choose us.
          </p>
          <Link to="/benefits">
            <button>Learn More</button>
          </Link>
        </div>
        {/* <hr /> */}
      </main>
      <Footer />
    </>
  );
}
export default LandingPage;
