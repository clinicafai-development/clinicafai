import React from 'react';

const stories = [
  { name: 'Anjali R.', testimonial: 'Dr. Goel changed my life with her care!', img: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { name: 'Rahul S.', testimonial: 'The best treatment and support I could ask for.', img: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { name: 'Priya D.', testimonial: 'Professional, kind, and truly skilled.', img: 'https://randomuser.me/api/portraits/women/55.jpg' },
];

export default function PatientExperience() {
  return (
    <div style={{minHeight: '80vh', background: 'linear-gradient(135deg, #f3e7fa 0%, #e0f7fa 100%)', padding: '60px 0'}}>
      <h1 style={{textAlign: 'center', fontWeight: 700, fontSize: 36, marginBottom: 40}}>Patient Experience</h1>
      <div style={{maxWidth: 600, margin: '0 auto', position: 'relative'}}>
        {stories.map((story, idx) => (
          <div key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 40, position: 'relative'}}>
            <div style={{flex: '0 0 80px', textAlign: 'center'}}>
              <img src={story.img} alt={story.name} style={{width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '3px solid #b39ddb'}} />
            </div>
            <div style={{marginLeft: 24}}>
              <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 6}}>{story.name}</h2>
              <p style={{fontStyle: 'italic', color: '#6a1b9a'}}>&ldquo;{story.testimonial}&rdquo;</p>
            </div>
            {idx < stories.length - 1 && (
              <div style={{position: 'absolute', left: 32, top: 64, width: 2, height: 40, background: '#b39ddb'}}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 