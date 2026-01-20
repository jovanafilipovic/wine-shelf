import { useState } from "react";
import "./Contact.css";
import { TextField, Button } from "@mui/material";

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

          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email"
            className="text-field"
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Message"
            className="text-field"
          />

          <Button variant="contained">Send message</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
