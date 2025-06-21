"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Get In Touch</h1>
            <p>Ready to begin your transformation journey? We're here to guide you every step of the way.</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">💼</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Contact Form */}
            <div className="form-section">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="acne">Acne Treatment</option>
                      <option value="dark-circles">Dark Circles</option>
                      <option value="skin-hydration">Skin Hydration</option>
                      <option value="chemical-peels">Chemical Peels</option>
                      <option value="plexr">Plexr Treatment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✨</div>
                  <h3>Thank You!</h3>
                  <p>We've received your message and will get back to you within 24 hours.</p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="info-section">
              <h2>Visit Our Clinic</h2>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>123 Beauty Street, Aesthetic District<br />New Delhi, India 110001</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>+91 98765 43210<br />+91 11 2345 6789</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>hello@clinicafai.com<br />appointments@clinicafai.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-content">
                    <h4>Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8944721743!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635789876543!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="whatsapp-float">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <span className="whatsapp-icon">💬</span>
          <span className="whatsapp-text">Chat with us</span>
        </a>
      </div>

      <style jsx>{`
        .contact-page {
          background: #0F0F0F;
          color: #FDFDFD;
          min-height: 100vh;
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          padding: 80px 0;
          text-align: center;
          background: linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%);
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 20px;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .hero-content p {
          font-size: 1.3rem;
          color: #E8DCCA;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Statistics Section */
        .stats-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%);
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .stats-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
          flex: 1;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 8px;
          text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        }

        .stat-label {
          color: #E8DCCA;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex: 1;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          background: rgba(212, 175, 55, 0.1);
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: rgba(212, 175, 55, 0.2);
          border-color: #D4AF37;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }

        /* Main Content */
        .main-content {
          padding: 80px 0;
          background: #0F0F0F;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Form Section */
        .form-section h2 {
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .form-section p {
          color: #E8DCCA;
          font-size: 1.1rem;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          background: rgba(212, 175, 55, 0.05);
          border: 2px solid rgba(212, 175, 55, 0.2);
          border-radius: 10px;
          color: #FDFDFD;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #D4AF37;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #E8DCCA;
          opacity: 0.7;
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23D4AF37' viewBox='0 0 16 16'%3e%3cpath d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 15px center;
          background-size: 16px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #D4AF37, #F4E4A6);
          color: #0F0F0F;
          border: none;
          padding: 18px 40px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
        }

        .success-message {
          text-align: center;
          padding: 60px 20px;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .success-message h3 {
          font-size: 2rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .success-message p {
          color: #E8DCCA;
          font-size: 1.1rem;
        }

        /* Info Section */
        .info-section h2 {
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .contact-info {
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 30px;
          padding: 25px;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: rgba(212, 175, 55, 0.08);
          transform: translateX(5px);
        }

        .info-icon {
          font-size: 2rem;
          min-width: 50px;
          color: #D4AF37;
        }

        .info-content h4 {
          color: #D4AF37;
          font-size: 1.3rem;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .info-content p {
          color: #E8DCCA;
          line-height: 1.6;
          font-size: 1rem;
        }

        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        /* WhatsApp Button */
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
        }

        .whatsapp-float a {
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          padding: 15px 20px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 5px 20px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
        }

        .whatsapp-float a:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-icon {
          font-size: 1.5rem;
          margin-right: 10px;
        }

        .whatsapp-text {
          font-weight: 600;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .stats-grid {
            flex-wrap: wrap;
            gap: 30px;
          }
          
          .stat-item,
          .social-icons {
            flex: 1 1 200px;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .stats-grid {
            flex-direction: column;
            gap: 30px;
          }
          
          .stat-item,
          .social-icons {
            width: 100%;
          }
          
          .social-icons {
            justify-content: center;
          }
          
          .form-section h2,
          .info-section h2 {
            font-size: 2rem;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .whatsapp-text {
            display: none;
          }
          
          .whatsapp-float a {
            padding: 15px;
            border-radius: 50%;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .main-content {
            padding: 60px 0;
          }
        }
      `}</style>
    </div>
  );
}