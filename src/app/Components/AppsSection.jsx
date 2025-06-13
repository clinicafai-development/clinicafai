"use client";
import React from "react";

export default function AppsSection() {
  return (
    <section style={{margin: '70px 0'}}>
      <h2 style={{textAlign: 'center', fontWeight: 700, fontSize: 36, marginBottom: 40}}>Our Apps</h2>
      <div className="apps-flex">
        <div className="app-card">
          <img src="/assets/img/appstore-app.png" alt="App Store App" />
          <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="store-btn appstore">App Store</a>
        </div>
        <div className="app-card">
          <img src="/assets/img/playstore-app.png" alt="Play Store App" />
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-btn playstore">Play Store</a>
        </div>
        <div className="app-card">
          <img src="/assets/img/custom-app.png" alt="Custom App" />
          <span className="store-btn custom">Clinica Fai App</span>
        </div>
      </div>
      <style jsx>{`
        .apps-flex {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .app-card {
          text-align: center;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          padding: 32px 24px 24px 24px;
          transition: transform 0.2s;
        }
        .app-card:hover {
          transform: scale(1.08);
        }
        .app-card img {
          width: 120px;
          height: 120px;
          border-radius: 24px;
          margin-bottom: 16px;
        }
        .store-btn {
          display: inline-block;
          padding: 10px 28px;
          border-radius: 20px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 8px;
          font-size: 18px;
          transition: background 0.2s, color 0.2s;
        }
        .appstore {
          background: #000;
          color: #fff;
        }
        .playstore {
          background: #00bcd4;
          color: #fff;
        }
        .custom {
          background: #fbc02d;
          color: #263238;
          cursor: default;
        }
        .store-btn:hover {
          background: #263238;
          color: #fff;
        }
      `}</style>
    </section>
  );
} 