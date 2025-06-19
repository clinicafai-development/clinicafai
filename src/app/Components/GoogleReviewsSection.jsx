"use client";
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const reviewsData = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    initial: "A",
    rating: 5,
    review: "My name is Zamaan Ahmed. I've consulted with Dr. Shubhra Goel regarding watering eye which causes infection and tearing of eyes. The doctor was not requiring for surgery. Dr. Shubhra Did our DCR surgery, curing the infection and..."
  },
  {
    id: 2,
    name: "Farida Farida",
    initial: "F",
    rating: 5,
    review: "Very good and supportive. She was like an angel for me! I am very thankful to her the way she have done my DCR operation. The results are amazing. Specially thankful to Dr Shilpa Goel and Dr Nitin Goel too who suggested me to..."
  },
  {
    id: 3,
    name: "Hamma Ahmed",
    initial: "H",
    rating: 5,
    review: "I'm Abdullaha Ahmed met Dr Shubhra for my lower lid retraction problem, she did Lid Retraction surgery in her Clinica Fai, Hyderabad and I got excellent results thanks to Dr Shubhra Goel..."
  },
  {
    id: 4,
    name: "Priya Sharma",
    initial: "P",
    rating: 5,
    review: "Excellent experience with Dr. Shubhra Goel. Her expertise in oculofacial surgery is remarkable. The results exceeded my expectations and the care throughout the process was outstanding."
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    initial: "R",
    rating: 5,
    review: "Dr. Shubhra Goel is an exceptional surgeon. Her professionalism and skill are unmatched. The clinic staff is also very supportive. Highly recommend for any aesthetic procedures."
  },
  {
    id: 6,
    name: "Sneha Reddy",
    initial: "S",
    rating: 5,
    review: "Amazing results from my ptosis correction surgery. Dr. Shubhra explained everything clearly and made me feel comfortable throughout. The recovery was smooth and results are perfect."
  }
];

const GoogleReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const nextReviews = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + reviewsPerPage >= reviewsData.length ? 0 : prevIndex + reviewsPerPage
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, reviewsData.length - reviewsPerPage) : prevIndex - reviewsPerPage
    );
  };

  const currentReviews = reviewsData.slice(currentIndex, currentIndex + reviewsPerPage);

  const totalReviews = reviewsData.length * 20; // Simulating more reviews
  const averageRating = 4.9;

  return (
    <section className="google-reviews-section">
      <div className="container">
        <div className="reviews-header">
          <div className="rating-summary">
            <h2 className="excellence-text">EXCELLENT</h2>
            <div className="stars-container">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="star-icon" />
              ))}
            </div>
            <p className="rating-text">Based on {totalReviews} reviews</p>
            <div className="google-logo">
              <span className="google-text">
                <span className="google-g-blue">G</span>
                <span className="google-o-red">o</span>
                <span className="google-o-yellow">o</span>
                <span className="google-g-blue">g</span>
                <span className="google-l-green">l</span>
                <span className="google-e-red">e</span>
              </span>
            </div>
          </div>

          <div className="navigation-controls">
            <button onClick={prevReviews} className="nav-button prev-button" aria-label="Previous reviews">
              <FaChevronLeft />
            </button>
            <button onClick={nextReviews} className="nav-button next-button" aria-label="Next reviews">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="reviews-container">
          {currentReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="user-avatar">
                  <span className="user-initial">{review.initial}</span>
                </div>
                <div className="user-info">
                  <h4 className="user-name">{review.name}</h4>
                  <div className="user-rating">
                    {[...Array(review.rating)].map((_, index) => (
                      <FaStar key={index} className="rating-star" />
                    ))}
                  </div>
                </div>
                <div className="google-icon">
                  <span className="google-g">G</span>
                </div>
              </div>
              <div className="review-content">
                <p className="review-text">{review.review}</p>
                <button className="read-more-btn">Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .google-reviews-section {
          background: #1a1a1a;
          padding: 60px 0;
          color: white;
          margin: 70px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .reviews-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .rating-summary {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .excellence-text {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #fff;
        }

        .stars-container {
          display: flex;
          gap: 4px;
          margin-bottom: 8px;
        }

        .star-icon {
          color: #fbbf24;
          font-size: 20px;
        }

        .rating-text {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 15px;
        }

        .google-logo {
          margin-top: 10px;
        }

        .google-text {
          font-size: 24px;
          font-weight: 500;
        }

        .google-g-blue { color: #4285f4; }
        .google-o-red { color: #ea4335; }
        .google-o-yellow { color: #fbbc05; }
        .google-l-green { color: #34a853; }
        .google-e-red { color: #ea4335; }

        .navigation-controls {
          display: flex;
          gap: 15px;
        }

        .nav-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .reviews-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .review-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 25px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .review-header {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 15px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .user-initial {
          color: white;
          font-weight: 600;
          font-size: 16px;
        }

        .user-info {
          flex: 1;
        }

        .user-name {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #fff;
        }

        .user-rating {
          display: flex;
          gap: 2px;
        }

        .rating-star {
          color: #fbbf24;
          font-size: 14px;
        }

        .google-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #4285f4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .google-g {
          color: white;
          font-weight: 600;
          font-size: 14px;
        }

        .review-content {
          color: #d1d5db;
          line-height: 1.6;
        }

        .review-text {
          font-size: 14px;
          margin-bottom: 10px;
        }

        .read-more-btn {
          background: none;
          border: none;
          color: #60a5fa;
          font-size: 14px;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
        }

        .read-more-btn:hover {
          color: #93c5fd;
        }

        @media (max-width: 768px) {
          .reviews-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .reviews-container {
            grid-template-columns: 1fr;
          }

          .excellence-text {
            font-size: 20px;
          }

          .google-text {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default GoogleReviewsSection; 