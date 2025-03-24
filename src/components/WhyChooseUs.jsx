import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { whyChooseUs } from "../assets/assets";
import "../pages/landingPage/landingPage.css";
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="overlay"></div> 
      <div className="container text-center position-relative">
        <Carousel
          interval={3000}
          indicators={false}
          controls={true}
          className="custom-carousel"
          pause={false}
          wrap={true} 
        >
          {Object.keys(whyChooseUs).map((key) =>
            whyChooseUs[key].map((feature) => (
              <Carousel.Item key={feature.id}>
                <div className="carousel-content">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-img"
                    style={{ width: "100%", height: "100p%" }}
                  />
                  <h4 className="text-white">{feature.title}</h4>
                  <p className="text-white">{feature.description}</p>
                </div>
              </Carousel.Item>
            ))
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default WhyChooseUs;

