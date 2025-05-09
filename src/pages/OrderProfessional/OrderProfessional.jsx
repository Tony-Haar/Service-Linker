import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { serviceData } from "../../assets/assets";
import { serviceRelatedImageData } from "../../assets/assets";
import { professionalDetails } from "../../assets/assets";

import ProInfo from "../../components/ProInfo";
import RelatedImage from "../../components/relatedImage";

import Button from "../../components/Button";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const OrderProfessional = () => {
  const professionalProfileData = professionalDetails["plumber"];
  const RelatedImageData = serviceRelatedImageData["plumbing"];

  const selectedProfileNo = professionalProfileData.length;
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
      $variant={service.id % 2 === 0 ? "yale-blue" : "honolulu-blue"}
      $page="profile-page"
    >
      {service.service}
    </Button>
  ));

  const profileElements = professionalProfileData.map((profile) => (
    <ProInfo
      key={profile.id}
      title={profile.title}
      image={profile.image}
      rating={profile.rating}
      name={profile.name}
      phone={profile.phone}
      service={profile.service}
      amount={profile.price}
      distance={profile.distance}
    />
  ));

  const serviceRelatedImageElements = RelatedImageData.map((relative) => (
    <RelatedImage
      key={relative.id}
      image={relative.image}
      repair={relative.repair_short}
    />
  ));

  return (
    <div className="profiles-page-container mt-5">
      <Navbar />
      <header className="mt-5 pt-5">
        <div style={style} className="header-reusable-button-div">
          {reusableButtonElements}
        </div>
      </header>
      <main>
        <section>
          <h1>Plumbing professionals</h1>
          <div className="sort-dropdown">
            <div>
              <label>Sort by: </label>
              <select id="sort-level">
                <option value="default">--Choose--</option>
                <option value="level1">High rated</option>
                <option value="level2">Level 2</option>
                <option value="level3">Level 3</option>
              </select>
            </div>
            <p>{selectedProfileNo}+ Results</p>
          </div>
          <div
            className="profile-displaying-container "
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {profileElements}
          </div>

          <div className="pagination-container">
            <FontAwesomeIcon icon={faAngleLeft} />
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </section>

        <div className="second-horizontal-div"></div>

        <section className="service-related-images-section">
          <h2>Service related images</h2>
          <div className="related-images-display-container">
            {serviceRelatedImageElements}
          </div>
        </section>

        <hr />
      </main>

      <Footer />
    </div>
  );
};

export default OrderProfessional