import React from 'react';
import { HACKATHON_DATA } from '../data/config';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
              <span className="logo-text">KSIJ</span>
              <span className="logo-subtext">TECH & AI CLUB</span>
            </div>
            <p className="footer-tagline">Technology. Learning. Innovation. Community.</p>
          </div>
          
          <div className="footer-right">
            <ul className="footer-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#schedule">Schedule</a></li>
            </ul>
            <ul className="footer-nav">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#judging">Judging</a></li>
            </ul>
            <ul className="footer-nav">
              <li><a href="#teams">Teams</a></li>
              <li><a href="#prizes">Prizes</a></li>
            </ul>
            <ul className="footer-nav">
              <li><a href="#challenges">Challenges</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2026 KSIJ Tech & AI Club</p>
          <a href="#" className="back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
