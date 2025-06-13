import React, { useState } from 'react';

const faqs = [
  { q: 'What services does Clinica Fai offer?', a: 'We offer a wide range of eye care services, including surgery, oculoplasty, and vision correction.' },
  { q: 'How can I book an appointment?', a: 'You can book an appointment online or by calling our clinic directly.' },
  { q: 'Are your treatments safe?', a: 'Yes, all our treatments are performed by certified professionals using the latest technology.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div style={{minHeight: '80vh', background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)', padding: '60px 0'}}>
      <h1 style={{textAlign: 'center', fontWeight: 700, fontSize: 36, marginBottom: 40}}>FAQ</h1>
      <div style={{maxWidth: 600, margin: '0 auto'}}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{marginBottom: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', background: '#fff'}}>
            <button onClick={() => setOpen(open === idx ? null : idx)} style={{width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 24px', fontSize: 20, fontWeight: 600, color: '#263238', cursor: 'pointer', borderRadius: 12}}>{faq.q}</button>
            {open === idx && <div style={{padding: '0 24px 18px 24px', color: '#607d8b', fontSize: 18}}>{faq.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
} 