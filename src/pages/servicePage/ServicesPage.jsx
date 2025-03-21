import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { services } from "../../assets/assets";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const ServicesPage = () => {

  return (
    <>
      {/* <Navbar /> */}

      <Container className="mt-5 w-75">
        <h2 className="text-center mb-4">Our Repair Services</h2>
        <Row>
          {services.map((service) => (
            <Col md={4} key={service.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <Link to="/professionals">
              <Button variant="primary" className="mt-5 mb-5 d-block mx-auto">
                Find a Professional
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ServicesPage;
