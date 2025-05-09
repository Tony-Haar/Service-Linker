import React from "react";
import { useLocation } from "react-router-dom";

import { domainServiceData } from "../../assets/assets";
import DomainService from "../../components/DomainService";

import "./domainServiceDetailPage.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function DomainServiceDetailPage() {
  const location = useLocation();
  const { domain } = location.state || {}; 
  console.log(domain);
  const domainServiceDataElement = domainServiceData[`${domain}`].map((domainservice) => (
    <DomainService
      key={domainservice.id}
      image={domainservice.image}
      servicetype={domainservice.service_type}
      serviceslist={domainservice.services_list}
    />
  ));

  return (
    <div className="service-detail-container">
      <main>
        <h1>{domain}</h1>
        <h4 className="subtitle">
          Feel free to go through our {domain} services catalog
          <br />
          to understand what you can expect from us.
        </h4>

        <div className="domain-service-displaying-container">
          {domainServiceDataElement}
        </div>

        <div className="third-horizontal-div"></div>

        <section className="_get-started-section_">
          <h2>Ready to get started?</h2>
          <p>
            It's quick and easy to get the help you need.
            <br /> Post your repair request today and get
            <br /> connected with top-rated professionals in your area.
          </p>
          <form action="">
            <select name="domains" id="domain-select">
              <option value="">--Please select the repair domain--</option>
              <option value="Masonary">Masonary</option>
              <option value="Tiling">Tiling</option>
              <option value="Electricity">Electricity</option>
              <option value="Mechanics">Mechanics</option>
              <option value="Electronics">Mechanics</option>
            </select>

            <select name="services" id="service-select">
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
            <br />
            <input type="submit" value="FIND A PROFESSIONAL" />
          </form>
        </section>

        <hr />
      </main>

      <Footer />
    </div>
  );
}