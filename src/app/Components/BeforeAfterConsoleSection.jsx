"use client";
import React, { useState } from "react";

const pairs = [
  {
    before: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=480&q=80",
    after: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=480&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=480&q=80",
    after: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=facearea&w=480&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=480&q=80",
    after: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=480&q=80",
  },
];

export default function BeforeAfterConsoleSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i === 0 ? pairs.length - 1 : i - 1));
  const next = () => setIdx(i => (i === pairs.length - 1 ? 0 : i + 1));
  return (
    <section style={{margin: '70px 0'}}>
      <h2 style={{textAlign: 'center', fontWeight: 700, fontSize: 36, marginBottom: 40}}>3D Before & After Console</h2>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24}}>
        <button aria-label="Previous" onClick={prev} style={{fontSize: 32, background: 'none', border: 'none', cursor: 'pointer'}}>&#8592;</button>
        <div className="before-after-slider">
          <div className="before">
            <img src={pairs[idx].before} alt="Before" />
            <span className="label before-label">Before</span>
          </div>
          <div className="after">
            <img src={pairs[idx].after} alt="After" />
            <span className="label after-label">After</span>
          </div>
          <div className="divider" />
        </div>
        <button aria-label="Next" onClick={next} style={{fontSize: 32, background: 'none', border: 'none', cursor: 'pointer'}}>&#8594;</button>
      </div>
      <p style={{textAlign: 'center', color: '#607d8b', marginTop: 24}}>Use arrows to see before and after results of our treatments.</p>
      <style jsx>{`
        .before-after-slider {
          position: relative;
          width: 480px;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          display: flex;
        }
        .before, .after {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: width 0.4s cubic-bezier(.4,2,.6,1);
        }
        .before {
          left: 0;
          z-index: 2;
        }
        .after {
          left: 50%;
          z-index: 1;
        }
        .before img, .after img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .divider {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: #00bcd4;
          z-index: 3;
        }
        .label {
          position: absolute;
          top: 10px;
          color: #fff;
          font-weight: 700;
          background: #00bcd4;
          padding: 4px 16px;
          border-radius: 12px;
          z-index: 4;
        }
        .before-label {
          left: 20%;
        }
        .after-label {
          right: 20%;
        }
      `}</style>
    </section>
  );
} 