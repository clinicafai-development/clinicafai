"use client";
import React from 'react';
import SectionHeading from './SectionHeading';

const treatmentData = [
  {
    id: 1,
    title: 'Bye Bye Dark Circles©',
    iconUrl: '/assets/img/icons/service_icon_15.png',
  },
  {
    id: 2,
    title: 'Correction Of Treatments Gone Wrong',
    iconUrl: '/assets/img/icons/service_icon_16.png',
  },
  {
    id: 3,
    title: 'No More Baggy Eyes©',
    iconUrl: '/assets/img/icons/service_icon_17.png',
  },
  {
    id: 4,
    title: 'Non-Surgical Blepharoplasty (Plexr)',
    iconUrl: '/assets/img/icons/service_icon_18.png',
  },
  {
    id: 5,
    title: 'Plasma Facial (Plexr)',
    iconUrl: '/assets/img/icons/service_icon_19.png',
  },
  {
    id: 6,
    title: 'Scar Treatment (Plexr)',
    iconUrl: '/assets/img/icons/service_icon_20.png',
  },
  {
    id: 7,
    title: 'Warts, Moles, Stye And Chalazion(Plexr)',
    iconUrl: '/assets/img/icons/service_icon_21.png',
  },
  {
    id: 8,
    title: 'Wrinkles And Fine Lines (Plexr)',
    iconUrl: '/assets/img/icons/service_icon_1.png',
  },
  {
    id: 9,
    title: 'Xanthelasma (Plexr)',
    iconUrl: '/assets/img/icons/service_icon_2.png',
  },
];

const UniqueClinicaFaiTreatmentSection = () => {
  return (
    <section className="unique-treatment-section">
      <div className="container">
        <SectionHeading
          SectionSubtitle="OUR SPECIALTIES"
          SectionTitle="Unique Clinica Fai Treatment"
          variant="text-center"
        />
        
        <div className="treatments-grid">
          {treatmentData.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <div className="treatment-icon">
                <img src={treatment.iconUrl} alt={treatment.title} />
              </div>
              <h3 className="treatment-title">{treatment.title}</h3>
              <div className="treatment-hover-overlay">
                <span className="learn-more">Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .unique-treatment-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
          position: relative;
        }

        .unique-treatment-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/assets/img/service_bg_2.jpg') center/cover;
          opacity: 0.05;
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .treatment-card {
          background: #fff;
          border-radius: 16px;
          padding: 40px 25px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 188, 212, 0.1);
        }

        .treatment-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 188, 212, 0.15);
          border-color: #00bcd4;
        }

        .treatment-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .treatment-card:hover .treatment-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .treatment-icon img {
          width: 35px;
          height: 35px;
          filter: brightness(0) invert(1);
        }

        .treatment-title {
          font-size: 18px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .treatment-card:hover .treatment-title {
          color: #00bcd4;
        }

        .treatment-hover-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00bcd4 0%, #0097a7 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .treatment-card:hover .treatment-hover-overlay {
          transform: scaleX(1);
        }

        .learn-more {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          color: #00bcd4;
          font-size: 14px;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .treatment-card:hover .learn-more {
          opacity: 1;
        }

        /* Special styling for trademark symbols */
        .treatment-title:has-text('©') {
          position: relative;
        }

        @media (max-width: 768px) {
          .unique-treatment-section {
            padding: 60px 0;
          }

          .treatments-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 40px;
          }

          .treatment-card {
            padding: 30px 20px;
          }

          .treatment-title {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .treatments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default UniqueClinicaFaiTreatmentSection; 