import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HACKATHON_DATA } from '../data/config';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Teams', href: '#teams' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo">
          <span className="logo-text">KSIJ</span>
          <span className="logo-subtext">TECH & AI CLUB</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href={HACKATHON_DATA.registrationUrl} className="btn btn-primary header-btn">
            REGISTER NOW
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href={HACKATHON_DATA.registrationUrl} 
              className="btn btn-primary mobile-register-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              REGISTER NOW
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
