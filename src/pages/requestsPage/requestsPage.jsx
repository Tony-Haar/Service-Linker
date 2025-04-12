import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import RequestsData from "../../db/requests";
import Footer from "../../components/Footer";



const RequestPage = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4">People in Need</h2>
        <Row>
          {RequestsData.map((req) => (
            <Col md={4} key={req.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>{req.request}</Card.Title>
                  <Card.Text>
                    <strong>Urgency:</strong> {req.urgency} <br />
                    <strong>From:</strong> {req.username} <br />
                  </Card.Text>
                  <Button variant="primary">Contact</Button>
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

export default RequestPage;