import React from 'react';
import "./Contactpage.css";

const Contactpage = () => {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <h2>CONTACT ME</h2>
        <p>
          I am available to help you.
          Feel free to reach out to discuss your needs.
          Collaboration is key to achieving great results.
          Let's create something amazing together today.
          Don't hesitate to send a message my way.
        </p>
      </div>
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
