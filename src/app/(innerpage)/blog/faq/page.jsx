"use client";

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  { 
    q: 'What aesthetic treatments does Clinica Fai offer?', 
    a: 'We offer a comprehensive range of non-surgical aesthetic treatments including Botox, dermal fillers, thread lifts, chemical peels, laser treatments, and advanced skincare solutions. All treatments are performed by Dr. Shubhra Goel with the highest safety standards.' 
  },
  {
    q: 'What is Dr. Shubhra Goel\'s background and qualifications?',
    a: 'Dr. Shubhra Goel is a highly qualified medical professional with MBBS from AIIMS New Delhi, MS in Ophthalmology, and specialized fellowship training in Oculoplasty and Aesthetic Medicine. She has over 15 years of experience and has trained at prestigious institutions including AIIMS and international centers.'
  },
  {
    q: 'How long do the results from aesthetic treatments last?',
    a: 'Results vary depending on the treatment type. Botox typically lasts 3-4 months, dermal fillers can last 6-18 months, and thread lifts can provide results for 1-2 years. During consultation, we provide detailed information about expected duration for each specific treatment.'
  },
  {
    q: 'Are the treatments safe and what are the potential side effects?',
    a: 'All our treatments use FDA-approved products and are performed in a sterile, clinical environment. Common side effects are minimal and temporary, such as slight swelling or redness. We conduct thorough consultations to assess your suitability and discuss all potential risks before any procedure.'
  },
  {
    q: 'What should I expect during my first consultation?',
    a: 'Your first visit includes a comprehensive facial assessment, discussion of your aesthetic goals, medical history review, and development of a personalized treatment plan. We take time to explain procedures, expected results, and aftercare. No pressure - you can take time to decide.'
  },
  {
    q: 'How much do treatments cost?',
    a: 'Treatment costs vary based on the specific procedure, amount of product needed, and individual requirements. We provide transparent pricing during consultation with no hidden fees. We also offer flexible payment options and package deals for multiple treatments.'
  },
  {
    q: 'Is there any downtime after treatments?',
    a: 'Most of our treatments require minimal to no downtime. You can typically return to normal activities immediately after Botox or fillers. Some treatments like chemical peels may require a few days of healing. We provide detailed aftercare instructions for optimal results.'
  },
  {
    q: 'How do I prepare for my treatment?',
    a: 'Preparation varies by treatment but generally includes avoiding blood-thinning medications, alcohol, and certain supplements for a few days prior. We provide a comprehensive pre-treatment checklist during your consultation to ensure optimal results and minimize any risks.'
  }
];

const OurFAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our aesthetic treatments and services</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta">
          <h3>Still have questions?</h3>
          <p>We're here to help! Contact us for a personalized consultation.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Book Consultation</button>
            <button className="cta-secondary">Call Now</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-page {
          background: #0A0A0A;
          min-height: 100vh;
          padding-top: 120px;
          color: #FFFFFF;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 50px 30px;
          background: linear-gradient(135deg, #D4AF37 0%, #F4E4A6 100%);
          border-radius: 25px;
          color: #0A0A0A;
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);
        }

        .faq-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #0A0A0A;
        }

        .faq-header p {
          font-size: 1.2rem;
          color: #333333;
          max-width: 600px;
          margin: 0 auto;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 80px;
        }

        .faq-item {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 15px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .faq-item:hover {
          border-color: #D4AF37;
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
          transform: translateY(-2px);
        }

        .faq-item.active {
          background: rgba(212, 175, 55, 0.1);
          border-color: #D4AF37;
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .faq-question h3 {
          margin: 0;
          font-size: 1.2rem;
          color: #FFFFFF;
          font-weight: 600;
          line-height: 1.4;
          flex: 1;
        }

        .faq-icon {
          color: #D4AF37;
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          justify-content: center;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .faq-item.active .faq-icon {
          background: #D4AF37;
          color: #0A0A0A;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
          opacity: 0;
        }

        .faq-answer.show {
          max-height: 300px;
          opacity: 1;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .faq-answer p {
          margin: 0;
          color: #B8B8B8;
          line-height: 1.7;
          font-size: 1rem;
        }

        .contact-cta {
          text-align: center;
          padding: 50px 30px;
          background: linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%);
          border-radius: 25px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .contact-cta h3 {
          font-size: 2rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .contact-cta p {
          font-size: 1.1rem;
          color: #B8B8B8;
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .cta-primary {
          background: #D4AF37;
          color: #0A0A0A;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary:hover {
          background: #F4E4A6;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
        }

        .cta-secondary {
          background: transparent;
          color: #D4AF37;
          border: 2px solid #D4AF37;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: #D4AF37;
          color: #0A0A0A;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .faq-container {
            padding: 40px 15px;
          }

          .faq-header {
            padding: 40px 20px;
            margin-bottom: 40px;
          }

          .faq-header h1 {
            font-size: 2.2rem;
          }

          .faq-header p {
            font-size: 1rem;
          }

          .faq-item {
            padding: 25px 20px;
          }

          .faq-question h3 {
            font-size: 1.1rem;
          }

          .contact-cta {
            padding: 40px 20px;
          }

          .contact-cta h3 {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default OurFAQPage; 