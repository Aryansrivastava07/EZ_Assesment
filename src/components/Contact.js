import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        'https://vernanbackend.ezlab.in/api/contact-us/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: 'Form Submitted'
        });
        
        // Clear the success message after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
          setSubmitStatus(null);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="mandala-decoration">
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contactMandala" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                  <circle cx="150" cy="150" r="120" fill="none" stroke="#f4a89d" strokeWidth="1" opacity="0.4"/>
                  <circle cx="150" cy="150" r="90" fill="none" stroke="#f4a89d" strokeWidth="1" opacity="0.4"/>
                  <circle cx="150" cy="150" r="60" fill="none" stroke="#f4a89d" strokeWidth="1" opacity="0.4"/>
                  {[...Array(16)].map((_, i) => {
                    const angle = (i * 22.5 * Math.PI) / 180;
                    const x1 = 150 + 60 * Math.cos(angle);
                    const y1 = 150 + 60 * Math.sin(angle);
                    const x2 = 150 + 120 * Math.cos(angle);
                    const y2 = 150 + 120 * Math.sin(angle);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f4a89d" strokeWidth="0.8" opacity="0.3"/>;
                  })}
                </pattern>
              </defs>
              <rect width="300" height="300" fill="url(#contactMandala)"/>
            </svg>
          </div>

          <div className="contact-info">
            <h2 className="contact-title">Join the Story</h2>
            <p className="contact-subtitle">Ready to bring your vision to life? Let's talk.</p>
            
            <div className="brand-icons">
              <div className="icon-group">
                <div className="icon icon-film"></div>
                <div className="icon icon-brand"></div>
                <div className="icon icon-art"></div>
              </div>
            </div>

            <div className="contact-details">
              <p className="detail-text">
                Whether you have a story to tell, a brand to build, 
                or a creative vision to bring to life, we're here to listen. 
                Drop us a message and let's begin this journey together.
              </p>
              <div className="contact-links">
                <a href="mailto:info@vfilms.com" className="contact-link">info@vfilms.com</a>
                <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="Tell us about your project..."
                rows="5"
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {submitStatus === 'success' && (
              <div className="success-message">
                ✓ Form Submitted Successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message-box">
                ✗ Something went wrong. Please try again.
              </div>
            )}

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <div className="decorative-border-bottom"></div>
    </section>
  );
};

export default Contact;
