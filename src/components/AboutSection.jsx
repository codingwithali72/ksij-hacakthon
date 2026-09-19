import React from 'react';
import { HACKATHON_DATA } from '../data/config';
import { Info } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label pill-label">
              <Info size={14} className="pill-icon" /> ABOUT THE HACKATHON
            </div>
            <h2 className="section-title">
              WHAT IS THE<br/>
              <span className="text-cyan">COMMUNITY HACKATHON?</span>
            </h2>
            <p className="about-desc">
              A unique opportunity to connect with peers, brainstorm innovative ideas, and build tech solutions that solve genuine community problems.
            </p>
            <p className="about-subtext">
              {HACKATHON_DATA.about.subtext}
            </p>
          </div>
          
          {/* <div className="about-process-card card-glass">
            <div className="vertical-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">REAL PROBLEM</div>
              </div>
              <div className="timeline-line"></div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">IDEA</div>
              </div>
              <div className="timeline-line"></div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">BUILD</div>
              </div>
              <div className="timeline-line"></div>
              
              <div className="timeline-item">
                <div className="timeline-dot dot-yellow"></div>
                <div className="timeline-content text-yellow">IMPACT</div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="info-cards">
          <div className="info-card card-glass">
            <h4 className="text-cyan">ONE DAY</h4>
            <p>IN-PERSON</p>
          </div>
          <div className="info-card card-glass">
            <h4 className="text-cyan">AI</h4>
            <p>ENCOURAGED</p>
          </div>
          <div className="info-card card-glass">
            <h4 className="text-cyan">3-4</h4>
            <p>PER TEAM</p>
          </div>
          <div className="info-card card-glass">
            <h4 className="text-cyan">COMMUNITY</h4>
            <p>FOCUS</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
