import React, { useState, useEffect } from 'react';
import { HACKATHON_DATA } from '../data/config';
import { Calendar, MapPin, Clock, Users, Cpu } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Target date is Oct 4, 2026 09:00 AM
    const targetDate = new Date('October 4, 2026 09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
          seconds: Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0')
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-top-labels">
            <div className="section-label hero-registration-pill">REGISTRATION</div>
            <h3 className="hero-presents">ORGANIZED BY KSIJ MUMBAI (YOUTH COMMITTEE)</h3>
          </div>
          
          <h1 className="hero-title">
            HACKATHON <span className="text-cyan">2026</span>
          </h1>
          
          <h2 className="hero-tagline">
            BUILD FOR <span className="text-cyan">THE COMMUNITY.</span>
          </h2>
          
          <p className="hero-desc">
            {HACKATHON_DATA.description}
          </p>
          
          <div className="hero-actions">
            <a href={HACKATHON_DATA.registrationUrl} className="btn btn-primary hero-btn-main">
              REGISTER NOW &rarr;
            </a>
            <a href="#about" className="btn btn-secondary hero-btn-sub">
              EXPLORE HACKATHON &darr;
            </a>
          </div>

          <div className="hero-info-card card-glass">
            <div className="info-item">
              <Calendar className="icon" size={16} />
              {HACKATHON_DATA.date}
            </div>
            <div className="info-item">
              <MapPin className="icon" size={16} />
              {HACKATHON_DATA.location}
            </div>
            <div className="info-item">
              <Clock className="icon" size={16} />
              {HACKATHON_DATA.format.split('/')[0].trim()}
            </div>
            <div className="info-item">
              <Clock className="icon" size={16} />
              {HACKATHON_DATA.format.split('/')[1].trim()}
            </div>
            <div className="info-item">
              <Cpu className="icon" size={16} />
              {HACKATHON_DATA.technology}
            </div>
            <div className="info-item team-size-break">
              <Users className="icon" size={16} />
              {HACKATHON_DATA.teamSize}
            </div>
          </div>

          <div className="countdown-section card-glass">
            <p className="countdown-label">
              <Clock size={14} className="icon-mr" /> EVENT COUNTDOWN
            </p>
            <div className="countdown-timer">
              <div className="time-col">
                <div className="time-value text-cyan-gradient">{timeLeft.days}</div>
                <div className="time-label">DAYS</div>
              </div>
              <div className="time-sep">:</div>
              <div className="time-col">
                <div className="time-value text-cyan-gradient">{timeLeft.hours}</div>
                <div className="time-label">HOURS</div>
              </div>
              <div className="time-sep">:</div>
              <div className="time-col">
                <div className="time-value text-cyan-gradient">{timeLeft.minutes}</div>
                <div className="time-label">MINUTES</div>
              </div>
              <div className="time-sep">:</div>
              <div className="time-col">
                <div className="time-value text-yellow-gradient">{timeLeft.seconds}</div>
                <div className="time-label">SECONDS</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
