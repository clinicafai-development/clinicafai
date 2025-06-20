"use client";

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  { 
    q: 'What services does Clinica Fai offer?', 
    a: 'We offer a wide range of eye care services, including surgery, oculoplasty, and vision correction.' 
  },
  {
    q: 'What is oculoplastic surgery?',
    a: 'Oculoplastic surgery involves procedures around the eyes and face, including eyelid surgery, tear duct surgery, and orbital surgery. Our specialists are trained to handle both cosmetic and reconstructive procedures.'
  },
  {
    q: 'How long is the recovery period after eye surgery?',
    a: 'Recovery periods vary depending on the procedure. Most patients can return to normal activities within 1-2 weeks, though complete healing may take several weeks to months. We provide detailed post-operative care instructions for each procedure.'
  },
  {
    q: 'Are your treatments covered by insurance?',
    a: 'Many of our medical procedures are covered by insurance. However, cosmetic procedures typically are not. We recommend checking with your insurance provider and our staff can help guide you through the process.'
  },
  {
    q: 'What should I expect during my first visit?',
    a: 'Your first visit will include a comprehensive eye examination, detailed discussion of your concerns, and development of a personalized treatment plan. Please bring your medical history and any relevant previous records.'
  }
];

const OurFAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services and procedures</p>
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
      <style jsx>{`
        .faq-container {
          max-width: 900px;
          margin: 60px auto;
          padding: 0 20px;
          background: #0D0D0D;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 50px;
          padding: 40px 20px;
          background: linear-gradient(135deg, #F3E4D7 0%, #CBB1A0 100%);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .faq-header h1 {
          color: #0D0D0D;
          font-size: 42px;
          margin-bottom: 16px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .faq-header p {
          color: #666;
          font-size: 18px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(195, 167, 122, 0.2);
          border-radius: 12px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .faq-item:hover {
          border-color: #C3A77A;
          box-shadow: 0 4px 20px rgba(195, 167, 122, 0.1);
          transform: translateY(-2px);
        }

        .faq-item.active {
          background: rgba(195, 167, 122, 0.05);
          border-color: #C3A77A;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .faq-question h3 {
          margin: 0;
          font-size: 18px;
          color: #FFFFFF;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .faq-icon {
          color: #C3A77A;
          display: flex;
          align-items: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .faq-answer.show {
          max-height: 500px;
          opacity: 1;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(195, 167, 122, 0.2);
        }

        .faq-answer p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          font-size: 16px;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .faq-container {
            margin: 0 auto;
            padding: 20px;
          }

          .faq-header {
            padding: 30px 20px;
            margin-bottom: 30px;
          }

          .faq-header h1 {
            font-size: 32px;
          }

          .faq-header p {
            font-size: 16px;
          }

          .faq-item {
            padding: 20px;
          }

          .faq-question h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default OurFAQPage; 