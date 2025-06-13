"use client";
import React from "react";
import SectionHeading from "./SectionHeading";

const team = [
  { name: 'Dr. Shubhra Goel', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80', role: 'Oculoplastic Surgeon' },
  { name: 'Dr. John Smith', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&q=80', role: 'Retina Specialist' },
  { name: 'Dr. Jane Doe', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80', role: 'Cornea Specialist' },
];

export default function OurTeamSection() {
  return (
    <section style={{margin: '70px 0'}}>
      <SectionHeading SectionSubtitle="OUR TEAM MEMBERS" variant="text-center" />
      <div className="team-grid">
        {team.map((member, idx) => (
          <div key={idx} className="team-card">
            <img src={member.img} alt={member.name} style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginBottom: 16}} />
            <h3 style={{fontSize: 22, fontWeight: 600, marginBottom: 4}}>{member.name}</h3>
            <p style={{fontSize: 16, color: '#607d8b'}}>{member.role}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .team-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 32px;
        }
        .team-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          padding: 32px 24px;
          text-align: center;
          min-width: 220px;
          max-width: 260px;
          transition: transform 0.2s;
        }
        .team-card:hover {
          transform: translateY(-8px) scale(1.04);
        }
      `}</style>
    </section>
  );
} 