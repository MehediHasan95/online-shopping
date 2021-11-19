import React from "react";
import "./Contact.css";

const Contact = () => {
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
      <form action="">
        <h1>Contact us</h1>
        <label htmlFor="text">Name</label>
        <input type="text" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email" />

        <label htmlFor="">Message</label>
        <textarea placeholder="your message"></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
