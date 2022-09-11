import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h3 className="heading-contact-info">Contact information</h3>
        <div className="contact-info-text">
          <p>Phone: +381 63 666 999</p>
          <p>Email: wineshelf.rs@gmail.com</p>
        </div>
      </div>
      <form onSubmit={sendMessage}>
        <div className="contact-us-form">
          <h2 className="heading-contact">Contact Us</h2>
          <div className="form-group-contact">
            <label htmlFor="firstName">First name:</label>
            <input
              id="first-name"
              type="text"
              name="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="form-group-contact">
            <label htmlFor="lastName">Last name:</label>
            <input
              id="last-name"
              type="text"
              name="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="form-group-contact">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group-contact">
            <label htmlFor="message">Message: </label>
            <textarea
              className="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="button-area">
            <input
              className="send-button"
              type="submit"
              value="Send message"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
