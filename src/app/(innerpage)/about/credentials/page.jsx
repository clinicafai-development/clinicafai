import React from 'react';

export default function Credentials() {
  return (
    <div style={{minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)'}}>
      <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: 40, maxWidth: 500, width: '100%', textAlign: 'center'}}>
        <img src="https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/drshubhralandingpage1//drpic-1.jpg" alt="Dr. Shubhra Goel" style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginBottom: 24, border: '4px solid #e0e7ef'}} />
        <h1 style={{fontWeight: 700, fontSize: 32, marginBottom: 8}}>Dr. Shubhra Goel</h1>
        <h2 style={{fontWeight: 400, fontSize: 20, color: '#6b7280', marginBottom: 24}}>Credentials</h2>
        <ul style={{textAlign: 'left', margin: '0 auto', maxWidth: 350, fontSize: 18, color: '#374151', lineHeight: 1.7}}>
          <li style={{marginBottom: 10, animation: 'fadeIn 0.7s'}}>MBBS, MS - Ophthalmology</li>
          <li style={{marginBottom: 10, animation: 'fadeIn 1s'}}>Fellowship in Oculoplasty, Orbit & Oncology</li>
          <li style={{marginBottom: 10, animation: 'fadeIn 1.3s'}}>Gold Medalist, AIIMS</li>
          <li style={{marginBottom: 10, animation: 'fadeIn 1.6s'}}>Member, All India Ophthalmological Society</li>
          <li style={{marginBottom: 10, animation: 'fadeIn 1.9s'}}>International Speaker & Author</li>
        </ul>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          ul li { opacity: 0; animation-fill-mode: forwards; }
          ul li:nth-child(1) { animation-delay: 0.2s; }
          ul li:nth-child(2) { animation-delay: 0.4s; }
          ul li:nth-child(3) { animation-delay: 0.6s; }
          ul li:nth-child(4) { animation-delay: 0.8s; }
          ul li:nth-child(5) { animation-delay: 1s; }
        `}</style>
      </div>
    </div>
  );
} 