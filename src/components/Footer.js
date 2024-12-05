import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer custom-footer text-light py-4">
      <div className="container">
        <div className="text-center mt-4">
          <p>&copy; 2024. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
