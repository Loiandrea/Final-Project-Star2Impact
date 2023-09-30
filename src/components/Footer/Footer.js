// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        
        <p>
          Andrea Loi
          <br />
          <a href="mailto:andrea.loi@hotmail.it">andrea.loi@hotmail.it</a>
        </p>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/your_instagram">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://www.github.com/your_github">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
