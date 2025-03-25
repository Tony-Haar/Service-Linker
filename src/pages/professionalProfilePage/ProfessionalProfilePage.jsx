import React, {useState} from "react";

import { useLocation, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPhone, faLink } from "@fortawesome/free-solid-svg-icons";

import "./professionalProfilePage.css";
import Profile from "../../assets/profile.jpeg";
import Paint from "../../assets/painting.png";
import Mechanic from "../../assets/mechanic.png";
import Plumbing from "../../assets/plumbing.png";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



function ProfessionalProfilePage({isLoggedIn, username}) {
  const navigate = useNavigate();
  const location = useLocation();
  const {name, email, experience, service, image, about, contact, expertise} = location.state || {}

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");


  const expertiseElement = expertise.map((skill) => ( 
    <p className="expertise">{skill}</p>
  ))

  const closeModal = () => {
    setShowModal(false);
  };

  const propositionBtnClick = (proposition) => {
    setMessage(proposition);
  }

  const propositions = [
    "👋 Hey {name} A, can you help me with ",
    "Need you it's urgent, are you available?",
    `can you fix anything related to ${service}?`
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isLoggedIn) {
      const messages = JSON.parse(localStorage.getItem("messages")) || [];
      console.log(username, name, message);
      const newMessage = {
        sender: username,
        receiver: email,
        message: message,
      };
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));
      closeModal();
      console.log(messages);
      alert(`message send to ${name}`)
    } else {
      alert(`You should log in first`);
    }
  }

  return (
    <div className="professional-profile-page-container">
      <header>
        {/* <Navbar /> */}
      </header>
      <main className="main-container">
        <h1>
          I will help you out with everything <br />
          related to {service}
        </h1>
        <div className="main-inner-container">
          <div className="professional-details-container">
            <section className="professional-details-inner-container">
              <img src={image} alt="professional image" />
              <div className="professional-info">
                <h5 style = {{marginBottom: "0", paddingBottom: "0"}}>{name}</h5>
                <p style = {{marginBottom: "0", paddingBottom: "0"}}>{experience} of experience</p>
                <div className="professional-info-rating">
                  <FontAwesomeIcon icon={faStar} />
                  <p style = {{marginBottom: "0", paddingBottom: "0"}}>4.8</p>
                </div>
              </div>
            </section>

            <p className="about-professional">
              {about}
            </p>

            <section className="professional-expertise-container">
              {expertiseElement}
              {/* <p className="expertise">
                Installing and repairing faucets, sinks, showers, and bathtubs
              </p>
              <p className="expertise">
                Replacing outdated or damaged fixtures
              </p>
              <p className="expertise">Upgrading to water-saving fixtures</p>
              <p className="expertise">Installing new plumbing fixtures</p>
              <p className="expertise">Sewer line repair and replacement</p> */}
            </section>

            <section className="review-section">
              <div className="review-section-header">
                <h3>What people loved about this professional</h3>
                <a href="">See all reviews</a>
              </div>
              <div className="review-card">
                <div className="review-card-rating">
                  <div className="review-card-profile">J</div>
                  <h5>June Olade</h5>
                  <div className="vertical-separator"></div>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <h3>5</h3>
                  </div>
                </div>
                <p>
                  I recently had the pleasure of working with John Mitchell from
                  ABC Plumbing Services to repair my kitchen sink, and I
                  couldn't be more satisfied with the experience. From start to
                  finish, Jo...
                </p>
              </div>
            </section>

            {/* <section className="portfolio-section">
              <h3>Portfolio</h3>
              <div className="portfolio-images-container">
                <img src={Plumbing} alt="professional image" />
                <img src={Mechanic} alt="professional image" />
                <img src={Paint} alt="professional image" />
              </div>
            </section> */}
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px"
          }}>
            <div>
              <button
                  style = {{
                    padding: "10px 70px",
                    borderRadius: ".5rem",
                    color: "white",
                    backgroundColor: "black"
                  }}
                  onClick={() => {setShowModal(true)}}
                >
                  C O N T A C T - M E
              </button>
            </div>
            <dir style = {{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "270px"
            }}>
              <p><FontAwesomeIcon icon={faPhone} style = {{paddingRight: "10px"}}/>{contact}</p>
              <a href = ""><FontAwesomeIcon icon={faLink} style = {{paddingRight: "10px"}}/>@{name}</a>
            </dir>
          </div>

          {showModal && (
              <div
                className="modal fade show"
                style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                tabIndex="-1"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <img src = {image} alt="" style = {{height: "40px", width: "40px", borderRadius: "100%"}}/>
                      <h5 className="modal-title" style = {{paddingLeft: "10px"}}>Message {name}</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={closeModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form action="" onSubmit = {(e) => handleSubmit(e)}>
                        <textarea 
                          name="message" 
                          id="" 
                          rows = "4" 
                          style = {{
                            resize: "none", 
                            width: "100%", 
                            padding: "10px"
                          }} 
                          value = {message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder = {`send ${name} a message to exchange`}></textarea>
                      
                        <button 
                          type="button"
                          style = {{
                            padding: "5px",
                            borderRadius: ".5rem",
                            border: "none",
                            marginBottom: "5px",
                            cursor: "pointer"
                          }}
                          onClick = {() => propositionBtnClick(propositions[0])}
                        >
                          👋 Hey {name} A, can you help me with 
                        </button>
                        <button 
                          type="button"
                          style = {{
                            padding: "5px",
                            borderRadius: ".5rem",
                            border: "none",
                            marginBottom: "5px",
                            cursor: "pointer"
                          }}
                          onClick = {() => propositionBtnClick(propositions[1])}
                        >
                          Need you it's urgent, are you available? 
                        </button>
                        <button 
                          type="button"
                          style = {{
                            padding: "5px",
                            borderRadius: ".5rem",
                            border: "none",
                            marginBottom: "5px",
                            cursor: "pointer"
                          }}
                          onClick = {() => propositionBtnClick(propositions[2])}
                        >
                          can you fix anything related to {service}?
                        </button>
                        <div>
                          <button 
                            type= "submit" 
                            className="btn btn-primary"
                          >
                            Send message
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      {/* <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={closeModal}
                      >
                        Close
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default ProfessionalProfilePage;
