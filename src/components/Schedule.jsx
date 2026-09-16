import React, { useEffect, useRef, useState } from 'react';
import { HACKATHON_DATA } from '../data/config';
import { Clock, Calendar } from 'lucide-react';
import './Schedule.css';

const Schedule = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.8; 
      const end = windowHeight * 0.2;
      
      let newProgress = 0;
      if (rect.top > start) {
        newProgress = 0;
      } else if (rect.bottom < end) {
        newProgress = 100;
      } else {
        const totalDist = rect.height + (start - end);
        const currentDist = start - rect.top;
        newProgress = (currentDist / totalDist) * 100;
      }
      
      setProgress(Math.max(0, Math.min(100, newProgress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Intersection observer for cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-schedule');
        } else {
          entry.target.classList.remove('active-schedule');
        }
      });
    }, { threshold: 0.6, rootMargin: "-10% 0px -30% 0px" });

    const cards = document.querySelectorAll('.schedule-card-wrapper');
    cards.forEach(card => observer.observe(card));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
            <Calendar size={14} className="pill-icon" /> EVENT DAY
          </div>
          <h2 className="section-title">
            ONE DAY.<br/>
            ONE CHALLENGE.<br/>
            <span className="text-cyan">BUILD.</span>
          </h2>
          <div className="section-label pill-label mt-4" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            TENTATIVE SCHEDULE
          </div>
        </div>

        <div className="schedule-container reveal" ref={containerRef} style={{ '--progress': `${progress}%` }}>
          <div className="schedule-timeline-track">
            <div className="schedule-timeline-bg"></div>
            <div className="schedule-timeline-fill"></div>
          </div>
          <div className="schedule-list">
            {HACKATHON_DATA.schedule.map((item, index) => (
              <div key={index} className="schedule-card-wrapper">
                <div className="schedule-node"></div>
                <div className="schedule-card card-glass text-left">
                  <div className="schedule-card-header">
                    <h4 className="text-cyan schedule-card-title">{item.title}</h4>
                    <div className="schedule-time">
                      <Clock size={16} className="text-yellow" />
                      <span className="text-yellow">{item.time}</span>
                    </div>
                  </div>
                  <p className="schedule-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
