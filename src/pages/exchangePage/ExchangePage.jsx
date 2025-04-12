import React, { useState } from "react";
import Footer from "../../components/Footer";
import "./ExchangePage.css";

function ExchangePage({ isLoggedIn, user, userType, messages }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [message_, setMessage_] = useState("");
  const [intendedReceiver, setIntendedReceiver] = useState("");
  const [professionalAgreed, setProfessionalAgreed] = useState(false); 

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const itemStyle = (index) => ({
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
    <div key={index} className="border rounded p-3 mb-2">
      <h6 className="text-primary">From {element.sender}</h6>
      <p className="mb-0">{element.message}</p>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message_.trim()) {
      alert("Error: Message cannot be empty!");
      return;
    }
    if (isLoggedIn) {
      const messages = JSON.parse(localStorage.getItem("messages")) || [];
      const newMessage = {
        sender: user,
        receiver: intendedReceiver,
        message: message_,
      };
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));
      alert(`Message sent to ${intendedReceiver}`);
      setMessage_("");
    } else {
      alert("Error: Message not sent. Please log in.");
    }
  };

  const handleProfessionalAgree = () => {
    setProfessionalAgreed(true);
    alert("You have agreed to proceed!");
  };

  return (
    <>
      <div
        className="container mb-5 pb-5 mt-5"
        style={{ minHeight: "calc(100vh - 150px)" }}
      >
        <h3>Chats</h3>
        <p>Communicate with professionals and clients here</p>
        <div className="d-flex justify-content-start align-items-center gap-3 mb-4">
          <div className="d-flex align-items-center gap-2">
            <div className="badge bg-primary rounded-circle p-2 message-indicators">
              {userMessages.length}
            </div>
            <p className="mb-0 message-indicators">Messages</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="badge bg-primary rounded-circle p-2 message-unread">
              {unReadMessagesCount}
            </div>
            <p className="mb-0 message-unread">Unread</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="badge bg-primary rounded-circle p-2 message-indicators">
              {readMessagesCount}
            </div>
            <p className="mb-0 message-indicators">Read</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <div
              className="overflow-auto border border-primary rounded main-message"
              style={{ height: "600px" }}
            >
              {userMessages.map((message, index) => (
                <div
                  key={index}
                  className="border rounded p-3 mb-2"
                  style={itemStyle(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(message.sender, message.receiver)}
                >
                  <h6 className="text-primary">From {message.sender}</h6>
                  <p className="mb-0">{message.message}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="border rounded p-3 mb-3 border border-primary rounded"
              style={{ height: "65%", overflowY: "auto" }}
            >
              {isLoggedIn && ExchangeElement}
            </div>

            <form onSubmit={handleSubmit}>
              <textarea
                name="message_"
                rows="4"
                className="form-control mb-3 message-input"
                style={{ resize: "none" }}
                placeholder="Type your message here..."
                value={message_}
                onChange={(e) => setMessage_(e.target.value)}
              ></textarea>
              <button type="submit" className="btn btn-join px-4 py-2 me-2">
                Send <i className="bi bi-send"></i>
              </button>
            </form>

            {/* Confirmation Section - Only for professionals */}
            {userType === "provider" && (
              <div className="mt-4 p-3 pd-5 text-center confirmation-box">
                <p className="text-center">
                  Do you agree to proceed with this professional?
                </p>
                <div className="d-flex gap-3 pd-5 justify-content-center">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setProfessionalAgreed(true);
                      console.log("Professional agreed!");
                      alert("You have agreed to proceed!");
                    }}
                  >
                    Agree
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => alert("You have declined to proceed!")}
                  >
                    Decline
                  </button>
                </div>
              </div>
            )}

            {userType !== "provider" && professionalAgreed && (
              <div className="mt-4 p-3 text-center bg-success text-white rounded">
                <p>The professional has agreed to proceed!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <Footer />
      </div>
    </>
  );
}

export default ExchangePage;
