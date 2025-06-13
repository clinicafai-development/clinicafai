import React from 'react';

const features = [
  'Non-invasive skin tightening',
  'Minimal downtime',
  'Safe for all skin types',
  'Clinically proven results',
];

export default function PlexerPro() {
  return (
    <div style={{minHeight: '80vh', background: 'linear-gradient(135deg, #e0e7ef 0%, #f8fafc 100%)'}}>
      <div style={{padding: '60px 0 40px 0', textAlign: 'center'}}>
        <h1 style={{fontWeight: 800, fontSize: 40, color: '#263238', marginBottom: 16}}>Plexer Pro</h1>
        <p style={{fontSize: 20, color: '#607d8b', marginBottom: 32}}>Revolutionary technology for non-surgical skin rejuvenation.</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 40}}>
          {features.map((f, idx) => (
            <div key={idx} style={{background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: 28, minWidth: 220, fontSize: 18, color: '#263238', fontWeight: 600}}>
              {f}
            </div>
          ))}
        </div>
        <a href="/contact" style={{display: 'inline-block', background: '#00bcd4', color: '#fff', padding: '14px 36px', borderRadius: 24, fontWeight: 700, fontSize: 20, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,188,212,0.12)'}}>Book a Consultation</a>
      </div>
    </div>
  );
} 