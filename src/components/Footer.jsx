import React from 'react';
import { HACKATHON_DATA } from '../data/config';
import './Footer.css';

const InstagramIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

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
            <div className="social-links" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Connect with us:</span>
              <a href="https://www.instagram.com/ksij.youthmumbai/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center' }} className="social-icon-link">
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>
          
          <div className="footer-right">
            <ul className="footer-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#teams">Teams</a></li>
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
