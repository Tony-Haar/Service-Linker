import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets";

import "./aboutUsPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AboutUsPage() {
  const userCard = [
    {
      name: "yyyyyy yyyyyy",
      title: "Company Founder and CEO",
      image: assets.Founder1,
    },
    {
      name: "xxxxxx xxxxxxx",
      title: "Company Co-Founder",
      image: assets.Founder2,
    },
  ];

  return (
    <div className="main-container">
      <div className="about-us-hero">
        <div className="about-us-header">
          <h1 className="about-us-description">Meet Our Team</h1>
          <h4 className="team-description">
            We are a team of passionate individuals who are dedicated to
            providing you with the best services.
            <br />
            Our team is made up of experienced professionals who are dedicated
            to providing you with the best services. <br /> We are here to help
            you with all your home repair needs.
          </h4>
          <a href="##" className="about-us-btn">
            <button>Get In Touch</button>
          </a>
        </div>
        <div className="user-cards container-fluid d-flex justify-content-center align-items-center flex-wrap">
          {userCard.map((user, index) => (
            <div key={index} className="user-card">
              <img src={user.image} alt={user.name} className="user-image" />
              <h4>{user.name}</h4>
              <p style={{ fontSize: "16px" }}>{user.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-us-contact-center container-fluid mt-5 mb-5 py-5 px-5">
        <div className="about-us-form-container">
          <h1 className="about-us-form-header">Get In Touch</h1>
          <p className="about-us-query">
            Want to speak to someone about your startup? We'd love to chat!
          </p>
          <form action="" className="about-us-form-container">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="about-us-form-input"
            />
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="about-us-form-input"
            />
            <label>Phone Number</label>
            <option value="US"></option>
            <input
              type="email"
              placeholder="Your Email"
              className="about-us-form-input"
            />
            <input
              type="text"
              placeholder="Subject"
              className="about-us-form-input"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Message"
              className="about-us-form-input"
            ></textarea>
            <button className="about-us-form-btn">Send</button>
          </form>
        </div>
        <div className="about-us-contact">
          <div className="about-us-call-us">
            <h1>Call Us</h1>
            <p>Call our team from Mon-Fri 8AM to 5PM</p>

            <h3>
              <FontAwesomeIcon icon={faPhone} />
              +919000009044
            </h3>
          </div>
          <div className="about-us-chat-with-us">
            <h1>Chat With Us</h1>
            <p>Speak to our friendly team via live chat</p>
          </div>
          <div className="about-us-visit-us">
            <h1>Visit Us</h1>
            <p>Our headquarters is located at Abidjan</p>
            <h3>1100, Abj Street, City</h3>
          </div>
        </div>
      </div>

      <div className="sixtth-horizontal-div"></div>

      <Footer />
    </div>
  );
}

export default AboutUsPage;
