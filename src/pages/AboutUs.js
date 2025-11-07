import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <div className="left-section">
          <h2 className="section-title">A montage of familiar faces and names.</h2>

          <p className="description">
            Some stories come from the biggest names.<br />
            Others begin with bold, rising voices.<br />
            We've been fortunate to walk alongside both -<br />
            listening, creating, and building stories that<br />
            matter.
          </p>

          <div className="stats-cards">
            <div className="stat-card yellow">
              <div className="stat-number">85+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card cream">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card light-yellow">
              <div className="stat-number">10+</div>
              <div className="stat-label">Experts Team</div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="quote-text">
            <p className="quote-line">Every project is more than just a brief -</p>
            <p className="quote-line">it's a new chapter waiting to be written.</p>
            <p className="quote-line">Together, we've crafted tales that inspire,</p>
            <p className="quote-line">connect, and endure.</p>
          </div>

          <div className="brands-illustration">
            <img src="../assets/aboutus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
