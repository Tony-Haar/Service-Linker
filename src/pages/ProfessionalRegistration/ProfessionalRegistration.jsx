import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { assets } from "../../assets/assets";



const ProfessionalRegistration = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    domain: "",
    about: "",
    title: "",
    yearsOfExperience: "",
    workedAt: "",
    duration: "",
    profileImage: null,
    video: null,
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }
    
    try {
      // Prepare form data for submission
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      console.log(formDataToSend);
    } catch(err) {
      setError("An error occured. Please try again");
    }
  }

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <Card className="w-50 p-4 shadow-sm bg-white rounded text-center">
        <div className="d-flex justify-content-between align-items-center w-100 mb-3">
          <img src={assets.Logo} alt="Logo" style={{ height: "80px" }} />
          <FaHome
            size={30}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <h4>
          {page === 1
            ? "Create Professional Account"
            : page === 2
            ? "Profile"
            : page === 3
            ? "Experience"
            : page === 4
            ? "Upload Video"
            : "Create Password"}
        </h4>

        <Form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Domain</Form.Label>
                <Form.Control
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}

          {page === 2 && (
            <>
              <Form.Group className="mb-3 text-start">
                <Form.Label>About</Form.Label>
                <Form.Control
                  as="textarea"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Years Of Experience</Form.Label>
                <Form.Select
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                >
                  <option value="">Select years of experience</option>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                  <option value="4 years">4 years</option>
                  <option value="5 years">5 years</option>
                </Form.Select>
              </Form.Group>
            </>
          )}

          {page === 3 && (
            <>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Worked At</Form.Label>
                <Form.Control
                  type="text"
                  name="workedAt"
                  value={formData.workedAt}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Duration</Form.Label>
                <Form.Select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                >
                  <option value="">Select Duration</option>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                  <option value="4 years">4 years</option>
                  <option value="5 years">5 years</option>
                </Form.Select>
              </Form.Group>
            </>
          )}

          {page === 4 && (
            <>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Upload Your Video</Form.Label>
                <Form.Control
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </>
          )}

          {page === 5 && (
            <>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}
        </Form>

        {/* <div className="mt-4 d-flex justify-content-between">
          {page > 1 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          {page < 5 && (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {page === 5 && <Button type = "submit" variant="success">Submit</Button>}
        </div> */}
      </Card>
    </Container>
  );
};

export default ProfessionalRegistration;