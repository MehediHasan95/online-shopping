import React, { useState } from "react";
import { db } from "../LogIn/firebase.config";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    db.collection("Contact")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Thank you for your response");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    // <div className="Contact d-flex justify-content-center align-items-center">
    //   <div className="contact-area">
    //     <h2>feed Back</h2>
    //     <input type="email" placeholder="Email" />
    //     <br />
    //     <textarea placeholder="Message"></textarea>
    //     <br />
    //     <input type="submit" value="SEND" className="feedbackButton" />
    //   </div>
    // </div>
    <div className="Contact d-flex justify-content-center align-items-center">
      <div className="contact-area">
        <form onSubmit={handleFormSubmit}>
          <h1 className="feedback">CONTACT US</h1>
          <br />
          <input
            type="text"
            className="input-area"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            className="input-area"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            type="text"
            className="textarea-area"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="SEND" className="feedBackBtn" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
