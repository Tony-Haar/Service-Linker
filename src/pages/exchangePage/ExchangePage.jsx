import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";



function ExchangePage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null); 

  const itemStyle = (index) => ({
    textDecoration: "none",
    color: "black",
    border: "1px solid gray",
    borderRadius: ".25rem",
    padding: "10px",
    cursor: "pointer",
    transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)", 
    transition: "transform 0.3s ease",
  });

  const messages = [
    "From Ken - plumber",
    "From Ken - plumber",
    "From Ken - plumber",
    "From Ken - plumber",
    "From Ken - plumber",
    "From Ken - plumber",
    "From Ken - plumber",
    "From Ken - plumber",
    "From Ken - plumber",
  ]; 

  return (
    <>
      <h3 style={{ padding: "50px 0 0 50px" }}>Chat</h3>
      <p style={{ paddingLeft: "50px" }}>
        communicate with professionals and clients here
      </p>
      <div style = {{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "20px", marginLeft: "50px"}}>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
            <div style = {{
              height: "28px", 
              backgroundColor: "#0c5cd4", 
              width: "28px", 
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }}>
              10
            </div>
            <p style = {{marginBottom: "0"}}>Messages</p>
          </div>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
            <div style = {{
              height: "28px", 
              backgroundColor: "#0c5cd4", 
              width: "28px", 
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }}>
              6
            </div>
            <p style = {{marginBottom: "0"}}>Unread</p>
          </div>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
            <div style = {{
              height: "28px", 
              backgroundColor: "#0c5cd4", 
              width: "28px", 
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }}>
              4
            </div>
            <p style = {{marginBottom: "0"}}>Read</p>
          </div>
        </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "50px",
        }}
      >
        <div>
          <div
            style={{
              background: "",
              width: "100%",
              height: "600px",
              padding: "0 0 50px 50px",
              overflowY: "auto",
              marginTop: "20px",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index} 
                onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={handleMouseLeave} 
                style={itemStyle(index)} 
              >
                <h6 style={{ color: "#0c5cd4" }}>{message}</h6>
                <p style={{ marginBottom: "0px" }}>
                  Good morning, i saw your request. It is still on the table?
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: "85%",
            height: "auto",
            background: "",
            margin: "20px 50px 0 50px",
            marginRight: "50px",
          }}
        >
          <div
            style={{
              height: "65%",
              overflowY: "auto",
              border: "2px solid #0c5cd4",
              borderRadius: ".25rem",
              padding: "10px",
            }}
          >
            message display box
          </div>
          <form action="" style={{ width: "100%", height: "35%", paddingTop: "20px" }}>
            <textarea name="" id="" rows="4" style={{ width: "100%", resize: "none", padding: "10px" }}></textarea>
            <input
              type="submit"
              value="Send"
              style={{
                padding: "8px 40px",
                backgroundColor: "#0c5cd4",
                cursor: "pointer",
                color: "white",
                border: "1px solid #0c5cd4",
              }}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExchangePage;
