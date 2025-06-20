"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import SectionHeading from "@/app/Components/SectionHeading";
import Spacing from "@/app/Components/Spacing";
import Button from "@/app/Components/Buttons";

export default function PlexerProPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const advantages = [
    { title: "No Downtime", icon: "⚡" },
    { title: "Safe", icon: "🛡️" },
    { title: "Non-Invasive", icon: "✨" },
    { title: "Painless", icon: "💆" },
    { title: "Cost Effective", icon: "💰" },
    { title: "Low Risk", icon: "🔒" },
    { title: "Immediate & Long-Lasting Results", icon: "🎯" }
  ];

  const conditions = [
    "Moles", "Hooded Eyelids", "Pigment Correction / Keratosis", 
    "Fine Lines and Wrinkles", "Xanthelasma", "Other Skin Blemishes"
  ];

  const treatmentSlides = [
    {
      id: 1,
      title: "Mole Removal",
      image: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/treatments/mole-removal.jpg",
      description: "Safe and precise mole removal without scarring"
    },
    {
      id: 2,
      title: "Hooded Eyelids",
      image: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/treatments/hooded-eyelids.jpg",
      description: "Non-surgical eyelid lifting for youthful appearance"
    },
    {
      id: 3,
      title: "Fine Lines & Wrinkles",
      image: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/treatments/wrinkles.jpg",
      description: "Skin tightening for smoother, younger-looking skin"
    },
    {
      id: 4,
      title: "Pigmentation Correction",
      image: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/treatments/pigmentation.jpg",
      description: "Even skin tone and texture improvement"
    },
    {
      id: 5,
      title: "Xanthelasma Treatment",
      image: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/treatments/xanthelasma.jpg",
      description: "Effective removal of cholesterol deposits around eyes"
    },
    {
      id: 6,
      title: "Skin Blemishes",
      image: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/treatments/blemishes.jpg",
      description: "Clear, flawless skin without imperfections"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      {/* Full-Width Hero Banner */}
      <section className="cs_hero_section position-relative overflow-hidden">
        <div 
          className="cs_hero_bg"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Floating Badge */}
          <div 
            className="position-absolute"
            style={{
              top: '120px',
              right: '30px',
              background: 'linear-gradient(45deg, #D4AF7F, #E3C16F)',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#1A1A1A',
              zIndex: 10,
              boxShadow: '0 4px 15px rgba(212, 175, 127, 0.3)'
            }}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Exclusive to India – Only at Clinica Fai
          </div>

          {/* Hero Content */}
          <div className="container-fluid">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-12 text-center">
                <div data-aos="fade-up" data-aos-delay="200">
                  <p 
                    style={{
                      color: '#D4AF7F',
                      fontSize: '1.2rem',
                      fontWeight: '500',
                      marginBottom: '20px',
                      letterSpacing: '2px'
                    }}
                  >
                    First in India – Only at Clinica Fai
                  </p>
                  <h1 
                    style={{
                      color: '#FCF7F0',
                      fontSize: 'clamp(3rem, 8vw, 6rem)',
                      fontWeight: '700',
                      marginBottom: '30px',
                      background: 'linear-gradient(45deg, #FCF7F0, #D4AF7F)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: '1.2'
                    }}
                  >
                    Plexr PRO
                  </h1>
                  <h2 
                    style={{
                      color: '#D4AF7F',
                      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                      fontWeight: '400',
                      marginBottom: '40px'
                    }}
                  >
                    The Future of Aesthetics
                  </h2>
                  <p 
                    style={{
                      color: '#E8DCC2',
                      fontSize: '1.3rem',
                      maxWidth: '800px',
                      margin: '0 auto',
                      lineHeight: '1.6'
                    }}
                  >
                    Innovative soft surgery that redefines non-invasive beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div 
            className="position-absolute"
            style={{
              bottom: '0',
              left: '0',
              width: '100%',
              height: '200px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(26, 26, 26, 0.8) 100%)',
              zIndex: 1
            }}
          />
        </div>
      </section>

      <Spacing lg="80" md="50" />

      {/* What is Plexr PRO - Split Layout */}
      <section className="position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-right">
                <SectionHeading
                  SectionSubtitle="Revolutionary Technology"
                  SectionTitle="What is Plexr PRO?"
                />
                <Spacing lg="30" md="20" />
                <p 
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#666666',
                    marginBottom: '30px'
                  }}
                >
                  Plexr PRO is an innovative soft surgery treatment that uses a focused plasma arc to stimulate instant skin contraction, tighten tissues, and remove surface blemishes — all without cutting or downtime. It's the next big thing in global aesthetic medicine, now available first in India, only at Clinica Fai.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div 
                className="text-center"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div 
                  style={{
                    width: '400px',
                    height: '400px',
                    background: 'linear-gradient(135deg, #D4AF7F20, #E3C16F20)',
                    borderRadius: '50%',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #D4AF7F',
                    position: 'relative',
                    maxWidth: '100%'
                  }}
                >
                  <div 
                    style={{
                      fontSize: '4rem',
                      color: '#D4AF7F'
                    }}
                  >
                    ⚡
                  </div>
                  <div 
                    className="position-absolute"
                    style={{
                      top: '-10px',
                      right: '-10px',
                      width: '80px',
                      height: '80px',
                      background: '#D4AF7F',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1A1A1A',
                      fontWeight: 'bold',
                      animation: 'pulse 2s infinite'
                    }}
                  >
                    PLASMA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Spacing lg="100" md="60" />

      {/* Plexr PRO Treatment Slider */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #FCF7F0 0%, #E8DCC2 50%, #D4AF7F 100%)',
          padding: '100px 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <SectionHeading
              SectionSubtitle="Treatment Showcase"
              SectionTitle="Plexr PRO is used to treat"
              variant="text-center"
            />
          </div>
          <Spacing lg="60" md="40" />
          
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div 
                data-aos="fade-up" 
                data-aos-delay="200"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '2px solid #D4AF7F',
                  boxShadow: '0 20px 60px rgba(212, 175, 127, 0.3)'
                }}
              >
                <Slider {...sliderSettings}>
                  {treatmentSlides.map((slide) => (
                    <div key={slide.id} className="treatment-slide">
                      <div 
                        style={{
                          textAlign: 'center',
                          padding: '20px'
                        }}
                      >
                        <div 
                          style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: '350px',
                            margin: '0 auto',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(212, 175, 127, 0.2)',
                            marginBottom: '30px',
                            position: 'relative'
                          }}
                        >
                          <img 
                            src={slide.image}
                            alt={slide.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease'
                            }}
                            onError={(e) => {
                              e.target.src = `/assets/img/service_${slide.id}.jpg`;
                            }}
                          />
                                                     <div 
                             style={{
                               position: 'absolute',
                               bottom: '0',
                               left: '0',
                               right: '0',
                               background: 'linear-gradient(transparent, rgba(26, 26, 26, 0.9))',
                               padding: '20px',
                               color: '#FFFFFF'
                             }}
                           >
                             <h3 
                               style={{
                                 color: '#D4AF7F',
                                 fontSize: '1.8rem',
                                 fontWeight: '600',
                                 margin: '0 0 10px 0'
                               }}
                             >
                               {slide.title}
                             </h3>
                             <p 
                               style={{
                                 color: '#FFFFFF',
                                 fontSize: '1.1rem',
                                 margin: '0',
                                 lineHeight: '1.5'
                               }}
                             >
                               {slide.description}
                             </p>
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Spacing lg="100" md="60" />

      {/* Key Advantages - Icon Grid */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #FCF7F0 0%, #E8DCC2 100%)',
          padding: '80px 0'
        }}
      >
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <SectionHeading
              SectionSubtitle="Why Choose Plexr PRO"
              SectionTitle="Key Advantages"
              variant="text-center"
            />
          </div>
          <Spacing lg="60" md="40" />
          <div className="row">
            {advantages.map((advantage, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div 
                  className="text-center h-100 advantage-card"
                  style={{
                    background: '#FFFFFF',
                    padding: '40px 20px',
                    borderRadius: '20px',
                    border: '2px solid #D4AF7F',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(212, 175, 127, 0.1)'
                  }}
                  data-aos="fade-right"
                  data-aos-delay={index * 150}
                  data-aos-duration="800"
                  data-aos-easing="ease-out-cubic"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-10px)';
                    e.target.style.background = '#D4AF7F';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = '#FFFFFF';
                    e.target.style.color = '#000000';
                  }}
                >
                  <div 
                    style={{
                      fontSize: '3rem',
                      marginBottom: '20px'
                    }}
                  >
                    {advantage.icon}
                  </div>
                  <h4 
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      margin: '0'
                    }}
                  >
                    {advantage.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Spacing lg="100" md="60" />

      {/* Conditions Treated - Treatment Chips */}
      <section className="position-relative">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <SectionHeading
              SectionSubtitle="Treatment Areas"
              SectionTitle="Conditions We Treat"
              variant="text-center"
            />
          </div>
          <Spacing lg="60" md="40" />
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div 
                className="d-flex flex-wrap justify-content-center gap-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {conditions.map((condition, index) => (
                  <div 
                    key={index}
                    style={{
                      background: 'linear-gradient(45deg, #1A1A1A, #2A2A2A)',
                      color: '#D4AF7F',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      border: '2px solid #D4AF7F',
                      fontSize: '1rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      boxShadow: '0 5px 15px rgba(212, 175, 127, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(45deg, #D4AF7F, #E3C16F)';
                      e.target.style.color = '#1A1A1A';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'linear-gradient(45deg, #1A1A1A, #2A2A2A)';
                      e.target.style.color = '#D4AF7F';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {condition}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Spacing lg="100" md="60" />

      {/* Book Now CTA Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #FCF7F0 0%, #FFFFFF 100%)',
          padding: '100px 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div data-aos="fade-up">
                <h2 
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    marginBottom: '30px'
                  }}
                >
                  Your Transformation Starts Today
                </h2>
                <p 
                  style={{
                    fontSize: '1.3rem',
                    color: '#666666',
                    marginBottom: '50px',
                    lineHeight: '1.6'
                  }}
                >
                  Let us help you uncover the confidence beneath your skin.
                </p>
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                  <Button
                    btnUrl="/appointments"
                    btnText="Book An Appointment"
                    variant="cs_btn cs_style_1 cs_color_1"
                  />
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(45deg, #25D366, #128C7E)',
                      color: '#FFFFFF',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <span>📱</span>
                    WhatsApp for Faster Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Bar */}
      <section 
        style={{
          background: 'linear-gradient(90deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)',
          padding: '60px 0'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="0">
              <div style={{ color: '#D4AF7F', fontSize: '3rem', marginBottom: '20px' }}>🔬</div>
              <h4 style={{ color: '#FCF7F0', fontWeight: '600', marginBottom: '10px' }}>Technology</h4>
              <p style={{ color: '#E8DCC2' }}>Latest plasma technology from Europe</p>
            </div>
            <div className="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="200">
              <div style={{ color: '#D4AF7F', fontSize: '3rem', marginBottom: '20px' }}>👨‍⚕️</div>
              <h4 style={{ color: '#FCF7F0', fontWeight: '600', marginBottom: '10px' }}>Expertise</h4>
              <p style={{ color: '#E8DCC2' }}>Certified specialists with years of experience</p>
            </div>
            <div className="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="400">
              <div style={{ color: '#D4AF7F', fontSize: '3rem', marginBottom: '20px' }}>🛡️</div>
              <h4 style={{ color: '#FCF7F0', fontWeight: '600', marginBottom: '10px' }}>Safety</h4>
              <p style={{ color: '#E8DCC2' }}>Highest safety standards and protocols</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .cs_hero_section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(212, 175, 127, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(227, 193, 111, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
      `}</style>
    </>
  );
}