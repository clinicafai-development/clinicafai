"use client";
import React from "react";
import SectionHeading from "./SectionHeading";

const treatments = [
  {
    name: 'Bye Bye Dark Circles®',
    img: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Bye-Bye-1-ppnt7m40795wyhpnhtvfgmq6wt700fe2hw9kyys6ys.png',
    desc: 'Our proprietary treatment is inspired by Dr. Goel\'s personal experience. She is now on a mission to eliminate Dark Circles through her unique and personalised treatment plan.'
  },
  {
    name: 'No More Baggy / Puffy Eyelids®',
    img: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Baggy-puffy-pppgtkl95oth1il7lxjohltu6e1i7rozvefp5uy7gk.png',
    desc: 'This proprietary treatment is a special area of interest for Dr. Shubhra Goel. These are more complex treatments but have major emotional impact on the emotional quotient of the face.'
  },
  {
    name: 'Correction Of Treatments Gone Wrong',
    img: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Correction-Of-Treatments-1-ppnt9b7ijhhjx58wl2a6gpb5iutuwr4meao55y9lqc.png',
    desc: 'Dr. Shubhra\'s unique approach to emotional and physical healing has delivered amazing results in cases of previously botched-up eyelid surgeries, cosmetic injectables, and fillers.'
  }
];

export default function BestTreatmentsSection() {
  return (
    <section className="cs_star_treatments_section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="cs_section_title">Our Star Treatments</h2>
          <p className="cs_section_subtitle">Specialized Proprietary Treatment For Eye And Face Conditions</p>
        </div>
        <div className="cs_treatments_grid">
          {treatments.map((treatment, idx) => (
            <div key={idx} className="cs_treatment_card">
              <div className="cs_treatment_image">
                <img src={treatment.img} alt={treatment.name} />
              </div>
              <h3 className="cs_treatment_title">{treatment.name}</h3>
              <p className="cs_treatment_desc">{treatment.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .cs_star_treatments_section {
          padding: 80px 0;
          background: #fff;
        }
        .cs_section_title {
          font-size: 42px;
          color: #C1A87D;
          margin-bottom: 16px;
          font-weight: 500;
        }
        .cs_section_subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 48px;
        }
        .cs_treatments_grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cs_treatment_card {
          text-align: center;
          padding: 20px;
        }
        .cs_treatment_image {
          width: 200px;
          height: 200px;
          margin: 0 auto 24px;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid #F5EFE6;
        }
        .cs_treatment_image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cs_treatment_title {
          font-size: 24px;
          color: #333;
          margin-bottom: 16px;
          font-weight: 500;
        }
        .cs_treatment_desc {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
        }
        @media (max-width: 992px) {
          .cs_treatments_grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .cs_treatments_grid {
            grid-template-columns: 1fr;
          }
          .cs_treatment_image {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
} 