"use client";
import React, { useState, useEffect } from "react";

const pairs = [
  {
    before: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//acne%20before.png",
    after: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//acne%20after.png",
  },
  {
    before: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//cheek%20hollowess%20before.png",
    after: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//cheek%20hollowness%20after.png",
  },
  {
    before: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//eye%20bag%20before%20.png",
    after: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//eye%20bag%20after.png",
  },
  {
    before: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//injured_face.png",
    after: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//recovered_face.png",
  },
  {
    before: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//ptosis%20before.png",
    after: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//ptosis%20after.png",
  },
  {
    before: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//thyroid%20eye%20disease%20before.png",
    after: "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//thyroid%20eye%20disease%20after.png",
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
              <div className={`divider ${hovered[key] ? hovered[key] + '-active' : ''}`} />
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
          transition: all 0.4s cubic-bezier(.4,2,.6,1);
          cursor: pointer;
        }
        .before {
          left: 0;
          z-index: 2;
        }
        .after {
          left: 50%;
          z-index: 2;
        }
        .before.expanded {
          width: 70%;
          z-index: 3;
        }
        .after.expanded {
          width: 70%;
          left: 30%;
          z-index: 3;
        }
        .before:hover {
          z-index: 3;
        }
        .after:hover {
          z-index: 3;
        }
        .before img, .after img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .before:hover img, .after:hover img {
          transform: scale(1.05);
        }
        .divider {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: #00bcd4;
          z-index: 4;
          transition: left 0.4s cubic-bezier(.4,2,.6,1);
        }
        .divider.before-active {
          left: 70%;
        }
        .divider.after-active {
          left: 30%;
        }
        .label {
          position: absolute;
          top: 10px;
          color: #fff;
          font-weight: 700;
          background: #00bcd4;
          padding: 4px 16px;
          border-radius: 12px;
          z-index: 5;
          transition: all 0.3s ease;
        }
        .before-label {
          left: 20%;
        }
        .after-label {
          right: 20%;
        }
        .before.expanded .before-label {
          left: 35%;
        }
        .after.expanded .after-label {
          right: 35%;
        }
      `}</style>
    </section>
  );
} 