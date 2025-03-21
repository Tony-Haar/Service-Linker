import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../../assets/Logo.png";
import "./authPage.css";
import Footer from "../../components/Footer";



function AuthPage({ setIsLoggedIn }) {
  let { page } = useParams();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      setError('Username already taken!');
      return;
    }

    // Check if passwords match
    if (password !== rePassword) {
      setError('Passwords do not match!');
      return;
    }

    // Add new user to the users array
    const userType = "needer"
    const newUser = { username, password, userType};
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setError('');
    alert('User created successfully!');
    navigate('/auth/signin'); // Redirect to sign-in page
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user by username
    const user = users.find(user => user.username === username);
    if (!user) {
      setError('User not found!');
      return;
    }

    // Check if password matches
    if (user.password !== password) {
      setError('Incorrect password!');
      return;
    }

    setError('');
    alert('Login successful!');
	  setIsLoggedIn(true);
    navigate('/home'); // Redirect to home page after successful login
  };


  const footerStyle = {
    width: "100%",
    height: "85px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: page === "signin" ? "#1f78b4ff" : "#023d7bff",
    color: "white",
  };

  const buttonBaseStyle = {
    padding: "10px 30px",
    cursor: "pointer",
    marginBottom: "10px",
    backgroundColor: page === "signin" ? "#1f78b4ff" : "#023d7bff",
    borderColor: page === "signin" ? "#1f78b4ff" : "#023d7bff",
    borderStyle: "solid",
    color: "white",
  };

  const buttonHoverStyle = {
    backgroundColor: "white",
    color: page === "signin" ? "#1f78b4ff" : "#023d7bff",
  };

  return (
    <>
      <div className="vh-100 bg-secondary d-flex justify-content-center align-items-center">
        <div className="auth-container bg-light w-50 p-4 rounded shadow">
          <div className="row align-items-center w-100">
            <div className="col">
              <img
                className="logo img-fluid"
                src={Logo}
                alt="LOGO"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
            <div className="col text-end">
              <Link to="/home">
                <i
                  className="bi bi-house"
                  style={{
                    fontSize: "30px",
                    color: page === "signin" ? "#1f78b4ff" : "#023d7bff",
                  }}
                ></i>
              </Link>
            </div>
          </div>

          {page === "signin" ? (
            <h4 className="text-center">Sign In</h4>
          ) : (
            <h4 className="text-center">Sign up</h4>
          )}

          <div
            className="hr hr-1"
            style={
              page === "signin"
                ? { backgroundColor: "#1f78b4ff", borderColor: "#1f78b4ff" }
                : { backgroundColor: "#023d7bff", borderColor: "#023d7bff" }
            }
          ></div>

          <form 
            className="sign-in-form w-100"
            onSubmit={(e) => {
              e.preventDefault();
              page === "signin" ? handleLogin() : handleSignUp();
            }}
          >
            <label>Email</label>
            <br />
            <input 
              type="email" 
              className="form-control"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input 
              type="password" 
              className="form-control" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {page === "signup" && (
              <>
                <label>Re-enter Password</label>
                <br />
                <input 
                  type="password" 
                  className="form-control"
                  value={rePassword} 
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <br />
              </>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {page === "signin" ? (
              <p>
                By creating an account you agree to our
                <br />
                <a href="">Privacy</a> and <a href="">Terms.</a>
              </p>
            ) : (
              <p>
                <a href="">Forgot password?</a>
              </p>
            )}
            <div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={
                  isHovered
                    ? { ...buttonBaseStyle, ...buttonHoverStyle }
                    : buttonBaseStyle
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {page === "signin" ? "SIGN IN" : "SIGN UP"}
              </button>
            </div>
          </form>

          <div
            className="hr"
            style={
              page === "signin"
                ? { backgroundColor: "#1f78b4ff", borderColor: "#1f78b4ff" }
                : { backgroundColor: "#023d7bff", borderColor: "#023d7bff" }
            }
          ></div>

          {page === "signin" ? (
            <p>
              New to the platform? <a href="/auth/signup">Create an account</a>
            </p>
          ) : (
            <p>
              Already have an account? <a href="/auth/signin">Sign in here</a>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
