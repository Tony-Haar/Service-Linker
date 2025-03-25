import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";

function ExchangePage({ isLoggedIn, user, userType, messages }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [message_, setMessage_] = useState("");
  const [intendedReceiver, setIntendedReceiver] = useState("");

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

  let userMessages = [];
  if (isLoggedIn && user !== "") {
    if (userType === "provider") {
      userMessages = messages.filter((message) => message.receiver === user);
    } else {
      userMessages = messages.filter((message) => message.sender === user);
    }
  } else {
    userMessages = [];
  }

  const MessageCount = () => {
    let read = userMessages.length;
    if (read > 8) {
      read = Math.floor(read / 2) + Math.floor(Math.floor(read / 2) / 2);
    }
    return read;
  };
  const readMessagesCount = MessageCount();
  const unReadMessagesCount = userMessages.length - readMessagesCount;

  const [exchanges, setExchanges] = useState([]);

  const handleClick = (sender, receiver) => {
    const filteredMessages = messages.filter((message) => {
      const validPersons = [sender, receiver];
      return (
        validPersons.includes(message.sender) &&
        validPersons.includes(message.receiver)
      );
    });
    setExchanges(filteredMessages);
    if (userType === "provider") {
      setIntendedReceiver(sender);
    } else {
      setIntendedReceiver(receiver);
    }
  };

  const ExchangeElement = exchanges.map((element, index) => (
    <div
      key={index}
      style={{
        textDecoration: "none",
        color: "black",
        border: "1px solid gray",
        borderRadius: ".25rem",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <h6 style={{ color: "#0c5cd4" }}>From {element.sender}</h6>
      <p style={{ marginBottom: "0px" }}>{element.message}</p>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      const messages = JSON.parse(localStorage.getItem("messages")) || [];
      const newMessage = {
        sender: user,
        receiver: intendedReceiver,
        message: message_,
      };
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));
      alert(`message send to ${intendedReceiver}`);
    } else {
      alert(`Error: message not send`);
    }
  };

  return (
    <>
      <h3 style={{ padding: "50px 0 0 50px" }}>Chat</h3>
      <p style={{ paddingLeft: "50px" }}>
        communicate with professionals and clients here
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "20px",
          marginLeft: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              height: "28px",
              backgroundColor: "#0c5cd4",
              width: "28px",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {userMessages.length}
          </div>
          <p style={{ marginBottom: "0" }}>Messages</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              height: "28px",
              backgroundColor: "#0c5cd4",
              width: "28px",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {unReadMessagesCount}
          </div>
          <p style={{ marginBottom: "0" }}>Unread</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              height: "28px",
              backgroundColor: "#0c5cd4",
              width: "28px",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {readMessagesCount}
          </div>
          <p style={{ marginBottom: "0" }}>Read</p>
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
            {userMessages.map((message, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={itemStyle(index)}
                onClick={() => handleClick(message.sender, message.receiver)}
              >
                <h6 style={{ color: "#0c5cd4" }}>From {message.sender}</h6>
                <p style={{ marginBottom: "0px" }}>{message.message}</p>
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
            {isLoggedIn && ExchangeElement}
          </div>
          <form
            action=""
            style={{ width: "100%", height: "35%", paddingTop: "20px" }}
            onSubmit={handleSubmit}
          >
            <textarea
              name="message_"
              id=""
              rows="4"
              style={{ width: "100%", resize: "none", padding: "10px" }}
              value={message_}
              onChange={(e) => setMessage_(e.target.value)}
            ></textarea>
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
