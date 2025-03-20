import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";

const ProfessionalRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    experience: "",
    certifications: "",
    availability: "",
    profileImage: null,
  });


  let { page } = useParams();
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  return (
    <Container-fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-secondary">
      <div className="w-50 p-4 shadow-sm bg-white rounded text-center">
        <div className="d-flex justify-content-between align-items-center w-100 mb-3">
          <img src={assets.Logo} alt="Logo" style={{ height: "80px" }} />
          <FaHome
            size={30}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div
          className="hr hr-1 mb-5 w-100"
          style={
            page === "signin"
              ? { backgroundColor: "#1f78b4ff", borderColor: "#1f78b4ff" }
              : { backgroundColor: "#023d7bff", borderColor: "#023d7bff" }
          }
        ></div>

        {step === 1 && (
          <>
            <h4>Personal Information</h4>
            <Form>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3  text-start">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button onClick={handleNext} className="text-center">
                Next
              </Button>
            </Form>
          </>
        )}

        {step === 2 && (
          <>
            <h4>Professional Details</h4>
            <Form>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Service Offered</Form.Label>
                <Form.Control
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Experience (Years)</Form.Label>
                <Form.Control
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button onClick={handleBack} className="me-2 text-center">
                Back
              </Button>
              <Button onClick={handleNext} className="text-center">
                Next
              </Button>
            </Form>
          </>
        )}

        {step === 3 && (
          <>
            <h4>Upload Profile</h4>
            <Form>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Certifications</Form.Label>
                <Form.Control
                  type="text"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Availability</Form.Label>
                <Form.Control
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              <Button onClick={handleBack} className="me-2 text-center">
                Back
              </Button>
              <Button variant="success" className="text-center">
                Submit
              </Button>
            </Form>
          </>
        )}
      </div>
    </Container-fluid>
  );
};

export default ProfessionalRegistration;
