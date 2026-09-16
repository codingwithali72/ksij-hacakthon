import React, { useState, useRef } from 'react';
import { HACKATHON_DATA } from '../data/config';
import { ChevronDown, User, Scale, Monitor, Code, HeartHandshake, Sparkles, Trophy, ClipboardList, CheckCircle2, Compass, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import './RemainingSections.css';

export const Presentation = () => (
  <section className="info-section text-center">
    <div className="container">
      <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
        <Scale size={14} className="pill-icon" /> JUDGING
      </div>
      <h2 className="section-title">
        BUILD IT.<br/>
        PITCH IT.<br/>
        <span className="text-cyan glow-text">MAKE IT MATTER.</span>
      </h2>
      
      <div className="presentation-grid mt-4">
        <div className="card-glass presentation-card text-center">
          <h2 className="text-cyan size-display" style={{ marginBottom: '0.5rem', letterSpacing: '-2px' }}>7 MIN</h2>
          <h4 className="detail-card-title text-secondary">PRESENTATION / DEMO</h4>
        </div>
        
        <div className="presentation-plus text-cyan">
          <span style={{ fontSize: '3rem', fontWeight: '900', textShadow: '0 0 20px rgba(0, 240, 255, 0.4)' }}>+</span>
        </div>

        <div className="card-glass presentation-card text-center">
          <h2 className="text-yellow size-display" style={{ marginBottom: '0.5rem', letterSpacing: '-2px' }}>3 MIN</h2>
          <h4 className="detail-card-title text-secondary">Q & A</h4>
        </div>
      </div>

      <div className="criteria-grid mt-4">
        <div className="card-glass criteria-card">
          <Monitor size={18} className="text-cyan" />
          <h4 className="criteria-title">PRESENTATION / DEMO</h4>
        </div>
        <div className="card-glass criteria-card">
          <Code size={18} className="text-cyan" />
          <h4 className="criteria-title">IMPLEMENTATION</h4>
        </div>
        <div className="card-glass criteria-card">
          <HeartHandshake size={18} className="text-cyan" />
          <h4 className="criteria-title">COMMUNITY BENEFIT</h4>
        </div>
        <div className="card-glass criteria-card">
          <Sparkles size={18} className="text-cyan" />
          <h4 className="criteria-title">EASE OF USE / UX</h4>
        </div>
      </div>
    </div>
  </section>
);

export const Prizes = () => {
  const sectionRef = useRef(null);
  
  const mainPrize = useCountUp(HACKATHON_DATA.prizes.total, 2000, sectionRef);
  const firstPrize = useCountUp(HACKATHON_DATA.prizes.breakdown[0].amount, 1800, sectionRef);
  const secondPrize = useCountUp(HACKATHON_DATA.prizes.breakdown[1].amount, 1800, sectionRef);
  const thirdPrize = useCountUp(HACKATHON_DATA.prizes.breakdown[2].amount, 1800, sectionRef);
  
  const formatPrize = (num) => new Intl.NumberFormat('en-IN').format(num);

  return (
    <section id="prizes" className="info-section text-center reveal" ref={sectionRef}>
      <div className="container">
        <div className="section-label pill-label" style={{ marginBottom: '2rem', border: '1px solid rgba(255, 183, 3, 0.3)', color: '#ffb703' }}>
          <Trophy size={14} className="pill-icon" /> PRIZES
        </div>
        <h2 className="section-title text-yellow">
          BUILD.<br/>WIN.<br/>MAKE AN IMPACT.
        </h2>
        
        <div className="prize-pool card-glass border-yellow glow-yellow mt-4 text-center">
          <h2 className="text-yellow size-display" style={{ marginBottom: '1rem', letterSpacing: '-2px' }}>₹{formatPrize(mainPrize)}+</h2>
          <h4 className="detail-card-title text-secondary" style={{ marginBottom: '0.5rem' }}>TOTAL PRIZE POOL</h4>
          <p className="detail-card-desc text-secondary">INCLUDING ADDITIONAL GOODIES</p>
        </div>
        
        <div className="prize-breakdown mt-4">
          <div className="card-glass prize-card text-center border-yellow glow-yellow reveal reveal-stagger-1">
            <h4 className="detail-card-title text-yellow mb-3">1ST PLACE</h4>
            <h2 className="size-display text-yellow" style={{ letterSpacing: '-1px' }}>₹{formatPrize(firstPrize)}</h2>
          </div>
          <div className="card-glass prize-card text-center border-cyan glow-cyan reveal reveal-stagger-2">
            <h4 className="detail-card-title text-cyan mb-3">2ND PLACE</h4>
            <h2 className="size-display text-cyan" style={{ letterSpacing: '-1px' }}>₹{formatPrize(secondPrize)}</h2>
          </div>
          <div className="card-glass prize-card text-center border-white glow-white reveal reveal-stagger-3">
            <h4 className="detail-card-title text-white mb-3">3RD PLACE</h4>
            <h2 className="size-display text-white" style={{ letterSpacing: '-1px' }}>₹{formatPrize(thirdPrize)}</h2>
          </div>
        </div>

        <p className="detail-card-desc text-center mt-4" style={{ letterSpacing: '1px' }}>ADDITIONAL RECOGNITION AND GOODIES MAY ALSO BE PROVIDED.</p>
      </div>
    </section>
  );
};

export const Preparation = () => (
  <section className="info-section text-center">
    <div className="container">
      <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
        <ClipboardList size={14} className="pill-icon" /> BEFORE YOU ARRIVE
      </div>
      <h2 className="section-title">
        COME READY<br/>
        <span className="text-cyan glow-text">TO BUILD.</span>
      </h2>
      
      <div className="prep-grid mt-4">
        <div className="card-glass prep-card text-left border-cyan">
          <div className="prep-header mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <ClipboardList className="text-cyan" size={20} />
            <h4 className="detail-card-title text-cyan m-0">WHAT TO BRING</h4>
          </div>
          <ul className="prep-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="prep-item">
              <CheckCircle2 className="text-cyan prep-check" size={18} />
              <span>Laptop / device</span>
            </li>
            <li className="prep-item">
              <CheckCircle2 className="text-cyan prep-check" size={18} />
              <span>Your idea, if you have one</span>
            </li>
            <li className="prep-item">
              <CheckCircle2 className="text-cyan prep-check" size={18} />
              <span>Your team, if already formed</span>
            </li>
            <li className="prep-item">
              <CheckCircle2 className="text-cyan prep-check" size={18} />
              <span>Extension board — preferably</span>
            </li>
          </ul>
        </div>
        
        <div className="card-glass prep-card text-left border-yellow">
          <div className="prep-header mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Compass className="text-yellow" size={20} />
            <h4 className="detail-card-title text-yellow m-0">GOOD TO KNOW</h4>
          </div>
          <ul className="prep-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="prep-item">
              <CheckCircle2 className="text-yellow prep-check" size={18} />
              <span>One-day in-person event</span>
            </li>
            <li className="prep-item">
              <CheckCircle2 className="text-yellow prep-check" size={18} />
              <span>Food and refreshments</span>
            </li>
            <li className="prep-item">
              <CheckCircle2 className="text-yellow prep-check" size={18} />
              <span>Separate seating for ladies and gents</span>
            </li>
            <li className="prep-item">
              <CheckCircle2 className="text-yellow prep-check" size={18} />
              <span>Conveyance support may be available to participants who require it</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="info-section">
      <div className="container">
        <div className="text-center">
          <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
            <HelpCircle size={14} className="pill-icon" /> FAQ
          </div>
          <h2 className="section-title">
            QUESTIONS?<br/>
            <span className="text-cyan glow-text">WE HAVE ANSWERS.</span>
          </h2>
        </div>
        
        <div className="faq-list mt-4">
          {HACKATHON_DATA.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`card-glass faq-item ${isOpen ? 'open border-yellow glow-yellow' : 'border-cyan'}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="faq-question">
                  <h4 className={`m-0 ${isOpen ? 'text-yellow' : 'text-white'}`} style={{ transition: 'color 0.3s ease' }}>{item.question}</h4>
                  <ChevronDown className={`faq-icon ${isOpen ? 'text-yellow' : 'text-cyan'}`} size={24} />
                </div>
                <div className="faq-answer">
                  <p className="text-secondary mt-3 m-0" style={{ lineHeight: '1.6' }}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const CallToAction = () => (
  <section className="cta-section text-center" style={{ borderTop: '1px solid rgba(0, 240, 255, 0.3)', borderBottom: '1px solid rgba(0, 240, 255, 0.3)', backgroundColor: 'rgba(0, 15, 30, 0.5)', padding: '6rem 0' }}>
    <div className="container">
      <div className="section-label pill-label" style={{ marginBottom: '2rem', border: '1px solid rgba(255, 183, 3, 0.3)', color: '#ffb703', margin: '0 auto' }}>
        YOUR NEXT BUILD STARTS HERE
      </div>
      
      <h2 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '0.9', letterSpacing: '-2px', textTransform: 'uppercase', margin: '2rem 0', fontWeight: '900' }}>
        <span className="text-white">READY TO</span><br/>
        <span className="text-yellow" style={{ textShadow: '0 0 40px rgba(255, 183, 3, 0.4)' }}>BUILD?</span>
      </h2>
      
      <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
        Turn a real community problem into something people can use.
      </p>
      
      <div className="cta-actions">
        <a href={HACKATHON_DATA.registrationUrl} className="btn" style={{ backgroundColor: '#ffb703', color: '#000', border: 'none', boxShadow: '0 0 20px rgba(255, 183, 3, 0.3)', borderRadius: '8px', padding: '1rem 2.5rem', fontWeight: '700', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          REGISTER NOW <span>→</span>
        </a>
        <a href="#about" className="btn" style={{ backgroundColor: 'transparent', color: '#00f0ff', border: '1px solid rgba(0, 240, 255, 0.4)', borderRadius: '8px', padding: '1rem 2.5rem', fontWeight: '700', letterSpacing: '1px' }}>
          EXPLORE THE HACKATHON
        </a>
      </div>
    </div>
  </section>
);

export const Coordinators = () => (
  <section className="info-section text-center">
    <div className="container">
      <div className="section-label pill-label" style={{ marginBottom: '2rem' }}>
        <PhoneCall size={14} className="pill-icon" /> CONTACT & SUPPORT
      </div>
      <h2 className="section-title">
        EVENT<br/>
        <span className="text-cyan glow-text">COORDINATORS</span>
      </h2>
      <p className="info-desc mb-5 text-secondary">Have questions or need support? Reach out to our lead coordinators directly.</p>
      
      <div className="coordinators-grid">
        {HACKATHON_DATA.coordinators.map((coord, index) => (
          <div key={index} className="card-glass coordinator-card border-cyan">
            <div className="coordinator-avatar" style={{ boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)', backgroundColor: '#00f0ff', color: '#000' }}>
              <User size={32} />
            </div>
            <h4 className="m-0 text-white" style={{ fontSize: '1.4rem' }}>{coord.name}</h4>
            <p className="text-cyan text-sm mb-4 mt-1" style={{ fontWeight: '600', letterSpacing: '1px' }}>{coord.role}</p>
            
            <a href={coord.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn mt-3" style={{ backgroundColor: '#25D366', color: '#fff', padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', textDecoration: 'none', boxShadow: '0 0 8px rgba(37, 211, 102, 0.3)', width: '100%', justifyContent: 'center' }}>
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
