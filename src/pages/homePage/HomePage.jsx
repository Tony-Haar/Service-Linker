import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";

import StepImage from "../../assets/step.png";
import "./homePage.css";
import YaleGear from "../../../docs/yale-gear.svg";
import HonoluluGear from "../../../docs/honolulu-gear.svg";
import Service from "../../components/service";
import { assets, serviceData } from "../../assets/assets";
import Button from "../../components/Button";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function HomePage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const serviceElements = serviceData.map((service) => (
    <Service key={service.id} service={service.service} image={service.image} />
  ));

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "30px",
    marginLeft: "30px",
    marginRight: "30px",
  };

  const reusableButtonElements = serviceData.map((service) => (
    <Button
      key={service.id}
      variant={service.id % 2 == 0 ? "yale-blue" : "honolulu-blue"}
    >
      {service.service}
    </Button>
  ));

  return (
    <>
      <div className="form-hero gap-3 d-flex flex-column container-fluid m-5 py-5 w-100">
        <div className="text-start gap-2 d-flex flex-column w-100">
          <h1 className="text-start">
            Welcome To <span className="form-hero-span">Service-Linker</span>
          </h1>
          <p className="text-start">
            Connecting you with qualified professionals for quick assistance.
          </p>
        </div>
        <div className="gap-2 d-flex flex-column w-100">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/professionals", {
                state: {
                  service: selectedService,
                  option: selectedOption,
                },
              });
            }}
            className="d-flex flex-column gap-3 w-50"
          >
            <div className="gap-3 d-flex w-100 justify-content-center align-items-center">
              <select
                name="domains"
                id="domain-select"
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                }}
                className="form-hero-option-one form-select w-100 p-2 text-center"
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <option value="">--Please select the repair domain--</option>
                <option value="Carpentry">Carpentry</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Painting">Painting</option>
                <option value="Roofing">Roofing</option>
                <option value="Mechanical">Mechanical</option>
              </select>
              <select
                name="services"
                id="service-select"
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
                className="form-hero-option-two form-select w-100 p-2 text-center"
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <option value="">--select the service type--</option>
                <option value="Masonary ">block and stone repair</option>
                <option value="Masonary">concrete façade repair</option>
                <option value="Masonary">
                  stone and brick repointing, wall rebuilds
                </option>
                <option value="Tiling">fixing loose or broken tiles</option>
                <option value="Electronics">
                  repairs of electronic device, TV fixing, computer
                </option>
              </select>
            </div>
            <div className="d-flex">
              <input
                type="submit"
                value="FIND A PROFESSIONAL"
                className="btn-login"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="container-fluid mb-5 d-flex flex-column">
        <div className="gears-container">
          <div className="custom-div-1">
            <div className="custom-div-2">
              <img
                src={assets.BerkeleyGear}
                width="200px"
                className="honolulu-gear d-none d-lg-block"
              />
            </div>
          </div>
          <img
            src={assets.OrangeGear}
            width="300px"
            className="yale-gear d-none d-lg-block"
          />
        </div>
      </div>

      <div className="two-divs container-fluid d-flex justify-content-between w-100 mt-5 mb-5 py-5">
        <div className="first-horizontal-div w-100"></div>
        <div className="second-horizontal-div w-100"></div>
      </div>
      <div className="container-fluid ">
        <section className="category-section container-fluid mb-5 d-flex flex-column">
          <h1>Our available domains</h1>
          <p>know more about what we offer for each domains</p>
          <div className="horizontal-images home-card-container">
            {serviceElements}
          </div>
        </section>
      </div>

      <div className="second-horizontal-div"></div>
      <div className="container-fluid d-flex flex-column">
        <section className="reusable-btn-section container-fluid mb-5 d-flex flex-column">
          <div className="text-start">
            <h1>Want to see Professionals profiles?</h1>
            <p>click any domain service</p>
          </div>
          <div className="">
            <Link to="/professionals" className="text-decoration-none">
              <div style={style}>{reusableButtonElements}</div>
            </Link>
          </div>
        </section>
      </div>

      <div className="third-horizontal-div"></div>

      <div className="container-fluid d-flex justify-content-between w-100 mb-5 py-5">
        <div className="d-flex align-items-center justify-content-between flex-row w-100">
          <div className="text-start d-flex flex-column p-5">
            <h1 className="text-start mb-5">How it works</h1>
            <ol className="text-start d-flex flex-column gap-3">
              <li>Post Your Repair Need</li>
              <div>
                <p className="gap-3 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faList} size="2x" />
                  Describe your issue in detail.
                </p>
              </div>
              <li>Connect with a Professional</li>
              <div>
                <p className="gap-3 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faWifi} size="2x" />
                  Receive bids and choose the best pro.
                </p>
              </div>
              <li>Get it Fixed</li>
              <div>
                <p className="gap-3 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" />
                  Schedule and complete your repair.
                </p>
              </div>
              <li>Be satisfied</li>
              <div>
                <p className="gap-3 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faHandshakeAngle} size="2x" />
                  Have a great day!
                </p>
              </div>
            </ol>
            <Link to="/how-it-works">
              <button className="btn btn-login">LEARN MORE</button>
            </Link>
          </div>
          <div
            className="float-end"
            style={{ float: "right", textAlign: "right" }}
          >
            <img
              src={assets.Step}
              alt=""
              className="img-fluid float-end d-none d-lg-block"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      <div className="fourth-horizontal-div"></div>

      <main className="container-fluid d-flex flex-column justify-content-between">
        <section className="p-5 d-flex flex-column mb-5">
          <h1>Ready to get started?</h1>
          <p>Join thousands of satisfied customers today</p>
          <Link to="/auth/signin">
            <button className="btn btn-join">JOIN</button>
          </Link>
        </section>

        <div className="fifth-horizontal-div"></div>

        <section className="container-fluid d-flex flex-column justify-content-between mb-5 p-5">
          <h1 className="text-start">Why using our platform?</h1>
          <p className="text-start">BBBBBBBBBBBBBBBBB</p>
          <Link to="/benefits">
            <button className="btn btn-login">Learn More</button>
          </Link>
        </section>
      </main>

      <div className="sixtth-horizontal-div container-fluid"></div>

      <Footer />
    </>
  );
}
export default HomePage;
