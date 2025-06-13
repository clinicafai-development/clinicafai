import React from 'react';

export default function AboutUs() {
  return (
    <div style={{minHeight: '80vh', display: 'flex', alignItems: 'stretch', background: 'linear-gradient(120deg, #e0f7fa 0%, #f8fafc 100%)'}}>
      <div style={{flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80" alt="About Us" style={{width: 320, height: 320, borderRadius: 24, objectFit: 'cover', boxShadow: '0 4px 24px rgba(0,0,0,0.10)'}} />
      </div>
      <div style={{flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 40px'}}>
        <h1 style={{fontWeight: 800, fontSize: 40, color: '#263238', marginBottom: 16}}>About Us</h1>
        <p style={{fontSize: 20, color: '#607d8b', marginBottom: 32, maxWidth: 500}}>At Clinica Fai, we are dedicated to providing world-class eye care and innovative treatments. Our team of experts is committed to excellence, compassion, and patient satisfaction.</p>
        <a href="/contact" style={{display: 'inline-block', background: '#00bcd4', color: '#fff', padding: '14px 36px', borderRadius: 24, fontWeight: 700, fontSize: 20, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,188,212,0.12)'}}>Contact Us</a>
      </div>
    </div>
  );
} 