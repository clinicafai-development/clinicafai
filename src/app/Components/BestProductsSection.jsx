"use client";
import React from "react";
import SectionHeading from "./SectionHeading";

const products = [
  { name: 'Eye Care Serum', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80', desc: 'Reduces puffiness and dark circles.' },
  { name: 'Hydrating Eye Drops', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&q=80', desc: 'Instant relief for dry eyes.' },
  { name: 'Lash Growth Oil', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80', desc: 'Promotes longer, thicker lashes.' },
  { name: 'Blue Light Glasses', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80', desc: 'Protects eyes from digital screens.' },
  { name: 'Vitamin Eye Tablets', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&q=80', desc: 'Supports overall eye health.' },
];

export default function BestProductsSection() {
  return (
    <section style={{margin: '70px 0'}}>
      <SectionHeading SectionSubtitle="OUR BEST PRODUCTS" variant="text-center" />
      <div className="best-products-grid">
        {products.map((product, idx) => (
          <div key={idx} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={product.img} alt={product.name} style={{width: 120, height: 120, borderRadius: 12, objectFit: 'cover', marginBottom: 16}} />
                <h3 style={{fontSize: 22, fontWeight: 600, marginBottom: 8}}>{product.name}</h3>
              </div>
              <div className="flip-card-back">
                <p style={{fontSize: 16, color: '#374151', marginBottom: 16}}>{product.desc}</p>
                <a href="#" style={{background: '#00bcd4', color: '#fff', padding: '10px 28px', borderRadius: 20, fontWeight: 600, textDecoration: 'none'}}>Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .best-products-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 32px;
        }
        @media (min-width: 1200px) {
          .best-products-grid {
            flex-wrap: nowrap;
          }
        }
        .flip-card {
          width: 260px;
          height: 340px;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #fff;
        }
        .flip-card-back {
          background: #e0f7fa;
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
} 