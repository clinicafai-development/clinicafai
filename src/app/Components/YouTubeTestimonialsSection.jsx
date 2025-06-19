"use client";
import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const youtubeTestimonials = [
  {
    id: 1,
    videoId: 'r-N7F6zpK6o',
    thumbnail: `https://img.youtube.com/vi/r-N7F6zpK6o/maxresdefault.jpg`,
    title: 'Ptosis Surgery Success Story',
    patientName: 'Sarah Ahmed',
    treatment: 'Ptosis Correction'
  },
  {
    id: 2,
    videoId: 'dQw4w9WgXcQ',
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
    title: 'Dark Circles Treatment Journey',
    patientName: 'Priya Sharma',
    treatment: 'Bye Bye Dark Circles©'
  },
  {
    id: 3,
    videoId: 'jNQXAC9IVRw',
    thumbnail: `https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg`,
    title: 'Blepharoplasty Experience',
    patientName: 'Rajesh Kumar',
    treatment: 'Non-Surgical Blepharoplasty'
  },
  {
    id: 4,
    videoId: '9bZkp7q19f0',
    thumbnail: `https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg`,
    title: 'Plasma Facial Results',
    patientName: 'Anjali Reddy',
    treatment: 'Plasma Facial (Plexr)'
  },
  {
    id: 5,
    videoId: 'kJQP7kiw5Fk',
    thumbnail: `https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg`,
    title: 'Wrinkle Treatment Success',
    patientName: 'Michael Johnson',
    treatment: 'Wrinkles And Fine Lines'
  },
  {
    id: 6,
    videoId: 'Lrj2Hq7xqQ8',
    thumbnail: `https://img.youtube.com/vi/Lrj2Hq7xqQ8/maxresdefault.jpg`,
    title: 'Eye Bag Removal Journey',
    patientName: 'Fatima Al-Zahra',
    treatment: 'No More Baggy Eyes©'
  }
];

const YouTubeTestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="youtube-testimonials-section">
      <div className="container">
        <SectionHeading
          SectionSubtitle="PATIENT STORIES"
          SectionTitle="YouTube Video Testimonials"
          variant="text-center"
        />

        <div className="testimonials-container">
          <button onClick={scrollLeft} className="scroll-button left" aria-label="Scroll left">
            <FaChevronLeft />
          </button>

          <div className="testimonials-scroll" ref={scrollContainerRef}>
            {youtubeTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card" onClick={() => openVideo(testimonial.videoId)}>
                <div className="thumbnail-container">
                  <img 
                    src={testimonial.thumbnail} 
                    alt={testimonial.title}
                    className="thumbnail"
                  />
                  <div className="play-overlay">
                    <FaPlay className="play-icon" />
                  </div>
                  <div className="duration-badge">Video</div>
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-title">{testimonial.title}</h4>
                  <p className="patient-name">{testimonial.patientName}</p>
                  <span className="treatment-type">{testimonial.treatment}</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={scrollRight} className="scroll-button right" aria-label="Scroll right">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeVideo}>&times;</button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        .youtube-testimonials-section {
          padding: 80px 0;
          background: #f8fafc;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .testimonials-container {
          position: relative;
          margin-top: 60px;
        }

        .testimonials-scroll {
          display: flex;
          gap: 25px;
          overflow-x: auto;
          padding: 20px 0;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .testimonials-scroll::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          flex: 0 0 300px;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 188, 212, 0.15);
        }

        .thumbnail-container {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover .thumbnail {
          transform: scale(1.05);
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: rgba(0, 188, 212, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .play-overlay {
          background: rgba(0, 188, 212, 1);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-icon {
          color: white;
          font-size: 20px;
          margin-left: 3px;
        }

        .duration-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }

        .testimonial-info {
          padding: 20px;
        }

        .testimonial-title {
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .patient-name {
          font-size: 14px;
          color: #4a5568;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .treatment-type {
          font-size: 12px;
          color: #00bcd4;
          background: rgba(0, 188, 212, 0.1);
          padding: 4px 8px;
          border-radius: 8px;
          font-weight: 500;
        }

        .scroll-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: #fff;
          border: 2px solid #00bcd4;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .scroll-button:hover {
          background: #00bcd4;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .scroll-button.left {
          left: -25px;
        }

        .scroll-button.right {
          right: -25px;
        }

        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          aspect-ratio: 16/9;
        }

        .video-container iframe {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }

        .close-button {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 30px;
          cursor: pointer;
          z-index: 1001;
        }

        @media (max-width: 768px) {
          .youtube-testimonials-section {
            padding: 60px 0;
          }

          .testimonial-card {
            flex: 0 0 250px;
          }

          .thumbnail-container {
            height: 140px;
          }

          .scroll-button {
            display: none;
          }

          .testimonials-scroll {
            padding: 20px 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default YouTubeTestimonialsSection; 