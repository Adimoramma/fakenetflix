   import React, { useState } from "react";
import "../Styles/ContactUs.css";

 function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Feedback submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback about this demo project, please use the form below:</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Feedback"
          rows="5"
          required
        />

        <button type="submit">Submit </button>
      </form>

      <p className="contact-info">
        Or email us directly: <a href="mailto:theresadiala1@gmail.com">Email-Us</a>
      </p>
    </div>
  );
}


export default ContactUs
