import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import "./registrationForm.css";
import { professionals } from '../../assets/assets'


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
    video: null,
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
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  /* const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
    }
  }; */

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
    if(formData.password != formData.confirmPassword) {
      setError("password and re-password do not match.")
      setLoading(false);
      return
    }
    
    try {
      // Prepare form data without password, confirmPassword in it
      const { password, confirmPassword, ...formDataWithoutPasswords } = formData;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      console.log(users)
      // Check if the username already exists
      const userExists = users.some(user => user.username === formData.email);
      if (userExists) {
        setError('Username already taken!');
        setLoading(false);
        return;
      }

      // Add new user to the users array
      const userType = "provider";
      const username = formData.email;
      const newUser = { username, password, userType};
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));


      navigate("/home");
    } catch(err) {
      setError("An error occured. Please try again");
      console.log(err)
    }
  }

  return (
    <>
      <div className="registration-form-container">
        <div className="registration-page-logo">
          <img src={Logo} alt="Registration Page Logo" />
        </div>
        <div className="registration-main-container">
          <div className="card">
            <div className="card-body">
              <div className="card-body-header">
                {page === 1 && (
                  <>
                    <h2>Create Professional Account</h2>
                  </>
                )}

                {page === 2 && (
                  <>
                    <h2>Profile</h2>
                  </>
                )}

                {page === 3 && (
                  <>
                    <h2>Experience</h2>
                  </>
                )}

                {page === 4 && (
                  <>
                    <h2>Video</h2>
                  </>
                )}

                {page === 5 && (
                  <>
                    <h2>Create Password</h2>
                  </>
                )}
              </div>
              <div className="card-body-content">
                {page === 1 && (
                  <div>
                    <div className="input-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name = "email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group">
                      <label>Locatin</label>
                      <input
                        type="text"
                        name = "location"
                        placeholder="Enter your location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group">
                      <label>Domain</label>
                      <input
                        type="text"
                        name = "domain"
                        placeholder="Enter your domain"
                        value={formData.domain}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {page === 2 && (
                  <div>
                    <div className="input-group">
                      <label>About</label>
                      <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="Enter something about yourself"
                      ></textarea>
                    </div>
                    <div className="input-group">
                      <label>Title</label>
                      <input
                        type="text"
                        name = "title"
                        placeholder="Enter your title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group">
                      <label>Years Of Experience</label>
                      <select
                        name = "yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                        className="about-us-form-input"
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
                    <div className="input-group">
                      <label>Worked At</label>
                      <input
                        type="text"
                        name = "workedAt"
                        placeholder="Enter your city"
                        value={formData.workedAt}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group">
                      <label>Duration</label>
                      <select
                        name = "duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="about-us-form-input"
                      >
                        <option value="">Select Duration</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Title</label>
                      <input
                        type="text"
                        name = "title"
                        placeholder="Enter your previous title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {page === 4 && (
                  <div>
                    <div className="input-group">
                      <label>Upload Your Videos</label>
                      <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}

                {page === 5 && (
                  <div>
                    {/* <div className="input-group">
                      <label>Submit</label>
                    </div> */}
                    <div className="input-group">
                      <label>password</label>
                      <input
                        type="password"
                        name = "password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-group">
                      <label>re-password</label>
                      <input
                        type="password"
                        name = "confirmPassword"
                        placeholder="Re-enter password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                {loading && <p className="loading">Loading...</p>}
              </div>
              <div className="card-body-footer">
                {page > 1 && <button onClick={prevPage}>Previous</button>}
                {page < 5 && <button onClick={nextPage}>Next</button>}
                {page === 5 && <button onClick={handleSubmit}>Submit</button>}
              </div>
            </div>
          </div>

          <div className="card-image">
            <img src={Profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
