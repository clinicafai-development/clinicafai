"use client";
import React, { useState, useEffect } from "react";

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
  {
    before: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=480&q=80",
    after: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=facearea&w=480&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=480&q=80",
    after: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=480&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=480&q=80",
    after: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=480&q=80",
  },
];

export default function BeforeAfterConsoleSection() {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState({});
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 2) % pairs.length), 4000);
    return () => clearInterval(timer);
  }, []);
  const prev = () => setIdx(i => (i - 2 + pairs.length) % pairs.length);
  const next = () => setIdx(i => (i + 2) % pairs.length);
  return (
    <section style={{margin: '70px 0'}}>
      <h2 className="cs_section_heading cs_style_1 text-center">
        <span className="cs_section_subtitle cs_accent_color">
          <span className="cs_shape_left" />3D Before & After Console<span className="cs_shape_right" />
        </span>
      </h2>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32}}>
        <button aria-label="Previous" onClick={prev} style={{fontSize: 32, background: 'none', border: 'none', cursor: 'pointer'}}>&#8592;</button>
        {[0, 1].map(offset => {
          const pair = pairs[(idx + offset) % pairs.length];
          const key = idx + '-' + offset;
          return (
            <div
              key={offset}
              className="before-after-slider"
              style={{margin: '0 16px'}}
              onMouseLeave={() => setHovered(h => ({ ...h, [key]: null }))}
            >
              <div
                className={`before${hovered[key]==='before' ? ' expanded' : ''}`}
                onMouseEnter={() => setHovered(h => ({ ...h, [key]: 'before' }))}
              >
                <img src={pair.before} alt="Before" />
                <span className="label before-label">Before</span>
              </div>
              <div
                className={`after${hovered[key]==='after' ? ' expanded' : ''}`}
                onMouseEnter={() => setHovered(h => ({ ...h, [key]: 'after' }))}
              >
                <img src={pair.after} alt="After" />
                <span className="label after-label">After</span>
              </div>
              <div className="divider" />
            </div>
          );
        })}
        <button aria-label="Next" onClick={next} style={{fontSize: 32, background: 'none', border: 'none', cursor: 'pointer'}}>&#8594;</button>
      </div>
      <p style={{textAlign: 'center', color: '#607d8b', marginTop: 24}}>Auto-scrolls every few seconds. Hover left/right to expand. Use arrows to see more before and after results.</p>
      <style jsx>{`
        .before-after-slider {
          position: relative;
          width: 520px;
          height: 340px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          display: flex;
          background: #181818;
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
        .before.expanded {
          width: 70%;
        }
        .after.expanded {
          width: 70%;
          left: 30%;
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