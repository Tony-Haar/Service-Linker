

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BookingPage = () => {
  const location = useLocation();
  const { service } = location.state;
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get("name")) errors.name = "Name is required";
    if (!formData.get("email")) errors.email = "Email is required";
    if (!formData.get("phone")) errors.phone = "Phone is required";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const bookingDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: service.name,
    };
    console.log("Booking submitted:", bookingDetails);


    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

    setBookingSuccess(true);
  };

  return (
    <>
      <Container className="mt-5 w-50 mb-5">
        <h2 className="text-center mb-4">Book {service.name}</h2>
        {bookingSuccess && (
          <Alert variant="success" className="text-center">
            Booking successful! We will contact you soon.
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              isInvalid={!!formErrors.name}
              required
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              isInvalid={!!formErrors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              isInvalid={!!formErrors.phone}
              required
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default BookingPage;














