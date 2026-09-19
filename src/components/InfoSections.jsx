import React, { useEffect, useRef, useState } from 'react';
import { HACKATHON_DATA } from '../data/config';
import { UserPlus, Globe, GraduationCap, Users, List, User, Armchair, Info, Lightbulb, Calendar } from 'lucide-react';
import './InfoSections.css';

export const WhoCanParticipate = () => (
  <section className="info-section">
    <div className="container text-center">
      <div className="section-label pill-label">
        <span className="cyan-dot"></span> WHO CAN PARTICIPATE
      </div>
      <h2 className="section-title">WHO CAN<br/><span className="text-cyan">PARTICIPATE?</span></h2>
      <p className="info-desc mb-4">If you have an idea and the will to build it, this hackathon is for you.</p>
      
      <div className="info-cards-grid grid-4">
        <div className="info-card card-glass reveal reveal-stagger-1">
          <h4 className="text-yellow title-multiline">10TH PASS &<br/>ABOVE</h4>
          <p className="card-subtext">Eligibility</p>
        </div>
        <div className="info-card card-glass reveal reveal-stagger-2">
          <h4 className="text-cyan title-multiline">ANY<br/>BACKGROUND</h4>
          <p className="card-subtext">No specific technical<br/>background required</p>
        </div>
        <div className="info-card card-glass reveal reveal-stagger-3">
          <h4 className="text-cyan title-multiline">FROM<br/>ANYWHERE</h4>
          <p className="card-subtext">Participants can register<br/>from different locations</p>
        </div>
        <div className="info-card card-glass reveal reveal-stagger-4">
          <h4 className="text-cyan title-multiline">OPEN<br/>TO ALL</h4>
          <p className="card-subtext">Everyone is welcome</p>
        </div>
      </div>
    </div>
  </section>
);

export const IdeaToImpact = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling when container enters near bottom of screen
      // Finish filling when container is near top of screen
      const start = windowHeight * 0.85; 
      const end = windowHeight * 0.15;
      
      let newProgress = 0;
      if (rect.top > start) {
        newProgress = 0;
      } else if (rect.top < end) {
        newProgress = 100;
      } else {
        newProgress = ((start - rect.top) / (start - end)) * 100;
      }
      
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="info-section">
      <div className="container text-center">
        <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
          <List size={14} className="pill-icon" /> THE PROCESS
        </div>
        
        <h2 className="section-title mb-4">
          FROM IDEA<br/>
          <span className="text-cyan">TO IMPACT.</span>
        </h2>
        
        <div className="process-horizontal-container" ref={containerRef} style={{ '--progress': `${progress}%` }}>
          <div className="process-track">
            <div className="process-track-bg"></div>
            <div className="process-track-fill"></div>
          </div>
          
          <div className="process-steps-row">
            <div className={`process-node ${progress >= 0 ? 'active' : ''}`}>
              <div className="node-circle">01</div>
              <div className="node-text">
                <h4 className="node-title">REGISTER</h4>
                <p className="node-desc">Join the hackathon individually or with your team.</p>
              </div>
            </div>
            
            <div className={`process-node ${progress >= 25 ? 'active' : ''}`}>
              <div className="node-circle">02</div>
              <div className="node-text">
                <h4 className="node-title">FORM A TEAM</h4>
                <p className="node-desc">Teams consist of 3-4 participants.</p>
              </div>
            </div>
            
            <div className={`process-node ${progress >= 50 ? 'active' : ''}`}>
              <div className="node-circle">03</div>
              <div className="node-content">
                <h4 className="node-title">CHOOSE A PROBLEM</h4>
                <p className="node-desc">Problem statements will be released 1 week before the hackathon.</p>
              </div>
            </div>
            
            <div className={`process-node ${progress >= 75 ? 'active' : ''}`}>
              <div className="node-circle">04</div>
              <div className="node-text">
                <h4 className="node-title">BUILD</h4>
                <p className="node-desc">Create your solution using technology and AI.</p>
              </div>
            </div>
            
            <div className={`process-node ${progress >= 100 ? 'active' : ''}`}>
              <div className="node-circle">05</div>
              <div className="node-text">
                <h4 className="node-title">PRESENT</h4>
                <p className="node-desc">Demo your solution and present your impact to the judges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BuildTogether = () => (
  <section id="teams" className="info-section">
    <div className="container">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
          <Users size={14} className="pill-icon" /> TEAM INFORMATION
        </div>
        <h2 className="section-title">
          <span className="text-cyan">BUILD</span><br/>
          TOGETHER.
        </h2>
      </div>
      
      <div className="build-grid">
        <div className="build-team-size card-glass text-center">
          <h2 className="text-cyan size-display" style={{ textShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}>03-04</h2>
          <h4 className="build-size-label">MEMBERS PER TEAM</h4>
          <p className="build-size-desc">Come with your own team, or join individually and teams will be formed where required.</p>
        </div>
        
        <div className="build-details-grid">
          <div className="card-glass text-left align-left-card">
            <Users className="text-cyan mb-3" size={24} />
            <h4 className="detail-card-title">TEAM SIZE</h4>
            <p className="detail-card-desc">3-4 participants.</p>
          </div>
          <div className="card-glass text-left align-left-card">
            <User className="text-cyan mb-3" size={24} />
            <h4 className="detail-card-title">INDIVIDUAL</h4>
            <p className="detail-card-desc">Register individually if you do not have a team. Teams can be formed where required.</p>
          </div>
          <div className="card-glass text-left align-left-card">
            <UserPlus className="text-cyan mb-3" size={24} />
            <h4 className="detail-card-title">TEAM FORMAT</h4>
            <p className="detail-card-desc">All-boys or all-girls teams.</p>
          </div>
          <div className="card-glass text-left align-left-card">
            <Armchair className="text-cyan mb-3" size={24} />
            <h4 className="detail-card-title">SEATING</h4>
            <p className="detail-card-desc">Separate seating for ladies and gents.</p>
          </div>
        </div>
      </div>
      
      <div className="card-glass mt-4 info-bar text-left">
        <Info size={18} className="text-cyan info-bar-icon" />
        <p className="info-bar-text">Teams will be either all-boys or all-girls. Mixed-gender teams are not permitted.</p>
      </div>
    </div>
  </section>
);

export const WhatWillYouBuild = () => (
  <section id="challenges" className="info-section">
    <div className="container text-center">
      <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
        <Lightbulb size={14} className="pill-icon" /> THE CHALLENGE
      </div>
      <h2 className="section-title">WHAT WILL<br/><span className="text-cyan">YOU BUILD?</span></h2>
      <p className="info-desc mb-4">Build a practical solution for a real challenge that creates meaningful impact.</p>
      
      <div className="card-glass info-bar" style={{ maxWidth: '600px', margin: '0 auto', justifyContent: 'center' }}>
        <Info size={18} className="text-cyan info-bar-icon" />
        <p className="info-bar-text" style={{ fontSize: '1rem', fontWeight: '500', color: '#ffffff' }}>Problem statements will be released one week before the hackathon.</p>
      </div>
    </div>
  </section>
);

export const AISection = () => (
  <section className="info-section bg-alt ai-section text-center">
    <div className="container">
      <div className="card ai-card glow-cyan reveal">
        <h2 className="ai-title">AI IS<br/><span className="text-cyan">ENCOURAGED.</span></h2>
        <p className="ai-desc">
          We encourage the use of AI tools and technologies, but the fundamental goal is to solve real community problems.
        </p>
        <div className="ai-particles"></div>
      </div>
    </div>
  </section>
);

export const EventAtGlance = () => (
  <section className="info-section text-center">
    <div className="container">
      <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
        <Calendar size={14} className="pill-icon" /> EVENT INFORMATION
      </div>
      <h2 className="section-title">
        EVENT<br/>
        <span className="text-cyan glow-text">AT A GLANCE</span>
      </h2>
      
      <div className="glance-grid mt-4">
        <div className="card-glass text-left border-cyan" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-cyan text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>DATE</p>
          <h4 className="detail-card-title m-0 text-white">04 OCTOBER 2026</h4>
        </div>
        <div className="card-glass text-left border-yellow" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-yellow text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>VENUE</p>
          <h4 className="detail-card-title m-0 text-white">TBA (MUMBAI)</h4>
        </div>
        <div className="card-glass text-left border-cyan" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-cyan text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>FORMAT</p>
          <h4 className="detail-card-title m-0 text-white">ONE-DAY / IN-PERSON</h4>
        </div>
        <div className="card-glass text-left border-yellow" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-yellow text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>TEAM</p>
          <h4 className="detail-card-title m-0 text-white">3-4 PARTICIPANTS</h4>
        </div>
        <div className="card-glass text-left border-cyan" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-cyan text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>ELIGIBILITY</p>
          <h4 className="detail-card-title m-0 text-white">10TH STANDARD+</h4>
        </div>
        <div className="card-glass text-left border-yellow" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-yellow text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>SEATING</p>
          <h4 className="detail-card-title m-0 text-white">SEPARATE FOR LADIES & GENTS</h4>
        </div>
        <div className="card-glass text-left border-cyan" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-cyan text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>CERTIFICATES</p>
          <h4 className="detail-card-title m-0 text-white">PARTICIPATION + WINNER CERTIFICATES</h4>
        </div>
      </div>
    </div>
  </section>
);
