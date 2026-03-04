import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // 1. Added the state from form 1 to track submission status
  const [result, setResult] = useState("");

  // 2. Added the Web3Forms logic from form 1
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    // FormData automatically grabs inputs based on their 'name' attribute
    const formData = new FormData(event.target);
    formData.append("access_key", "f058f7b6-22c6-408f-9bf3-e292bc09b2f2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset(); // Clears the form fields
      } else {
        console.error("Error", data);
        setResult("❌ Error submitting form.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("❌ Network error. Please try again.");
    }
  };

  return (
    <div className={`contact-container`} id="contact">
      <div className="shape contact-shape-1"></div>
      <div className="shape contact-shape-2"></div>
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Ready to transform your business? Drop us a message and our team will get back to you shortly.</p>
      </div>

      <div className="contact-content">
        {/* Left Side: Contact Information */}
        <div className="contact-info glass-panel">
          <h3>Contact Information</h3>
          <p className="info-subtext">Fill out the form and our team will get back to you within 24 hours.</p>
          
          <div className="info-details">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>Mumbai, Maharashtra</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>+91 8541078902 | +91 7004819326</p>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p>support@universelogic.in</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-wrapper glass-panel">
          {/* Changed onSubmit handler to match the new logic */}
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              {/* Added name="name", removed React state bindings */}
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              {/* Added name="email" */}
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="john@example.com" 
                required 
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              {/* Added name="message" */}
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                placeholder="How can we help you?" 
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
            
            {/* Added the result message span from form 1 */}
            <span className="form-result" style={{display: 'block', marginTop: '15px', fontWeight: 'bold'}}>
              {result}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;