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

function AuthPage({ setIsLoggedIn, setUsername_ }) {
  let { page } = useParams();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      setError("Username already taken!");
      return;
    }

    if (password !== rePassword) {
      setError("Passwords do not match!");
      return;
    }

    const userType = "needer";
    const newUser = { username, password, userType };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    alert("User created successfully!");
    navigate("/auth/signin");
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.username === username);
    if (!user) {
      setError("User not found!");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password!");
      return;
    }

    const userData = {
      username: username,
      password: password,
    };

    setError("");
    alert("Login successful!");
    setIsLoggedIn(true);
    setUsername_(username);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    navigate("/home");
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
                {page === "signin" ? (
                  <h4 className="text-center">Sign In</h4>
                ) : (
                  <h4 className="text-center">Sign up</h4>
                )}

                <div
                  className="hr hr-1"
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

                {page === "signin" ? (
                  <p>
                    New to the platform?{" "}
                    <a href="/auth/signup">Create an account</a>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <a href="/auth/signin">Sign in here</a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
