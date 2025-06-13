import React, { useState } from 'react';

const treatments = [
  { name: 'Laser Eye Surgery', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80', desc: 'Advanced laser procedures for vision correction.' },
  { name: 'Oculoplasty', img: 'https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=facearea&w=400&q=80', desc: 'Cosmetic and reconstructive surgery for the eye region.' },
  { name: 'Cataract Surgery', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80', desc: 'State-of-the-art cataract removal and lens implantation.' },
];

export default function OurTreatment() {
  const [active, setActive] = useState(0);
  return (
    <div style={{minHeight: '80vh', background: 'linear-gradient(120deg, #e0f7fa 0%, #f8fafc 100%)', padding: '60px 0'}}>
      <h1 style={{textAlign: 'center', fontWeight: 700, fontSize: 36, marginBottom: 40}}>Our Treatment</h1>
      <div style={{display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 32}}>
        {treatments.map((t, idx) => (
          <button key={t.name} onClick={() => setActive(idx)} style={{padding: '12px 28px', borderRadius: 24, border: 'none', background: idx === active ? '#00bcd4' : '#e0e7ef', color: idx === active ? '#fff' : '#374151', fontWeight: 600, fontSize: 18, cursor: 'pointer', transition: 'background 0.2s'}}>{t.name}</button>
        ))}
      </div>
      <div style={{maxWidth: 500, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: 32, textAlign: 'center'}}>
        <img src={treatments[active].img} alt={treatments[active].name} style={{width: 180, height: 180, borderRadius: 16, objectFit: 'cover', marginBottom: 24}} />
        <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 12}}>{treatments[active].name}</h2>
        <p style={{fontSize: 18, color: '#607d8b'}}>{treatments[active].desc}</p>
      </div>
    </div>
  );
} 