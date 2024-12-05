import React from 'react';
import './ContactCard.css';
import { Link } from 'react-router-dom';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <h3 className='text-white'>Contact</h3>
      <div className="cta-section">
      <a href="https://github.com/riti0005" target="_blank" rel="noopener noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" width="30" height="30" />
  </a>
        <h2>Ready to take the next step?</h2>
        <p>Let's discuss how I can help you with your project!</p>
        
     
        <Link to="/contact" className='cta-button'>Get in Tounch</Link>
      </div>
    </div>
  );
};

export default ContactCard;
