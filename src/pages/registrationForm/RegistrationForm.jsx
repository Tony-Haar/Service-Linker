import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import "./registrationForm.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 

const RegistrationForm = () => {
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
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    if (formData.password !== formData.confirmPassword) {
      setError("Password and confirm password do not match.");
      setLoading(false);
      return;
    }

    try {
      const { password, confirmPassword, ...formDataWithoutPasswords } =
        formData;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.username === formData.email);
      if (userExists) {
        setError("Username already taken!");
        setLoading(false);
        return;
      }

      const userType = "provider";
      const username = formData.email;
      const newUser = { username, password, userType };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      navigate("/home");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center bg-secondary">
      <div className="row justify-content-center w-100 mb-5 container mx-auto mt-5 d-flex flex-column align-items-center">
        <div className="col-md-8">
          <div className="card">
            <div className="d-flex container justify-content-between align-items-center my-3 w-100">
              <img src={Logo} alt="Registration Page Logo" className="logo" />
              <i
                className="bi bi-house-fill home-icon"
                onClick={() => navigate("/home")}
              ></i>
            </div>

            <div className="card-body">
              <div className="card-body-header text-center">
                {page === 1 && <h2>Create Professional Account</h2>}
                {page === 2 && <h2>Profile</h2>}
                {page === 3 && <h2>Experience</h2>}
                {page === 4 && <h2>Create Password</h2>}
              </div>
              <div
                className="hr hr-1 mb-5"
                style={
                  page === "signin"
                    ? {
                        backgroundColor: "#1f78b4ff",
                        borderColor: "#1f78b4ff",
                      }
                    : {
                        backgroundColor: "#023d7bff",
                        borderColor: "#023d7bff",
                      }
                }
              ></div>

              <div className="card-body-content">
                {page === 1 && (
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        placeholder="Enter your location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Domain</label>
                      <input
                        type="text"
                        name="domain"
                        className="form-control"
                        placeholder="Enter your domain"
                        value={formData.domain}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {page === 2 && (
                  <div>
                    <div className="mb-3">
                      <label className="form-label">About</label>
                      <textarea
                        name="about"
                        className="form-control"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="Enter something about yourself"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter your title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Years Of Experience</label>
                      <select
                        name="yearsOfExperience"
                        className="form-select"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                      >
                        <option value="">Select years of experience</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                      </select>
                    </div>
                  </div>
                )}

                {page === 3 && (
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Worked At</label>
                      <input
                        type="text"
                        name="workedAt"
                        className="form-control"
                        placeholder="Enter your city"
                        value={formData.workedAt}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Duration</label>
                      <select
                        name="duration"
                        className="form-select"
                        value={formData.duration}
                        onChange={handleChange}
                      >
                        <option value="">Select Duration</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter your previous title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {page === 4 && (
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Re-enter password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
                {loading && <p className="text-info">Loading...</p>}
              </div>
              <div className="card-body-footer d-flex justify-content-between">
                {page > 1 && (
                  <button className="btn btn-secondary" onClick={prevPage}>
                    Previous
                  </button>
                )}
                {page < 4 && (
                  <button className="btn btn-primary" onClick={nextPage}>
                    Next
                  </button>
                )}
                {page === 4 && (
                  <button className="btn btn-success" onClick={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

