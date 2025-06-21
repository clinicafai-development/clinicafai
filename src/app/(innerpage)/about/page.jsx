"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

    return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="video-overlay"></div>
          <div className="floating-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            More Than Skin Deep
            <span className="shimmer-text">The Vision of Dr. Shubhra Goel</span>
          </h1>
          <p className="hero-subtitle">Where Science Meets Artistry, and Dreams Take Shape</p>
          <button className="cta-button">
            <span>Meet the Team</span>
            <div className="pulse-ring"></div>
          </button>
        </div>
      </section>

      {/* Meet Dr. Shubhra Goel */}
      <section className="doctor-section">
        <div className="container">
          <div className="doctor-content">
            <div className="doctor-image">
              <div className="image-frame">
                <Image
                  src="/assets/img/doctor_details_1.jpeg"
                  alt="Dr. Shubhra Goel"
                  width={500}
                  height={600}
                  className="doctor-portrait"
                />
              </div>
            </div>

            <div className="doctor-info">
              <h2 className="doctor-name">Dr. Shubhra Goel</h2>
              <p className="doctor-title">Founder & Chief Medical Officer</p>
              
              <div className="bio-section">
                <p className="bio-text">
                  "My journey in aesthetic medicine began with a simple belief: every person deserves to feel confident in their own skin. After years of rigorous training at prestigious institutions, I founded Clinica Fai to create a sanctuary where cutting-edge science meets artistic vision."
                </p>
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

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .doctor-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .container {
            padding: 0 15px;
          }
        }
      `}</style>
        </div>
    );
}
