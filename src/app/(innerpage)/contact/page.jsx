"use client";
import React, { useState, useEffect } from 'react';
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
  const [ripples, setRipples] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
    
    // Reset form after 3 seconds
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

  const createRipple = (e) => {
    const rect = e.target.getBoundingClientRect();
    const size = 100;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

    return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="hero-content">
            <div className="clinic-video">
              <Image
                src="/assets/img/about_img_1.jpg"
                alt="Clinica Fai Interior"
                width={800}
                height={600}
                className="clinic-image"
              />
              <div className="video-overlay">
                <div className="ambient-text">
                  <h2>Welcome to Our World</h2>
                  <p>Where every detail speaks of excellence</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-panel">
              <div className="form-header">
                <h1 className="form-title">We'd Love to Hear from You</h1>
                <p className="form-subtitle">Booking, queries, or just saying hi – we're always here.</p>
              </div>

              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder=" "
                      />
                      <label className="floating-label">Your Name</label>
                    </div>
                    
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder=" "
                      />
                      <label className="floating-label">Email Address</label>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="input-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder=" "
                      />
                      <label className="floating-label">Phone Number</label>
                    </div>
                    
                    <div className="input-group">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="form-input form-select"
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
                  </div>

                  <div className="input-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-input form-textarea"
                      placeholder=" "
                      rows="4"
                    ></textarea>
                    <label className="floating-label">Your Message</label>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    onClick={createRipple}
                  >
                    <span>Send Message</span>
                    {ripples.map(ripple => (
                      <span
                        key={ripple.id}
                        className="ripple"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          width: ripple.size,
                          height: ripple.size
                        }}
                      />
                    ))}
                  </button>
                </form>
              ) : (
                <div className="thank-you-message">
                  <div className="success-animation">
                    <div className="golden-sparkles">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className={`sparkle sparkle-${i}`}>✨</div>
                      ))}
                    </div>
                    <h3>Thank You!</h3>
                    <p>We'll get back to you within 24 hours, beautiful.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="golden-arrow"></div>
          <span className="scroll-text">Get in Touch</span>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2 className="section-title">Visit Our Clinic</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>123 Beauty Street, Aesthetic District<br />New Delhi, India 110001</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 98765 43210<br />+91 11 2345 6789</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>hello@clinicafai.com<br />appointments@clinicafai.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-text">
                  <h4>Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="stats-section">
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
              </div>

              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>

            <div className="map-section">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8944721743!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635789876543!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="map-overlay">
                  <div className="clinic-marker">
                    <div className="marker-pulse"></div>
                    <span>📍 Clinica Fai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <div className="whatsapp-icon">💬</div>
          <span className="whatsapp-text">Chat with us</span>
        </a>
      </div>

      <style jsx>{`
        .contact-page {
          background: #0F0F0F;
          color: #FDFDFD;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          width: 100%;
          height: 100%;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100%;
        }

        .clinic-video {
          position: relative;
          overflow: hidden;
        }

        .clinic-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(15, 15, 15, 0.7), rgba(212, 175, 55, 0.3));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ambient-text {
          text-align: center;
          color: #FDFDFD;
        }

        .ambient-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          margin-bottom: 10px;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        .ambient-text p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .contact-form-panel {
          background: #0F0F0F;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header {
          margin-bottom: 40px;
          text-align: center;
        }

        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #D4AF37;
        }

        .form-subtitle {
          font-size: 1.1rem;
          color: #E8DCCA;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .input-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          background: rgba(212, 175, 55, 0.05);
          border: 2px solid rgba(212, 175, 55, 0.2);
          border-radius: 10px;
          padding: 15px;
          color: #FDFDFD;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #D4AF37;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .form-input:invalid {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .floating-label {
          position: absolute;
          left: 15px;
          top: 15px;
          color: #E8DCCA;
          transition: all 0.3s ease;
          pointer-events: none;
          font-size: 1rem;
        }

        .form-input:focus + .floating-label,
        .form-input:not(:placeholder-shown) + .floating-label {
          top: -10px;
          left: 10px;
          font-size: 0.8rem;
          color: #D4AF37;
          background: #0F0F0F;
          padding: 0 5px;
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23D4AF37' viewBox='0 0 16 16'%3e%3cpath d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 15px center;
          background-size: 16px;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-button {
          position: relative;
          background: linear-gradient(135deg, #D4AF37, #F4E4A6);
          color: #0F0F0F;
          border: none;
          padding: 18px 40px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          margin-top: 20px;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: rippleEffect 1s ease-out;
          pointer-events: none;
        }

        @keyframes rippleEffect {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .thank-you-message {
          text-align: center;
          padding: 60px 20px;
        }

        .success-animation {
          position: relative;
        }

        .golden-sparkles {
          position: relative;
          margin-bottom: 30px;
        }

        .sparkle {
          position: absolute;
          font-size: 1.5rem;
          animation: sparkleFloat 3s ease-in-out infinite;
        }

        .sparkle-0 { top: -20px; left: 10%; animation-delay: 0s; }
        .sparkle-1 { top: -10px; right: 15%; animation-delay: 0.2s; }
        .sparkle-2 { bottom: 10px; left: 20%; animation-delay: 0.4s; }
        .sparkle-3 { bottom: 20px; right: 10%; animation-delay: 0.6s; }

        @keyframes sparkleFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .thank-you-message h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .thank-you-message p {
          font-size: 1.2rem;
          color: #E8DCCA;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: #D4AF37;
        }

        .golden-arrow {
          width: 2px;
          height: 40px;
          background: #D4AF37;
          margin: 0 auto 10px;
          animation: bounce 2s infinite;
        }

        .scroll-text {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* Contact Info Section */
        .contact-info-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0F0F0F 0%, #1a1a1a 100%);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 40px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(212, 175, 55, 0.1);
          transform: translateX(10px);
        }

        .contact-icon {
          font-size: 2rem;
          min-width: 50px;
        }

        .contact-text h4 {
          color: #D4AF37;
          margin-bottom: 8px;
          font-size: 1.2rem;
        }

        .contact-text p {
          color: #E8DCCA;
          line-height: 1.6;
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 40px 0;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 10px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 5px;
        }

        .stat-label {
          color: #E8DCCA;
          font-size: 0.9rem;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #D4AF37;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }

        .map-container {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.2);
        }

        .map-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(15, 15, 15, 0.8);
          padding: 10px 15px;
          border-radius: 25px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .clinic-marker {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #D4AF37;
          font-size: 0.9rem;
        }

        .marker-pulse {
          width: 8px;
          height: 8px;
          background: #D4AF37;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        /* WhatsApp Float */
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
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 5px 20px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
        }

        .whatsapp-float a:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-icon {
          font-size: 1.5rem;
          margin-right: 10px;
        }

        .whatsapp-text {
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
          }
          
          .clinic-video {
            height: 50vh;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .stats-section {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form-panel {
            padding: 40px 20px;
          }
          
          .form-title {
            font-size: 2rem;
          }
          
          .ambient-text h2 {
            font-size: 2rem;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
          }
          
          .whatsapp-text {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}