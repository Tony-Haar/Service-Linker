import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const ProfessionalChats = ({ messages, sendMessage }) => {
  const [input, setInput] = useState("");
  const [selectedSender, setSelectedSender] = useState(null);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage("Professional", input);
      setInput("");
    }
  };

  const handleSenderClick = (sender) => {
    setSelectedSender(sender);
  };

  const filteredMessages = selectedSender
    ? messages.filter(
        (msg) => msg.sender === selectedSender || msg.sender === "Professional"
      )
    : [];

  const uniqueSenders = [...new Set(messages.map((msg) => msg.sender))].filter(
    (sender) => sender !== "Professional"
  );

  return (
    <>
      <div className="d-flex justify-content-center mb-5 mt-5">
        <Link to="/user-chat">
          <button className="btn btn-primary me-2">User Chat</button>
        </Link>
        <Link to="/professional-chat">
          <button className="btn btn-secondary">Professional Chat</button>
        </Link>
      </div>

      <div className="container d-flex flex-column flex-md-row justify-content-center">
        <div className="sidebar p-4 rounded mb-4 mb-md-0 vh-100 border border-secondary bg-info">
          <div className="sidebarTitle">
            <h1 className="text-primary">Professional Chat</h1>
            <div className="border p-2 h-64 overflow-y-auto bg-white rounded m-2">
              {uniqueSenders.map((sender, index) => (
                <div key={index} className="mb-2">
                  <strong
                    onClick={() => handleSenderClick(sender)}
                    style={{ cursor: "pointer", color: "#007bff" }}
                  >
                    {sender}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mainScreen p-4 rounded vh-100 border border-secondary flex-grow-1 d-flex flex-column bg-success">
          <div className="border p-4 h-64 overflow-y-auto bg-white rounded mb-4">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    msg.sender === "User"
                      ? "bg-primary text-white ms-auto"
                      : "bg-secondary text-white me-auto"
                  }`}
                  style={{ maxWidth: "95%", wordBreak: "break-word" }}
                >
                  {msg.text}
                </div>
              ))
            ) : (
              <div className="text-center text-muted">
                Select a sender to view messages
              </div>
            )}
          </div>

         

          <div className="mt-auto w-100">
            <div className="d-flex w-100">
              <input
                type="text"
                className="form-control me-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Professional message"
              />
              <button className="btn btn-primary" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalChats;

