"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function OurCredentials() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const educationData = [
    {
      year: "2005-2011",
      degree: "MBBS",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      achievement: "Gold Medalist",
      logo: "/assets/img/aiims-logo.png"
    },
    {
      year: "2012-2015",
      degree: "MS - Ophthalmology",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      achievement: "Distinction",
      logo: "/assets/img/aiims-logo.png"
    },
    {
      year: "2016-2017",
      degree: "Fellowship in Oculoplasty, Orbit & Oncology",
      institution: "L V Prasad Eye Institute, Hyderabad",
      achievement: "Specialized Training",
      logo: "/assets/img/lvpei-logo.png"
    },
    {
      year: "2018",
      degree: "Advanced Fellowship",
      institution: "Moorfields Eye Hospital, London",
      achievement: "International Training",
      logo: "/assets/img/moorfields-logo.png"
    }
  ];

  const mentorsData = [
    {
      name: "Prof. Rajvardhan Azad",
      specialty: "Vitreoretinal Surgery",
      institution: "AIIMS, New Delhi",
      testimonial: "Exceptional precision and dedication to patient care",
      image: "/assets/img/mentor-1.jpg"
    },
    {
      name: "Dr. Tanuj Dada",
      specialty: "Glaucoma Specialist",
      institution: "AIIMS, New Delhi", 
      testimonial: "Outstanding research acumen and clinical excellence",
      image: "/assets/img/mentor-2.jpg"
    },
    {
      name: "Dr. Mohammad Javed Ali",
      specialty: "Oculoplasty Expert",
      institution: "L V Prasad Eye Institute",
      testimonial: "Innovative approach to complex oculoplastic procedures",
      image: "/assets/img/mentor-3.jpg"
    }
  ];

  const mediaFeatures = [
    { publication: "Vogue India", type: "Beauty Expert Feature", year: "2023", logo: "/assets/img/vogue-logo.png" },
    { publication: "Femina", type: "Skincare Specialist", year: "2023", logo: "/assets/img/femina-logo.png" },
    { publication: "Elle India", type: "Aesthetic Medicine", year: "2022", logo: "/assets/img/elle-logo.png" },
    { publication: "Harper's Bazaar", type: "Beauty Authority", year: "2022", logo: "/assets/img/harpers-logo.png" },
    { publication: "Grazia India", type: "Wellness Expert", year: "2021", logo: "/assets/img/grazia-logo.png" },
    { publication: "Cosmopolitan", type: "Medical Aesthetics", year: "2021", logo: "/assets/img/cosmo-logo.png" }
  ];

  const awards = [
    {
      year: "2023",
      title: "Excellence in Aesthetic Medicine",
      body: "International Society of Dermatology",
      icon: "🏆"
    },
    {
      year: "2022", 
      title: "Best Oculoplastic Surgeon",
      body: "Indian Medical Association",
      icon: "🥇"
    },
    {
      year: "2021",
      title: "Innovation in Patient Care",
      body: "All India Ophthalmological Society",
      icon: "⭐"
    },
    {
      year: "2020",
      title: "Young Achiever Award",
      body: "Delhi Medical Council",
      icon: "🎖️"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "10,000+", label: "Patients Treated" },
    { number: "5,000+", label: "Procedures Performed" },
    { number: "50+", label: "Research Publications" }
  ];

  return (
    <div className="credentials-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text animate-on-scroll" id="hero-text">
            <h1 className="hero-title">Credentials That Inspire Trust</h1>
            <p className="hero-subtitle">Every detail tells a story of dedication.</p>
          </div>
          <div className="hero-image animate-on-scroll" id="hero-image">
            <div className="image-frame">
              <Image
                src="/assets/img/doctor_details_1.jpeg"
                alt="Dr. Shubhra Goel"
                width={400}
                height={500}
                className="hero-portrait"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card animate-on-scroll ${isVisible['stats'] ? 'visible' : ''}`} id="stats">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="education-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="education-header">
            <h2 className="section-title">Educational Excellence</h2>
            <p className="section-subtitle">A journey of continuous learning and academic distinction</p>
          </div>
          <div className="timeline">
            {educationData.map((edu, index) => (
              <div key={index} className={`timeline-item animate-on-scroll ${isVisible[`edu-${index}`] ? 'visible' : ''}`} id={`edu-${index}`}>
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-year">{edu.year}</div>
                </div>
                <div className="timeline-content">
                  <div className="education-card">
                    <div className="card-header">
                      <h3 className="degree-title">{edu.degree}</h3>
                      <span className="achievement-badge">{edu.achievement}</span>
                    </div>
                    <p className="institution-name">{edu.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="mentorship-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="mentorship-header">
            <h2 className="section-title">Guided by Excellence</h2>
            <p className="section-subtitle">Learning from the finest minds in medicine</p>
          </div>
          <div className="mentors-grid">
            {mentorsData.map((mentor, index) => (
              <div key={index} className={`mentor-card animate-on-scroll ${isVisible[`mentor-${index}`] ? 'visible' : ''}`} id={`mentor-${index}`}>
                <div className="mentor-image">
                  <div className="image-placeholder">
                    <span className="mentor-initial">{mentor.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="mentor-info">
                  <h3 className="mentor-name">{mentor.name}</h3>
                  <p className="mentor-specialty">{mentor.specialty}</p>
                  <p className="mentor-institution">{mentor.institution}</p>
                  <blockquote className="mentor-testimonial">&ldquo;{mentor.testimonial}&rdquo;</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="media-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="media-header">
            <h2 className="section-title">Media Recognition</h2>
            <p className="section-subtitle">Featured expertise across leading publications</p>
          </div>
          <div className="media-carousel">
            <div className="media-track">
              {[...mediaFeatures, ...mediaFeatures].map((media, index) => (
                <div key={index} className="media-card">
                  <div className="media-logo">
                    <span className="logo-text">{media.publication}</span>
                  </div>
                  <div className="media-info">
                    <h4 className="media-type">{media.type}</h4>
                    <span className="media-year">{media.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="awards-header">
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-subtitle">Celebrating excellence in medical practice</p>
          </div>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className={`award-card animate-on-scroll ${isVisible[`award-${index}`] ? 'visible' : ''}`} id={`award-${index}`}>
                <div className="award-icon">{award.icon}</div>
                <div className="award-content">
                  <div className="award-year">{award.year}</div>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-body">{award.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-image animate-on-scroll" id="vision-image">
              <div className="portrait-frame">
                <Image
                  src="/assets/img/about_img_1.jpg"
                  alt="Dr. Shubhra Goel"
                  width={500}
                  height={600}
                  className="vision-portrait"
                />
              </div>
            </div>
            <div className="vision-text animate-on-scroll" id="vision-text">
              <h2 className="vision-title">Why I Started Clinica Fai</h2>
              <div className="vision-story">
                <p>
                  &ldquo;My journey in medicine began with a simple belief: every person deserves to feel confident in their own skin. After years of training at prestigious institutions and working with renowned mentors, I realized that true beauty comes from the harmony between medical excellence and artistic vision.&rdquo;
                </p>
                <p>
                  &ldquo;Clinica Fai was born from my desire to create a space where cutting-edge medical technology meets personalized care. Here, we don&apos;t just treat conditions &ndash; we understand dreams, address concerns, and craft solutions that enhance natural beauty while prioritizing safety above all.&rdquo;
                </p>
                <p>
                  &ldquo;Every procedure, every consultation, every moment of care is guided by the principle that your trust is sacred. This is why I continue to learn, to innovate, and to push the boundaries of what&apos;s possible in aesthetic medicine.&rdquo;
                </p>
                <div className="signature">
                  <span className="signature-text">Dr. Shubhra Goel</span>
                  <span className="signature-title">Founder & Chief Medical Officer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships & Certifications */}
      <section className="memberships-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="memberships-header">
            <h2 className="section-title">Professional Memberships</h2>
            <p className="section-subtitle">Active participation in leading medical organizations</p>
          </div>
          <div className="memberships-grid">
            <div className="membership-card animate-on-scroll" id="membership-1">
              <div className="membership-logo">ISD</div>
              <h3>International Society of Dermatology</h3>
              <p>Fellow Member</p>
            </div>
            <div className="membership-card animate-on-scroll" id="membership-2">
              <div className="membership-logo">AIOS</div>
              <h3>All India Ophthalmological Society</h3>
              <p>Active Member</p>
            </div>
            <div className="membership-card animate-on-scroll" id="membership-3">
              <div className="membership-logo">AAD</div>
              <h3>American Academy of Dermatology</h3>
              <p>International Member</p>
            </div>
            <div className="membership-card animate-on-scroll" id="membership-4">
              <div className="membership-logo">ISAPS</div>
              <h3>International Society of Aesthetic Plastic Surgery</h3>
              <p>Associate Member</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .credentials-page {
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
          height: 100vh;
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
          height: 120%;
          background: linear-gradient(135deg, var(--deep-black) 0%, #2a2a2a 50%, var(--deep-black) 100%);
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 0%, rgba(26, 26, 26, 0.3) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          padding: 0 20px;
        }

        .hero-text {
          opacity: 1;
          transform: translateX(0);
          animation: slideInLeft 1s ease-out 0.5s forwards;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--ivory-cream);
          text-shadow: 0 0 20px rgba(212, 175, 127, 0.3);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--warm-sand);
          font-style: italic;
          opacity: 0.9;
        }

        .hero-image {
          opacity: 0;
          transform: translateX(50px);
          animation: slideInRight 1s ease-out 0.7s forwards;
        }

        .image-frame {
          position: relative;
          display: inline-block;
        }

        .hero-portrait {
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(212, 175, 127, 0.3);
          transition: transform 0.3s ease;
        }

        .image-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(45deg, var(--soft-gold), transparent, var(--soft-gold));
          border-radius: 25px;
          z-index: -1;
          opacity: 0.5;
          animation: glow 3s ease-in-out infinite alternate;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .scroll-arrow {
          width: 2px;
          height: 40px;
          background: var(--soft-gold);
          position: relative;
          animation: bounce 2s infinite;
        }

        .scroll-arrow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5px;
          width: 12px;
          height: 12px;
          border-right: 2px solid var(--soft-gold);
          border-bottom: 2px solid var(--soft-gold);
          transform: rotate(45deg);
        }

        /* Stats Section */
        .stats-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-black) 100%);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .stat-card {
          text-align: center;
          padding: 40px 20px;
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 15px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .stat-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 127, 0.2);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--soft-gold);
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          color: var(--warm-sand);
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease;
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

        /* Education Timeline */
        .education-section {
          padding: 120px 0;
          background: var(--deep-black);
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--soft-gold), transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.6s ease;
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-item:nth-child(even) {
          transform: translateX(50px);
        }

        .timeline-item:nth-child(even).visible {
          transform: translateX(0);
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 20px;
          transform: translateX(-50%);
          text-align: center;
        }

        .marker-dot {
          width: 20px;
          height: 20px;
          background: var(--soft-gold);
          border-radius: 50%;
          margin: 0 auto 10px;
          box-shadow: 0 0 20px rgba(212, 175, 127, 0.5);
        }

        .marker-year {
          font-size: 0.9rem;
          color: var(--soft-gold);
          font-weight: 600;
        }

        .timeline-content {
          width: 45%;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 55%;
        }

        .education-card {
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 127, 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .degree-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--ivory-cream);
          opacity: 1;
        }

        .achievement-badge {
          background: var(--soft-gold);
          color: var(--deep-black);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .institution-name {
          color: var(--warm-sand);
          font-size: 1.1rem;
        }

        /* Mentorship Section */
        .mentorship-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-black) 100%);
        }

        .mentors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .mentor-card {
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .mentor-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mentor-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(212, 175, 127, 0.2);
        }

        .mentor-image {
          margin-bottom: 25px;
        }

        .image-placeholder {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, var(--soft-gold), var(--muted-honey));
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mentor-initial {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--deep-black);
        }

        .mentor-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--ivory-cream);
          margin-bottom: 8px;
          opacity: 1;
        }

        .mentor-specialty {
          color: var(--soft-gold);
          font-weight: 500;
          margin-bottom: 5px;
        }

        .mentor-institution {
          color: var(--warm-sand);
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .mentor-testimonial {
          font-style: italic;
          color: var(--warm-sand);
          font-size: 0.95rem;
          line-height: 1.6;
          border-left: 3px solid var(--soft-gold);
          padding-left: 15px;
          margin: 0;
        }

        /* Media Section */
        .media-section {
          padding: 120px 0;
          background: var(--deep-black);
          overflow: hidden;
        }

        .media-carousel {
          overflow: hidden;
          position: relative;
        }

        .media-track {
          display: flex;
          gap: 30px;
          animation: scroll 30s linear infinite;
        }

        .media-card {
          min-width: 300px;
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .media-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 127, 0.2);
        }

        .media-logo {
          margin-bottom: 20px;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--soft-gold);
        }

        .media-type {
          font-size: 1.1rem;
          color: var(--ivory-cream);
          margin-bottom: 8px;
        }

        .media-year {
          color: var(--warm-sand);
          font-size: 0.9rem;
        }

        /* Awards Section */
        .awards-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-black) 100%);
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .award-card {
          display: flex;
          align-items: flex-start;
          gap: 25px;
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 20px;
          padding: 40px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .award-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 127, 0.2);
        }

        .award-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .award-year {
          color: var(--soft-gold);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .award-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--ivory-cream);
          margin-bottom: 8px;
          opacity: 1;
        }

        .award-body {
          color: var(--warm-sand);
          font-size: 1rem;
        }

        /* Vision Section */
        .vision-section {
          padding: 120px 0;
          background: var(--deep-black);
        }

        .vision-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .vision-image {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }

        .vision-image.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .portrait-frame {
          position: relative;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(212, 175, 127, 0.3);
        }

        .vision-portrait {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .vision-text {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease;
        }

        .vision-text.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .vision-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: var(--ivory-cream);
          text-shadow: 0 0 15px rgba(212, 175, 127, 0.4);
        }

        .vision-story p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--warm-sand);
          margin-bottom: 25px;
        }

        .signature {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(212, 175, 127, 0.3);
        }

        .signature-text {
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--soft-gold);
          margin-bottom: 5px;
        }

        .signature-title {
          color: var(--warm-sand);
          font-size: 1rem;
        }

        /* Memberships Section */
        .memberships-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, var(--deep-black) 100%);
        }

        .memberships-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .membership-card {
          background: rgba(212, 175, 127, 0.05);
          border: 1px solid rgba(212, 175, 127, 0.2);
          border-radius: 15px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .membership-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .membership-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(212, 175, 127, 0.2);
        }

        .membership-logo {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--soft-gold), var(--muted-honey));
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--deep-black);
        }

        .membership-card h3 {
          font-size: 1.1rem;
          color: var(--ivory-cream);
          margin-bottom: 8px;
        }

        .membership-card p {
          color: var(--warm-sand);
          font-size: 0.9rem;
        }

        /* Animations */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          from {
            opacity: 0.3;
          }
          to {
            opacity: 0.7;
          }
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

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content,
          .vision-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .hero-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .stats-grid,
          .mentors-grid,
          .memberships-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .awards-grid {
            grid-template-columns: 1fr;
          }

          .timeline-content {
            width: 80%;
            margin-left: 20% !important;
          }

          .timeline::before {
            left: 10%;
          }

          .timeline-marker {
            left: 10%;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-grid,
          .mentors-grid,
          .memberships-grid {
            grid-template-columns: 1fr;
          }

          .hero-content,
          .vision-content {
            gap: 40px;
          }

          .container {
            padding: 0 15px;
          }

          .media-card {
            min-width: 250px;
          }
        }
        `}</style>
    </div>
  );
} 