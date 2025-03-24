import React, {useState} from "react";

import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPhone, faLink } from "@fortawesome/free-solid-svg-icons";

import "./professionalProfilePage.css";
import Profile from "../../assets/profile.jpeg";
import Paint from "../../assets/painting.png";
import Mechanic from "../../assets/mechanic.png";
import Plumbing from "../../assets/plumbing.png";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



function ProfessionalProfilePage() {
  const location = useLocation();
  const {name, experience, service, image, about, contact, expertise} = location.state || {}

  const [showModal, setShowModal] = useState(false);


  const expertiseElement = expertise.map((skill) => ( 
    <p className="expertise">{skill}</p>
  ))

  const closeModal = () => {
    setShowModal(false);
  };

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
                      <form action="">
                        <textarea name="" id="" style = {{resize: "none", width: "100%", padding: "10px"}} placeholder = {`send ${name} a message to exchange`}></textarea>
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
                      <Link to="/user-chat">
                        <button type="button" className="btn btn-primary">
                          Send message
                        </button>
                      </Link>
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
