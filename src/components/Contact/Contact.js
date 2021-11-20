import React, { useState } from "react";
import { db } from "../LogIn/firebase.config";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    db.collection("Contact")
      .add({
        name: name,
        email: email,
      })
      .then(() => {
        alert("Thank you");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
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
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Contact us</h1>
        <label htmlFor="text">Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
