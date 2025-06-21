"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activePhilosophy, setActivePhilosophy] = useState(null);

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

  const timelineData = [
    {
      year: "2005",
      title: "The Dream Begins",
      description: "Started medical journey at AIIMS with a vision to merge science with beauty",
      icon: "🌟"
    },
    {
      year: "2011",
      title: "Academic Excellence",
      description: "Graduated as Gold Medalist from AIIMS, setting foundation for expertise",
      icon: "🏆"
    },
    {
      year: "2015",
      title: "Specialized Training",
      description: "Completed MS in Ophthalmology with distinction, focusing on oculoplasty",
      icon: "👁️"
    },
    {
      year: "2018",
      title: "International Exposure",
      description: "Advanced fellowship at Moorfields Eye Hospital, London - global perspective",
      icon: "🌍"
    },
    {
      year: "2020",
      title: "Clinica Fai Born",
      description: "Founded Clinica Fai with a mission to redefine aesthetic medicine in India",
      icon: "✨"
    },
    {
      year: "2024",
      title: "Leading Innovation",
      description: "Pioneering advanced treatments, trusted by thousands across the globe",
      icon: "🚀"
    }
  ];

  const philosophyData = [
    {
      icon: "💎",
      title: "Integrity",
      description: "Every treatment begins with honest consultation and transparent communication",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: "🔬",
      title: "Innovation", 
      description: "Embracing cutting-edge technology while respecting time-tested medical principles",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: "🎨",
      title: "Elegance",
      description: "Crafting natural beauty that enhances your unique features and confidence",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      icon: "💪",
      title: "Empowerment",
      description: "Helping you feel confident, radiant, and authentically yourself",
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="video-overlay"></div>
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text animate-on-scroll" id="hero-text">
            <h1 className="hero-title">
              More Than Skin Deep
              <span className="shimmer-text">The Vision of Dr. Shubhra Goel</span>
            </h1>
            <p className="hero-subtitle">Where Science Meets Artistry, and Dreams Take Shape</p>
            <button className="cta-button" onClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Meet the Team</span>
              <div className="pulse-ring"></div>
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="golden-arrow"></div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="timeline-header">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">A journey of passion, precision, and purpose</p>
          </div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className={`timeline-item animate-on-scroll ${isVisible[`timeline-${index}`] ? 'visible' : ''}`} id={`timeline-${index}`}>
                <div className="timeline-marker">
                  <div className="golden-orb">{item.icon}</div>
                  <div className="year-badge">{item.year}</div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-card" onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Dr. Shubhra Goel */}
      <section className="doctor-section" id="team-section">
        <div className="container">
          <div className="doctor-content">
            <div className="doctor-image animate-on-scroll" id="doctor-image">
              <div className="image-frame">
                <Image
                  src="/assets/img/doctor_details_1.jpeg"
                  alt="Dr. Shubhra Goel"
                  width={500}
                  height={600}
                  className="doctor-portrait"
                />
                <div className="signature-overlay">
                  <svg viewBox="0 0 200 60" className="animated-signature">
                    <path d="M10,30 Q50,10 90,30 T170,30" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="doctor-info animate-on-scroll" id="doctor-info">
              <h2 className="doctor-name">Dr. Shubhra Goel</h2>
              <p className="doctor-title">Founder & Chief Medical Officer</p>
              
              <div className="bio-section">
                <p className="bio-text">
                  "My journey in aesthetic medicine began with a simple belief: every person deserves to feel confident in their own skin. After years of rigorous training at prestigious institutions and learning from the world's finest mentors, I founded Clinica Fai to create a sanctuary where cutting-edge science meets artistic vision."
                </p>
                
                <div className="interactive-bio">
                  <div className="bio-tabs">
                    <button className="bio-tab active" onClick={(e) => {
                      document.querySelectorAll('.bio-tab').forEach(t => t.classList.remove('active'));
                      document.querySelectorAll('.bio-content').forEach(c => c.classList.remove('active'));
                      e.target.classList.add('active');
                      document.getElementById('philosophy-content')?.classList.add('active');
                    }}>Philosophy</button>
                    <button className="bio-tab" onClick={(e) => {
                      document.querySelectorAll('.bio-tab').forEach(t => t.classList.remove('active'));
                      document.querySelectorAll('.bio-content').forEach(c => c.classList.remove('active'));
                      e.target.classList.add('active');
                      document.getElementById('interests-content')?.classList.add('active');
                    }}>Interests</button>
                    <button className="bio-tab" onClick={(e) => {
                      document.querySelectorAll('.bio-tab').forEach(t => t.classList.remove('active'));
                      document.querySelectorAll('.bio-content').forEach(c => c.classList.remove('active'));
                      e.target.classList.add('active');
                      document.getElementById('mission-content')?.classList.add('active');
                    }}>Mission</button>
                  </div>
                  
                  <div className="bio-content active" id="philosophy-content">
                    <p>"True beauty enhancement comes from understanding each patient's unique features and desires, then applying medical expertise with an artist's eye."</p>
                  </div>
                  
                  <div className="bio-content" id="interests-content">
                    <p>"Beyond medicine, I'm passionate about photography, classical music, and traveling to discover beauty in different cultures around the world."</p>
                  </div>
                  
                  <div className="bio-content" id="mission-content">
                    <p>"To democratize access to world-class aesthetic treatments while maintaining the highest standards of safety, ethics, and patient care."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="philosophy-header">
            <h2 className="section-title">Our Philosophy</h2>
            <p className="section-subtitle">The principles that guide every treatment, every consultation</p>
          </div>

          <div className="philosophy-grid">
            {philosophyData.map((item, index) => (
              <div 
                key={index} 
                className={`philosophy-card animate-on-scroll ${isVisible[`philosophy-${index}`] ? 'visible' : ''}`} 
                id={`philosophy-${index}`}
                onMouseEnter={() => setActivePhilosophy(index)}
                onMouseLeave={() => setActivePhilosophy(null)}
              >
                <div className={`philosophy-icon bg-gradient-to-br ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="philosophy-title">{item.title}</h3>
                <p className="philosophy-description">{item.description}</p>
                <div className={`philosophy-glow ${activePhilosophy === index ? 'active' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Vibe Section */}
      <section className="clinic-vibe-section">
        <div className="container">
          <div className="section-header animate-on-scroll" id="vibe-header">
            <h2 className="section-title">Experience Clinica Fai</h2>
            <p className="section-subtitle">Step into our world of elegance and expertise</p>
          </div>

          <div className="vibe-content">
            <div className="video-reel animate-on-scroll" id="video-reel">
              <div className="video-container">
                <Image
                  src="/assets/img/about_img_1.jpg"
                  alt="Clinica Fai Interior"
                  width={600}
                  height={400}
                  className="clinic-image"
                />
                <div className="video-overlay">
                  <div className="play-button" onClick={() => {
                    console.log('Play full video');
                  }}>
                    <span>▶</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="welcome-message animate-on-scroll" id="welcome-message">
              <div className="message-card">
                <h3>Welcome to Clinica Fai</h3>
                <p>"Every corner of our clinic is designed with your comfort and confidence in mind. From the moment you step in, you'll feel the warmth of our care and the promise of transformation."</p>
                <div className="audio-message">
                  <button className="audio-play-btn">
                    <span className="audio-icon">🎵</span>
                    <span>Listen to Dr. Shubhra's Welcome</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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
          background: linear-gradient(135deg, #0F0F0F 0%, #1a1a1a 50%, #0F0F0F 100%);
          z-index: 1;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 20%, rgba(15, 15, 15, 0.4) 100%);
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #D4AF37;
          border-radius: 50%;
          animation: float linear infinite;
          opacity: 0.6;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 30px;
          opacity: 0;
          animation: titleReveal 2s ease-out 0.5s forwards;
        }

        .shimmer-text {
          display: block;
          background: linear-gradient(90deg, #D4AF37 0%, #F4E4A6 50%, #D4AF37 100%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #E8DCCA;
          margin-bottom: 40px;
          opacity: 0;
          animation: titleReveal 2s ease-out 1s forwards;
        }

        .cta-button {
          position: relative;
          background: linear-gradient(135deg, #D4AF37, #F4E4A6);
          color: #0F0F0F;
          border: none;
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          animation: titleReveal 2s ease-out 1.5s forwards;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border: 2px solid #D4AF37;
          border-radius: 50px;
          transform: translate(-50%, -50%);
          animation: pulse 2s infinite;
          opacity: 0;
        }

        .cta-button:hover .pulse-ring {
          opacity: 1;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .golden-arrow {
          width: 2px;
          height: 40px;
          background: #D4AF37;
          position: relative;
          animation: bounce 2s infinite;
        }

        .golden-arrow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5px;
          width: 12px;
          height: 12px;
          border-right: 2px solid #D4AF37;
          border-bottom: 2px solid #D4AF37;
          transform: rotate(45deg);
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

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #FDFDFD;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #E8DCCA;
          opacity: 0.9;
        }

        /* Timeline Section */
        .timeline-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0F0F0F 0%, #1a1a1a 100%);
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #D4AF37, transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
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
          z-index: 2;
        }

        .golden-orb {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #D4AF37, #F4E4A6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 15px;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .golden-orb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.8);
        }

        .year-badge {
          background: #0F0F0F;
          color: #D4AF37;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          border: 2px solid #D4AF37;
        }

        .timeline-content {
          width: 40%;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 60%;
        }

        .timeline-card {
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .timeline-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #D4AF37;
        }

        .timeline-card p {
          color: #E8DCCA;
          line-height: 1.6;
        }

        /* Doctor Section */
        .doctor-section {
          padding: 120px 0;
          background: #0F0F0F;
        }

        .doctor-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .doctor-image {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }

        .image-frame {
          position: relative;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(212, 175, 55, 0.3);
        }

        .doctor-portrait {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .signature-overlay {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 150px;
          height: 50px;
          color: #D4AF37;
        }

        .animated-signature path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawSignature 3s ease-in-out 2s forwards;
        }

        @keyframes drawSignature {
          to {
            stroke-dashoffset: 0;
          }
        }

        .doctor-info {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease;
        }

        .doctor-name {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #FDFDFD;
          text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }

        .doctor-title {
          color: #D4AF37;
          font-size: 1.3rem;
          margin-bottom: 30px;
        }

        .bio-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #E8DCCA;
          margin-bottom: 30px;
          font-style: italic;
        }

        .interactive-bio {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 15px;
          padding: 30px;
        }

        .bio-tabs {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .bio-tab {
          background: transparent;
          border: 2px solid rgba(212, 175, 55, 0.3);
          color: #E8DCCA;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .bio-tab.active,
        .bio-tab:hover {
          background: #D4AF37;
          border-color: #D4AF37;
          color: #0F0F0F;
        }

        .bio-content {
          display: none;
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }

        .bio-content.active {
          display: block;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Philosophy Section */
        .philosophy-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #0F0F0F 100%);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .philosophy-card {
          position: relative;
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 25px;
          padding: 40px;
          text-align: center;
          transition: all 0.5s ease;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
          overflow: hidden;
        }

        .philosophy-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .philosophy-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.2);
        }

        .philosophy-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #0F0F0F;
          transition: transform 0.3s ease;
        }

        .philosophy-card:hover .philosophy-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .philosophy-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #FDFDFD;
          margin-bottom: 15px;
        }

        .philosophy-description {
          color: #E8DCCA;
          line-height: 1.6;
        }

        .philosophy-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .philosophy-glow.active {
          opacity: 1;
        }

        /* Clinic Vibe Section */
        .clinic-vibe-section {
          padding: 120px 0;
          background: #0F0F0F;
        }

        .vibe-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .video-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(212, 175, 55, 0.3);
        }

        .clinic-image {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 15, 15, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .video-container:hover .video-overlay {
          opacity: 1;
        }

        .play-button {
          width: 70px;
          height: 70px;
          background: #D4AF37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #0F0F0F;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
        }

        .message-card {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          padding: 40px;
        }

        .message-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #D4AF37;
          margin-bottom: 20px;
        }

        .message-card p {
          color: #E8DCCA;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .audio-play-btn {
          background: linear-gradient(135deg, #D4AF37, #F4E4A6);
          color: #0F0F0F;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .audio-play-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .doctor-content,
          .vibe-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
          
          .philosophy-grid {
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
          
          .container {
            padding: 0 15px;
          }
          
          .timeline-content {
            width: 100%;
            margin-left: 0 !important;
          }
          
          .timeline::before {
            left: 30px;
          }
          
          .timeline-marker {
            left: 30px;
          }
        }
      `}</style>
    </div>
  );
} 