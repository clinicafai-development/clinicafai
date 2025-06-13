import React from 'react';

const products = [
  { name: 'Eye Care Serum', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80', desc: 'Reduces puffiness and dark circles.' },
  { name: 'Hydrating Eye Drops', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&q=80', desc: 'Instant relief for dry eyes.' },
  { name: 'Lash Growth Oil', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80', desc: 'Promotes longer, thicker lashes.' },
];

export default function OurProducts() {
  return (
    <div style={{minHeight: '80vh', background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)', padding: '60px 0'}}>
      <h1 style={{textAlign: 'center', fontWeight: 700, fontSize: 36, marginBottom: 40}}>Our Products</h1>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 32}}>
        {products.map((product, idx) => (
          <div key={idx} className="flip-card" style={{width: 260, height: 340, perspective: 1000}}>
            <div className="flip-card-inner" style={{position: 'relative', width: '100%', height: '100%', transition: 'transform 0.6s', transformStyle: 'preserve-3d'}}>
              <div className="flip-card-front" style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: '#fff', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24}}>
                <img src={product.img} alt={product.name} style={{width: 120, height: 120, borderRadius: 12, objectFit: 'cover', marginBottom: 16}} />
                <h2 style={{fontSize: 22, fontWeight: 600, marginBottom: 8}}>{product.name}</h2>
              </div>
              <div className="flip-card-back" style={{position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: '#e0f7fa', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, transform: 'rotateY(180deg)'}}>
                <p style={{fontSize: 16, color: '#374151', marginBottom: 16}}>{product.desc}</p>
                <a href="#" style={{background: '#00bcd4', color: '#fff', padding: '10px 28px', borderRadius: 20, fontWeight: 600, textDecoration: 'none'}}>Buy Now</a>
              </div>
            </div>
            <style>{`
              .flip-card:hover .flip-card-inner {
                transform: rotateY(180deg);
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
} 