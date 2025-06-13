"use client";
import React from "react";
import SectionHeading from "./SectionHeading";

const treatments = [
  { name: 'Laser Eye Surgery', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80', desc: 'Advanced laser procedures for vision correction.' },
  { name: 'Oculoplasty', img: 'https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=facearea&w=400&q=80', desc: 'Cosmetic and reconstructive surgery for the eye region.' },
  { name: 'Cataract Surgery', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80', desc: 'State-of-the-art cataract removal and lens implantation.' },
];

export default function BestTreatmentsSection() {
  return (
    <section style={{margin: '70px 0'}}>
      <SectionHeading SectionSubtitle="OUR BEST TREATMENTS" variant="text-center" />
      <div className="best-treatments-grid">
        {treatments.map((treatment, idx) => (
          <div key={idx} className="treatment-card">
            <img src={treatment.img} alt={treatment.name} style={{width: 120, height: 120, borderRadius: 16, objectFit: 'cover', marginBottom: 16}} />
            <h3 style={{fontSize: 22, fontWeight: 600, marginBottom: 8}}>{treatment.name}</h3>
            <p style={{fontSize: 16, color: '#607d8b'}}>{treatment.desc}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .best-treatments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }
        .treatment-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          padding: 32px;
          text-align: center;
          transition: transform 0.2s;
          cursor: pointer;
        }
        .treatment-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
} 