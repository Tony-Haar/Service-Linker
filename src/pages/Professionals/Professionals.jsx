import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { professionals } from "../../assets/assets";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Professionals = ({ isLoggedIn, username }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { service, option, request } = location.state || {};

  const [selectedService, setSelectedService] = useState(
    service || "Carpentry"
  );

  let requestElements = null;
  if (isLoggedIn) {
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    console.log(requests);
    const userRequests = requests.filter((req) => req.username === username);

    requestElements = userRequests.map((req) => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <p style={{ margin: "0" }}>No - 1</p>
        <p style={{ margin: "0" }}>{req.request}</p>
        <select name="urgency" id="">
          <option value="">level 1</option>
          <option value="">level 2</option>
          <option value="">level 3</option>
        </select>
        <Button>check</Button>
      </div>
    ));
  }

  const handleCardClick = (pro) => {
    navigate("/pro-profile", {
      state: {
        name: pro.name,
        email: pro.email,
        experience: pro.experience,
        service: service,
        image: pro.image,
        about: pro.about,
        contact: pro.contact,
        expertise: pro.expertise
    }});
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        {requestElements}
        <h2 className="text-center mb-4">Find a Professional</h2>

        <Form.Group controlId="serviceSelect" className="mb-4">
          <Form.Label>Select a Service</Form.Label>
          <Form.Select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            {Object.keys(professionals).map((service) => (
              <option key={service} value={service}>
                {service.charAt(0).toUpperCase() + service.slice(1)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Row>
          {professionals[selectedService].map((pro) => (
            <Col md={4} key={pro.id} className="mb-4">
              <Card className="shadow-sm" onClick={() => handleCardClick(pro)}>
                <Card.Img
                  variant="top"
                  src={pro.image}
                  alt={pro.name}
                  className="img-fluid"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{pro.name}</Card.Title>
                  <Card.Text>
                    <strong>Experience:</strong> {pro.experience} <br />
                    <strong>Rating:</strong> ⭐{pro.rating} <br />
                    <strong>Contact:</strong> {pro.contact}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Professionals;

