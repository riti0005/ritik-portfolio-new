import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import heroData from '../data/Herodata';

const HeroSection = () => {
  return (
    <div className="hero-container rounded-lg d-flex flex-column flex-lg-row align-items-center justify-content-between">
      <div className="hero-text text-center text-lg-start">
        <h1 className="display-6 animated-gradient-text">{heroData.heading}</h1>
        <p className="lead fade-in-text">
          {heroData.description.split(',').map((text, index) => (
            <span key={index} className="highlight">{text}</span>
          ))}
        </p>
        <p className="fade-in-text">{heroData.additionalText}</p>
        <Link className="btn view pulse-glow-button" to={heroData.buttonLink} role="button">
          {heroData.buttonText}
        </Link>
      </div>
      <div className="hero-image d-flex justify-content-center align-items-center">
        <img
          src={heroData.imageUrl}
          alt="Portfolio Visual"
          className="image-with-animation"
        />
      </div>
    </div>
  );
};

export default HeroSection;
