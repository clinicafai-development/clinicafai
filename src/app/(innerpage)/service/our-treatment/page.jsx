"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OurTreatment() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  // Complete treatment list
  const treatments = [
    { name: 'Absent / Scanty Brows and Lashes', category: 'face-eyes', icon: '👁️' },
    { name: 'Acne', category: 'skin-health', icon: '🔬' },
    { name: 'Anti-Ageing Skin Care', category: 'anti-aging', icon: '✨' },
    { name: 'Anti-Cellulite Treatment', category: 'skin-health', icon: '💆' },
    { name: 'Cheek Hollowness and Smile Folds', category: 'face-eyes', icon: '😊' },
    { name: 'Chemical Peels', category: 'skin-health', icon: '🧴' },
    { name: 'Daily Skin Care Program', category: 'skin-health', icon: '🌟' },
    { name: 'Dark Circles', category: 'face-eyes', icon: '👀' },
    { name: 'Droopy Brows', category: 'surgical', icon: '🔧' },
    { name: 'Ear Lobe Repair', category: 'surgical', icon: '👂' },
    { name: 'Excessive Sweating', category: 'medical', icon: '💧' },
    { name: 'Eye Socket / Orbit Treatments', category: 'surgical', icon: '🏥' },
    { name: 'Face Reshaping and Contouring', category: 'face-eyes', icon: '🎨' },
    { name: 'Hollowness Under Eyes', category: 'face-eyes', icon: '👁️' },
    { name: 'Infections, Injuries, Fractures', category: 'medical', icon: '🩹' },
    { name: 'In-turning and Out-turning of Lids', category: 'surgical', icon: '🔄' },
    { name: 'Paralysis of Face and Eyelid', category: 'medical', icon: '⚕️' },
    { name: 'Pigmentation and Texture Repair', category: 'skin-health', icon: '🌈' },
    { name: 'Puffy / Baggy Eyes', category: 'face-eyes', icon: '👁️' },
    { name: 'Skin Brightening', category: 'skin-health', icon: '💎' },
    { name: 'Skin Hydration', category: 'skin-health', icon: '💧' },
    { name: 'Sleepy or Droopy Eyelid (Ptosis Surgery)', category: 'surgical', icon: '🔧' },
    { name: 'Spasms and Twitching', category: 'medical', icon: '⚡' },
    { name: 'Tear Passage Treatments', category: 'medical', icon: '💧' },
    { name: 'Thyroid Eye Disease', category: 'medical', icon: '🦋' },
    { name: 'Watering, Itching, Lumps, Bumps', category: 'medical', icon: '🩺' },
    { name: 'Wrinkles, Fine Lines, Folds', category: 'anti-aging', icon: '⏰' }
  ];

  const categories = [
    { id: 'all', name: 'All Treatments', count: treatments.length },
    { id: 'face-eyes', name: 'Face & Eyes', count: treatments.filter(t => t.category === 'face-eyes').length },
    { id: 'anti-aging', name: 'Anti-Aging', count: treatments.filter(t => t.category === 'anti-aging').length },
    { id: 'skin-health', name: 'Skin Health', count: treatments.filter(t => t.category === 'skin-health').length },
    { id: 'surgical', name: 'Surgical Corrections', count: treatments.filter(t => t.category === 'surgical').length },
    { id: 'medical', name: 'Medical Concerns', count: treatments.filter(t => t.category === 'medical').length }
  ];

  const signatureTreatments = [
    {
      name: 'Acne Treatment',
      description: 'Comprehensive acne solutions using advanced medical-grade treatments',
      image: '/assets/img/service_1.png',
      results: '95% improvement rate',
      duration: '4-6 sessions'
    },
    {
      name: 'Ptosis Surgery',
      description: 'Precision eyelid correction for droopy or sleepy eyes',
      image: '/assets/img/service_2.jpg',
      results: 'Immediate results',
      duration: '1-2 hours'
    },
    {
      name: 'Anti-Aging Solutions',
      description: 'Wrinkle reduction and skin rejuvenation treatments',
      image: '/assets/img/service_3.jpg',
      results: '10+ years younger look',
      duration: '30-60 minutes'
    },
    {
      name: 'Dark Circle Treatment',
      description: 'Advanced solutions for under-eye concerns and puffiness',
      image: '/assets/img/service_4.jpg',
      results: 'Brighter, youthful eyes',
      duration: '45 minutes'
    }
  ];

  const beforeAfterImages = [
    { before: '/assets/img/project_1.jpg', after: '/assets/img/project_2.jpg', treatment: 'Acne Treatment' },
    { before: '/assets/img/project_3.jpg', after: '/assets/img/project_4.jpg', treatment: 'Eye Bag Removal' },
    { before: '/assets/img/project_5.jpg', after: '/assets/img/project_6.jpg', treatment: 'Wrinkle Reduction' },
    { before: '/assets/img/project_7.jpg', after: '/assets/img/project_8.jpg', treatment: 'Ptosis Correction' }
  ];

  const treatmentSteps = [
    { step: 1, title: 'Initial Consultation', description: 'Comprehensive assessment of your concerns and medical history', icon: '🩺' },
    { step: 2, title: 'Detailed Diagnosis', description: 'Advanced imaging and analysis to create your personalized plan', icon: '🔬' },
    { step: 3, title: 'Treatment Procedure', description: 'Precise execution using state-of-the-art technology', icon: '⚕️' },
    { step: 4, title: 'Recovery & Follow-up', description: 'Guided aftercare with regular monitoring and support', icon: '🌟' }
  ];

  const faqs = [
    {
      question: 'How long is the typical treatment downtime?',
      answer: 'Downtime varies by treatment type. Non-invasive procedures typically require 0-2 days, while surgical procedures may need 1-2 weeks for full recovery.'
    },
    {
      question: 'Are the treatments painful?',
      answer: 'We use advanced pain management techniques including topical anesthetics and cooling systems. Most patients report minimal discomfort during and after procedures.'
    },
    {
      question: 'How are treatment plans customized?',
      answer: 'Every treatment plan is tailored based on your unique skin type, concerns, medical history, and desired outcomes. We believe in personalized care for optimal results.'
    },
    {
      question: 'What results can I expect?',
      answer: 'Results vary by individual and treatment type. During consultation, we provide realistic expectations and show before/after examples of similar cases.'
    },
    {
      question: 'How do I maintain results long-term?',
      answer: 'We provide comprehensive aftercare instructions and maintenance programs. Regular follow-ups and proper skincare routines help maintain and enhance your results.'
    }
  ];

  const filteredTreatments = activeFilter === 'all' 
    ? treatments 
    : treatments.filter(treatment => treatment.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="treatments-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Tailored Treatments for Every Concern</h1>
            <p className="hero-subtitle">Expert care designed for skin, face, and features — powered by science and precision.</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Specialized Treatments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Patients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="treatments-grid-section">
        <div className="container">
          <div className="treatments-grid">
            {filteredTreatments.map((treatment, index) => (
              <div 
                key={treatment.name} 
                className={`treatment-card animate-on-scroll ${isVisible['treatments'] ? 'visible' : ''}`}
                id="treatments"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon">{treatment.icon}</div>
                <h3 className="card-title">{treatment.name}</h3>
                <div className="card-category">{categories.find(c => c.id === treatment.category)?.name}</div>
                <div className="card-hover-overlay">
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Solutions */}
      <section className="signature-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="signature-header">
            <h2 className="section-title">Signature Solutions</h2>
            <p className="section-subtitle">Our most popular treatments with proven results</p>
          </div>
          <div className="signature-grid">
            {signatureTreatments.map((treatment, index) => (
              <div key={treatment.name} className={`signature-card animate-on-scroll ${isVisible['signature'] ? 'visible' : ''}`} id="signature">
                <div className="signature-image">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    width={400}
                    height={300}
                    className="treatment-image"
                  />
                  <div className="image-overlay">
                    <div className="treatment-stats">
                      <div className="stat">
                        <span className="stat-value">{treatment.results}</span>
                        <span className="stat-label">Success Rate</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{treatment.duration}</span>
                        <span className="stat-label">Duration</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="signature-content">
                  <h3 className="signature-title">{treatment.name}</h3>
                  <p className="signature-description">{treatment.description}</p>
                  <button className="signature-cta">Book Consultation</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="gallery-header">
            <h2 className="section-title">Real Results, Real Confidence</h2>
            <p className="section-subtitle">See the transformative power of our treatments</p>
          </div>
          <div className="gallery-slider">
            <div className="slider-container">
              {beforeAfterImages.map((item, index) => (
                <div 
                  key={index} 
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="before-after-container">
                    <div className="image-comparison">
                      <div className="before-section">
                        <h4>Before</h4>
                        <Image
                          src={item.before}
                          alt="Before treatment"
                          width={400}
                          height={400}
                          className="comparison-image"
                        />
                      </div>
                      <div className="divider">
                        <div className="divider-line"></div>
                        <div className="divider-arrow">→</div>
                      </div>
                      <div className="after-section">
                        <h4>After</h4>
                        <Image
                          src={item.after}
                          alt="After treatment"
                          width={400}
                          height={400}
                          className="comparison-image"
                        />
                      </div>
                    </div>
                    <div className="treatment-label">{item.treatment}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-dots">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="process-header">
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">Your journey to transformation, step by step</p>
          </div>
          <div className="process-timeline">
            {treatmentSteps.map((step, index) => (
              <div key={step.step} className={`process-step animate-on-scroll ${isVisible['process'] ? 'visible' : ''}`} id="process">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < treatmentSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our treatments</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item animate-on-scroll ${isVisible['faq'] ? 'visible' : ''}`} id="faq">
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll" id="cta">
            <div className="cta-text">
              <h2 className="cta-title">Need Expert Guidance?</h2>
              <p className="cta-subtitle">Book your consultation today and discover the perfect treatment for your unique needs.</p>
            </div>
            <div className="cta-actions">
              <button className="cta-primary">Book Consultation</button>
              <button className="cta-secondary">Call Now</button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .treatments-page {
          background: var(--deep-black);
          color: var(--ivory-cream);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--deep-black) 0%, #2a2a2a 50%, var(--deep-black) 100%);
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 70%, rgba(212, 175, 127, 0.1) 0%, transparent 50%);
        }

        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--soft-gold);
          border-radius: 50%;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--ivory-cream);
          text-shadow: 0 0 30px rgba(212, 175, 127, 0.3);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--warm-sand);
          margin-bottom: 60px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 3rem;
          font-weight: 700;
          color: var(--soft-gold);
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--warm-sand);
          opacity: 0.8;
        }

        /* Filter Section */
        .filter-section {
          padding: 80px 0 40px;
          background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-black) 100%);
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .filter-tab {
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 30px;
          padding: 15px 25px;
          color: var(--warm-sand);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-tab:hover {
          background: rgba(212, 175, 127, 0.1);
          border-color: rgba(212, 175, 127, 0.4);
          transform: translateY(-2px);
        }

        .filter-tab.active {
          background: var(--soft-gold);
          color: var(--deep-black);
          border-color: var(--soft-gold);
          font-weight: 600;
        }

        .tab-count {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Treatments Grid */
        .treatments-grid-section {
          padding: 80px 0;
          background: var(--deep-black);
        }

        .treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .treatment-card {
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          transition: all 0.4s ease;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .treatment-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .treatment-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(212, 175, 127, 0.2);
          border-color: rgba(212, 175, 127, 0.4);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--ivory-cream);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .card-category {
          color: var(--soft-gold);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .card-hover-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, var(--soft-gold), transparent);
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .treatment-card:hover .card-hover-overlay {
          transform: translateY(0);
        }

        .learn-more-btn {
          background: var(--deep-black);
          color: var(--ivory-cream);
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .learn-more-btn:hover {
          background: var(--ivory-cream);
          color: var(--deep-black);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--ivory-cream);
          text-shadow: 0 0 15px rgba(212, 175, 127, 0.4);
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: var(--warm-sand);
          opacity: 0.9;
        }

        /* Signature Solutions */
        .signature-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-black) 100%);
        }

        .signature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .signature-card {
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 25px;
          overflow: hidden;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .signature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .signature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(212, 175, 127, 0.2);
        }

        .signature-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .treatment-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .signature-card:hover .treatment-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(26, 26, 26, 0.8) 100%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .treatment-stats {
          display: flex;
          gap: 30px;
          width: 100%;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          color: var(--soft-gold);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--warm-sand);
          opacity: 0.8;
        }

        .signature-content {
          padding: 30px;
        }

        .signature-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--ivory-cream);
          margin-bottom: 15px;
        }

        .signature-description {
          color: var(--warm-sand);
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .signature-cta {
          background: var(--soft-gold);
          color: var(--deep-black);
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signature-cta:hover {
          background: var(--muted-honey);
          transform: translateY(-2px);
        }

        /* Gallery Section */
        .gallery-section {
          padding: 120px 0;
          background: var(--deep-black);
        }

        .gallery-slider {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .slider-container {
          position: relative;
          height: 500px;
          overflow: hidden;
          border-radius: 20px;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .slide.active {
          opacity: 1;
        }

        .before-after-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 20px;
          padding: 40px;
        }

        .image-comparison {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 30px;
        }

        .before-section,
        .after-section {
          text-align: center;
        }

        .before-section h4,
        .after-section h4 {
          color: var(--soft-gold);
          font-weight: 600;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        .comparison-image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 15px;
          border: 2px solid rgba(212, 175, 127, 0.3);
        }

        .divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .divider-line {
          width: 2px;
          height: 40px;
          background: var(--soft-gold);
        }

        .divider-arrow {
          color: var(--soft-gold);
          font-size: 1.5rem;
          font-weight: bold;
        }

        .treatment-label {
          color: var(--ivory-cream);
          font-size: 1.2rem;
          font-weight: 600;
          text-align: center;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(212, 175, 127, 0.3);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--soft-gold);
          border-color: var(--soft-gold);
        }

        /* Process Section */
        .process-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-black) 100%);
        }

        .process-timeline {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .process-timeline::before {
          content: '';
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, var(--soft-gold), transparent, var(--soft-gold));
          z-index: 1;
        }

        .process-step {
          position: relative;
          text-align: center;
          flex: 1;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .process-step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--soft-gold);
          color: var(--deep-black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 20px;
          position: relative;
          z-index: 2;
        }

        .step-icon {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .step-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--ivory-cream);
          margin-bottom: 15px;
        }

        .step-description {
          color: var(--warm-sand);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* FAQ Section */
        .faq-section {
          padding: 120px 0;
          background: var(--deep-black);
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 15px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .faq-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-item:hover {
          border-color: rgba(212, 175, 127, 0.4);
        }

        .faq-question {
          padding: 25px 30px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-question h3 {
          color: var(--ivory-cream);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .faq-icon {
          color: var(--soft-gold);
          font-size: 1.5rem;
          font-weight: 300;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          padding: 0 30px 25px;
          border-top: 1px solid rgba(212, 175, 127, 0.1);
        }

        .faq-answer p {
          color: var(--warm-sand);
          line-height: 1.6;
          margin: 15px 0 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 0;
          background: linear-gradient(135deg, var(--soft-gold) 0%, var(--muted-honey) 100%);
        }

        .cta-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(26, 26, 26, 0.9);
          border-radius: 25px;
          padding: 60px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 127, 0.3);
        }

        .cta-text {
          flex: 1;
          margin-right: 40px;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--ivory-cream);
          margin-bottom: 15px;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: var(--warm-sand);
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 20px;
        }

        .cta-primary,
        .cta-secondary {
          padding: 18px 35px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .cta-primary {
          background: var(--soft-gold);
          color: var(--deep-black);
        }

        .cta-primary:hover {
          background: var(--muted-honey);
          transform: translateY(-3px);
        }

        .cta-secondary {
          background: transparent;
          color: var(--ivory-cream);
          border-color: var(--ivory-cream);
        }

        .cta-secondary:hover {
          background: var(--ivory-cream);
          color: var(--deep-black);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            gap: 40px;
          }

          .treatments-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
          }

          .signature-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .image-comparison {
            gap: 30px;
          }

          .comparison-image {
            width: 150px;
            height: 150px;
          }

          .process-timeline {
            flex-direction: column;
            gap: 40px;
          }

          .process-timeline::before {
            display: none;
          }

          .cta-content {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }

          .cta-text {
            margin-right: 0;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 30px;
          }

          .filter-tabs {
            gap: 15px;
            justify-content: center;
          }

          .filter-tab {
            padding: 12px 20px;
            font-size: 0.9rem;
          }

          .treatments-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .signature-content {
            padding: 25px;
          }

          .image-comparison {
            flex-direction: column;
            gap: 20px;
          }

          .divider {
            transform: rotate(90deg);
          }

          .slider-container {
            height: 400px;
          }

          .before-after-container {
            padding: 20px;
          }

          .process-step {
            padding: 0 10px;
            margin-bottom: 30px;
          }

          .faq-question {
            padding: 20px;
          }

          .faq-answer {
            padding: 0 20px 20px;
          }

          .cta-content {
            padding: 40px 30px;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-actions {
            flex-direction: column;
            gap: 15px;
          }

          .container {
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .filter-tabs {
            flex-direction: column;
            align-items: center;
          }

          .treatment-card {
            padding: 30px 20px;
          }

          .signature-image {
            height: 200px;
          }

          .comparison-image {
            width: 120px;
            height: 120px;
          }

          .step-number {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .cta-content {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
} 