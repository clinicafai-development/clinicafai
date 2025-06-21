"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function OurAboutUs() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">Est. 2020</div>
            <h1>Where Beauty Meets Science</h1>
            <p>At Clinica Fai, we believe that true beauty enhancement comes from the perfect harmony of medical expertise, artistic vision, and genuine care for each patient's unique journey.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">10,000+</span>
                <span className="label">Happy Patients</span>
              </div>
              <div className="stat">
                <span className="number">15+</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="number">50+</span>
                <span className="label">Treatments</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <Image
                src="/assets/img/about_img_1.jpg"
                alt="Clinica Fai Interior"
                width={600}
                height={700}
                className="main-image"
              />
              <div className="floating-card">
                <div className="card-icon">✨</div>
                <div className="card-text">
                  <strong>Premium Care</strong>
                  <span>Personalized treatments for every patient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="nav-section">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`tab ${activeTab === 'story' ? 'active' : ''}`}
              onClick={() => setActiveTab('story')}
            >
              Our Story
            </button>
            <button 
              className={`tab ${activeTab === 'founder' ? 'active' : ''}`}
              onClick={() => setActiveTab('founder')}
            >
              Meet Dr. Shubhra
            </button>
            <button 
              className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`tab ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Our Values
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section">
        <div className="container">
          
          {/* Our Story Tab */}
          {activeTab === 'story' && (
            <div className="content-panel story-panel">
              <div className="panel-grid">
                <div className="text-content">
                  <h2>The Journey to Excellence</h2>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="year">2005</div>
                      <div className="content">
                        <h3>The Beginning</h3>
                        <p>Dr. Shubhra Goel began her medical journey at AIIMS, New Delhi, with a vision to revolutionize aesthetic medicine in India.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="year">2015</div>
                      <div className="content">
                        <h3>Specialization</h3>
                        <p>Completed advanced training in Oculoplasty and Aesthetic Medicine, combining surgical precision with artistic vision.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="year">2020</div>
                      <div className="content">
                        <h3>Clinica Fai Born</h3>
                        <p>Founded Clinica Fai with a mission to provide world-class aesthetic treatments in a luxurious, caring environment.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="year">2024</div>
                      <div className="content">
                        <h3>Innovation Leader</h3>
                        <p>Today, we're recognized as pioneers in non-surgical aesthetic treatments, trusted by thousands of patients worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-content">
                  <div className="image-stack">
                    <Image src="/assets/img/about_img_2.jpg" alt="Clinic" width={400} height={300} className="stack-image" />
                    <Image src="/assets/img/about_img_3.png" alt="Treatment" width={350} height={250} className="stack-image" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Meet Dr. Shubhra Tab */}
          {activeTab === 'founder' && (
            <div className="content-panel founder-panel">
              <div className="panel-grid">
                <div className="founder-image">
                  <div className="image-frame">
                    <Image
                      src="/assets/img/doctor_details_1.jpeg"
                      alt="Dr. Shubhra Goel"
                      width={500}
                      height={600}
                      className="founder-portrait"
                    />
                    <div className="credentials">
                      <div className="credential">MBBS, AIIMS</div>
                      <div className="credential">MS Ophthalmology</div>
                      <div className="credential">Fellowship Oculoplasty</div>
                    </div>
                  </div>
                </div>
                <div className="founder-content">
                  <div className="title-section">
                    <h2>Dr. Shubhra Goel</h2>
                    <p className="subtitle">Founder & Chief Medical Officer</p>
                  </div>
                  
                  <div className="bio-content">
                    <blockquote>
                      "My philosophy is simple: every person deserves to feel confident and beautiful in their own skin. Through years of training at India's most prestigious medical institutions, I've learned that true aesthetic medicine is both an art and a science."
                    </blockquote>
                    
                    <div className="expertise-grid">
                      <div className="expertise-item">
                        <div className="icon">🎯</div>
                        <div>
                          <h4>Precision</h4>
                          <p>Surgical accuracy in every treatment</p>
                        </div>
                      </div>
                      <div className="expertise-item">
                        <div className="icon">🎨</div>
                        <div>
                          <h4>Artistry</h4>
                          <p>Aesthetic vision for natural results</p>
                        </div>
                      </div>
                      <div className="expertise-item">
                        <div className="icon">💝</div>
                        <div>
                          <h4>Compassion</h4>
                          <p>Genuine care for every patient</p>
                        </div>
                      </div>
                      <div className="expertise-item">
                        <div className="icon">🏆</div>
                        <div>
                          <h4>Excellence</h4>
                          <p>Commitment to the highest standards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission Tab */}
          {activeTab === 'mission' && (
            <div className="content-panel mission-panel">
              <div className="mission-content">
                <h2>Our Mission</h2>
                <p className="mission-statement">
                  To provide world-class aesthetic treatments that enhance natural beauty while maintaining the highest standards of safety, care, and medical excellence.
                </p>
                
                <div className="mission-grid">
                  <div className="mission-card">
                    <div className="card-icon">🌟</div>
                    <h3>Excellence</h3>
                    <p>We strive for perfection in every treatment, using the latest technology and techniques.</p>
                  </div>
                  <div className="mission-card">
                    <div className="card-icon">🤝</div>
                    <h3>Trust</h3>
                    <p>Building lasting relationships with our patients through transparency and genuine care.</p>
                  </div>
                  <div className="mission-card">
                    <div className="card-icon">💎</div>
                    <h3>Quality</h3>
                    <p>Using only premium products and maintaining the highest safety standards.</p>
                  </div>
                  <div className="mission-card">
                    <div className="card-icon">🎯</div>
                    <h3>Results</h3>
                    <p>Delivering natural-looking results that exceed expectations every time.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="content-panel values-panel">
              <div className="values-content">
                <h2>Our Values</h2>
                <p className="values-intro">
                  These core principles guide everything we do at Clinica Fai.
                </p>
                
                <div className="values-list">
                  <div className="value-item">
                    <div className="value-icon">🔬</div>
                    <div className="value-content">
                      <h3>Scientific Excellence</h3>
                      <p>Every treatment is backed by rigorous scientific research and proven methodologies.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">❤️</div>
                    <div className="value-content">
                      <h3>Patient-Centric Care</h3>
                      <p>Your comfort, safety, and satisfaction are our top priorities in every interaction.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🎨</div>
                    <div className="value-content">
                      <h3>Artistic Vision</h3>
                      <p>We combine medical expertise with artistic sensibility to create beautiful, natural results.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🌿</div>
                    <div className="value-content">
                      <h3>Holistic Approach</h3>
                      <p>We consider your overall well-being and lifestyle in every treatment plan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </section>

      <style jsx>{`
        .about-page {
          background: #0A0A0A;
          color: #FFFFFF;
          min-height: 100vh;
          padding-top: 120px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero {
          padding: 80px 0;
          background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-text {
          padding-right: 40px;
        }

        .badge {
          display: inline-block;
          background: #D4AF37;
          color: #0A0A0A;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 30px;
          color: #FFFFFF;
        }

        .hero-text p {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #B8B8B8;
          margin-bottom: 40px;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
        }

        .stat {
          text-align: center;
        }

        .stat .number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 8px;
        }

        .stat .label {
          color: #B8B8B8;
          font-size: 0.9rem;
        }

        .hero-image {
          position: relative;
        }

        .image-container {
          position: relative;
        }

        .main-image {
          border-radius: 20px;
          width: 100%;
          height: auto;
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2);
        }

        .floating-card {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: rgba(212, 175, 55, 0.95);
          color: #0A0A0A;
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          gap: 15px;
          max-width: 250px;
        }

        .card-icon {
          font-size: 1.5rem;
        }

        .card-text strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 5px;
        }

        .card-text span {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        /* Navigation Section */
        .nav-section {
          padding: 60px 0;
          background: #1A1A1A;
          border-bottom: 1px solid #333;
        }

        .nav-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .tab {
          background: transparent;
          border: 2px solid #333;
          color: #B8B8B8;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab:hover {
          border-color: #D4AF37;
          color: #D4AF37;
        }

        .tab.active {
          background: #D4AF37;
          border-color: #D4AF37;
          color: #0A0A0A;
        }

        /* Content Section */
        .content-section {
          padding: 80px 0;
        }

        .content-panel {
          animation: fadeIn 0.5s ease-in-out;
        }

        .panel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Story Panel */
        .story-panel h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #FFFFFF;
        }

        .timeline {
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #D4AF37;
        }

        .timeline-item {
          display: flex;
          gap: 30px;
          margin-bottom: 40px;
          position: relative;
        }

        .year {
          background: #D4AF37;
          color: #0A0A0A;
          padding: 10px 15px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .timeline-item .content h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #FFFFFF;
        }

        .timeline-item .content p {
          color: #B8B8B8;
          line-height: 1.6;
        }

        .image-stack {
          position: relative;
        }

        .stack-image {
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Founder Panel */
        .founder-image {
          text-align: center;
        }

        .image-frame {
          position: relative;
          display: inline-block;
        }

        .founder-portrait {
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2);
        }

        .credentials {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .credential {
          background: #D4AF37;
          color: #0A0A0A;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .founder-content .title-section h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #FFFFFF;
        }

        .subtitle {
          color: #D4AF37;
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .bio-content blockquote {
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #B8B8B8;
          margin-bottom: 40px;
          padding-left: 20px;
          border-left: 3px solid #D4AF37;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .expertise-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .expertise-item .icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .expertise-item h4 {
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: #FFFFFF;
        }

        .expertise-item p {
          color: #B8B8B8;
          font-size: 0.9rem;
        }

        /* Mission Panel */
        .mission-content {
          text-align: center;
        }

        .mission-content h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #FFFFFF;
        }

        .mission-statement {
          font-size: 1.3rem;
          line-height: 1.7;
          color: #B8B8B8;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .mission-card {
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
        }

        .mission-card .card-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .mission-card h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: #FFFFFF;
        }

        .mission-card p {
          color: #B8B8B8;
          line-height: 1.6;
        }

        /* Values Panel */
        .values-content {
          text-align: center;
        }

        .values-content h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #FFFFFF;
        }

        .values-intro {
          font-size: 1.2rem;
          color: #B8B8B8;
          margin-bottom: 60px;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 30px;
          text-align: left;
        }

        .value-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .value-content h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #FFFFFF;
        }

        .value-content p {
          color: #B8B8B8;
          line-height: 1.6;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content,
          .panel-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .hero-text h1 {
            font-size: 3rem;
          }

          .mission-grid {
            grid-template-columns: 1fr;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }

          .nav-tabs {
            flex-wrap: wrap;
            gap: 10px;
          }

          .tab {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .floating-card {
            position: static;
            margin-top: 20px;
          }

          .value-item {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}