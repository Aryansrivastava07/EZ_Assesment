import React from 'react';
import './AboutTeam.css';

const AboutTeam = () => {
  return (
    <div className="about-team-page">
      <div className="about-team-container">
        <div className="left-section">
          <div className="philosophy-card">
            <p className="philosophy-text">
              Some craft films. Some build brands. Some curate art. We bring it all together - a collective of storytellers driven by one belief: every project deserves to be more than just a message; it should become a masterpiece. From first spark to final frame, from raw ideas to timeless visuals - we shape stories that stay with you.
            </p>
          </div>
          
          <div className="branding-icon">
            <div className="icon-circle">
              <span className="icon-left">L</span>
              <span className="icon-right">R</span>
            </div>
            <p className="icon-label">Branding Experts</p>
          </div>

          <div className="building-illustration">
            <svg viewBox="0 0 200 200" className="building-svg">
              <rect x="40" y="60" width="120" height="120" fill="#f4d4c8" opacity="0.6"/>
              <rect x="70" y="90" width="60" height="90" fill="#e8b4a0" opacity="0.4"/>
              <path d="M 100 90 Q 70 120 70 180 L 130 180 Q 130 120 100 90" fill="#d4634d"/>
            </svg>
          </div>
        </div>

        <div className="right-section">
          <div className="team-illustration">
            <div className="team-members">
              <div className="member"></div>
              <div className="member"></div>
              <div className="member center"></div>
              <div className="member"></div>
              <div className="member"></div>
            </div>
            <div className="roles">
              <span className="role film-makers">Film Makers</span>
              <span className="role art-curators">Art Curators</span>
              <span className="role lokesh">Lokesh</span>
            </div>
            <div className="creative-icons">
              <div className="icon-badge">
                <span className="icon-l">L</span>
                <span className="icon-r">R</span>
              </div>
            </div>
          </div>

          <div className="tagline">
            <h2>Take a closer look at the stories V bring to life.</h2>
            <button className="view-portfolio-btn">View Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
