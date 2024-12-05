import React from 'react';
import './Aboutme.css'; 
import aboutData from '../data/aboutdata'; 

const AboutMeSection = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-container">
        {/* About Me Card */}
        <div className="about-me-info-card">
          <h3>{aboutData.aboutMe.heading}</h3>
          <p>{aboutData.aboutMe.content}</p>
        </div>

      </div>
    </div>
  );
};

export default AboutMeSection;
