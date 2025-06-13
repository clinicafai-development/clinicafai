import React from 'react';

const mentors = [
  { name: 'Dr. A. Kumar', quote: 'Inspired me to pursue excellence.', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Dr. S. Mehta', quote: 'Guided my research journey.', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Dr. R. Singh', quote: 'Taught the value of patient care.', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
  { name: 'Dr. P. Sharma', quote: 'A role model in innovation.', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

export default function Mentors() {
  return (
    <div style={{minHeight: '80vh', background: 'linear-gradient(120deg, #fdf6e3 0%, #e0f7fa 100%)', padding: '60px 0'}}>
      <h1 style={{textAlign: 'center', fontWeight: 700, fontSize: 36, marginBottom: 40}}>Mentors</h1>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 32}}>
        {mentors.map((mentor, idx) => (
          <div key={idx} style={{background: '#fff', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: 32, width: 260, textAlign: 'center'}}>
            <img src={mentor.img} alt={mentor.name} style={{width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 16}} />
            <h2 style={{fontSize: 22, fontWeight: 600, marginBottom: 8}}>{mentor.name}</h2>
            <p style={{fontStyle: 'italic', color: '#607d8b'}}>&ldquo;{mentor.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
} 