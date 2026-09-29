import React, { useEffect, useRef, useState } from 'react';
import { HACKATHON_DATA } from '../data/config';
import { UserPlus, Globe, GraduationCap, Users, List, User, Armchair, Info, Lightbulb, Calendar } from 'lucide-react';
import { HeartHandshake, Building2, BookOpen, Leaf, ShieldCheck, ChevronDown, Rocket } from 'lucide-react';
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
          <h4 className="detail-card-title m-0 text-white">Khoja Shia Isna Ashari Jama Masjid (Dongri)</h4>
        </div>
        <div className="card-glass text-left border-cyan" style={{ padding: '2rem 1.5rem' }}>
          <p className="text-cyan text-xs" style={{ letterSpacing: '2px', marginBottom: '0.8rem' }}>FORMAT</p>
          <h4 className="detail-card-title m-0 text-white">ONE-DAY / IN-PERSON / OFFLINE ONLY</h4>
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

const problems = [
  {
    id: 1,
    title: 'UNIFIED JAMAAT DIGITAL PLATFORM',
    description:
      'Build a centralized digital platform to connect community members with Jamaat services and facilitate communication.',
    icon: Globe,
    points: [
      '<b>Jamaat Website:</b> Modern, mobile-friendly Jamaat website with useful features and easy content management',
      '<b>Community Information:</b> Provide a centralized source of information about Jamaat activities, services, and initiatives.',
      '<b>Digital Jamaat Services:</b> Enable online applications, form submissions, payments, appointment bookings, and application tracking.',
      '<b>KSIJ Connect:</b> Create a unified platform for community announcements, discussions, groups, and coordination.',
    ]
  },
  {
    id: 2,
    title: 'COMMUNITY WELFARE & ASSISTANCE',
    description:
      'Develop solutions to improve the delivery, accessibility, and management of community welfare services.',
    icon: HeartHandshake,
    points: [
      '<b>Beneficiary Management:</b> Streamline beneficiary registration, verification, benefit allocation, and follow-ups for medical, educational, ration, etc assistance.',
      '<b>Emergency Assistance:</b> Connect people in need with blood donors, medical assistance, and emergency volunteers.',
      '<b>Community Support & Resource Sharing:</b> Facilitate community kitchens, resource sharing, and assistance for migrating members.',
      '<b>Welfare Coordination:</b> Improve coordination between beneficiaries, volunteers, donors, and welfare committees.',
      '<b>Elderly Care & Assistance:</b> A platform to connect senior citizens with volunteers for medical appointments, transportation, errands, and other essential needs.',
      '<b>Accessible Community Services:</b> Technology to make Jamaat services and events more accessible to senior citizens and people with disabilities.',
    ]
  },
  {
    id: 3,
    title: 'EDUCATION, EMPLOYMENT & CAREER',
    description:
      'Create platforms and tools to support educational opportunities and professional growth within the community.',
    icon: GraduationCap,
    points: [
      '<b>Job & Career Portal:</b> Connect job seekers, employers, and mentors through a platform that may incorporate existing initiatives such as LEAP.',
      '<b>eMadressa:</b> Develop a digital learning platform for Islamic education, including courses, assessments, progress tracking, and parental involvement.',
      '<b>Scholarship Management:</b> Simplify scholarship applications, verification, approval, and disbursement.',
      '<b>Career Development:</b> Facilitate mentorship, career guidance, skill development, and professional networking.',
    ]
  },
  {
    id: 4,
    title: 'COMMUNITY SERVICES & RESOURCE MANAGEMENT',
    description:
      'Develop solutions to simplify the management and accessibility of community facilities, services, and resources.',
    icon: Building2,
    points: [
      '<b>Venue Booking System:</b> Create a platform to discover and book venues for weddings, majalis, funerals, and other community events.',
      '<b>Event Management:</b> Simplify event registrations, attendance tracking, volunteer coordination, crowd management and resource allocation.',
      '<b>Shia Business Directory:</b> Build a searchable directory of community businesses, professionals, with business profiles, services, and customer enquiries.',
      '<b>Asset Management:</b> Develop systems to manage Jamaat properties, equipment, maintenance, and other resources.',
      '<b>Smart Donations & Fund Utilization:</b> A transparent donation management platform that tracks fundraising campaigns, donations, fund allocation, and project progress.',
    ]
  },
  {
    id: 5,
    title: 'RELIGIOUS INNOVATION & DIGITAL EXPERIENCES',
    description:
      'Leverage technology to enhance religious learning, Azadari, Ziyarat, and access to Islamic knowledge.',
    icon: BookOpen,
    points: [
      '<b>Innovative Religious Applications:</b> Develop new solutions that improve religious learning, participation in Azadari, or the Ziyarat experience.',
      '<b>Ziyarat Translator Companion:</b> Create a multilingual platform with translator and offline access.',
      '<b>Religious Knowledge Repository:</b> Build a searchable digital library of religious books, lectures, and historical resources.',
      '<b>Interactive Learning:</b> Develop engaging and personalized experiences for Islamic education and religious learning.',
    ]
  },
  {
    id: 6,
    title: 'SMART INFRASTRUCTURE & SUSTAINABILITY',
    description:
      'Use technology to improve the efficiency, sustainability, and accessibility of Jamaat facilities.',
    icon: Leaf,
    points: [
      '<b>Smart Wudhu Systems:</b> Develop IoT-based solutions for water conservation and efficient Wudhu facilities.',
      '<b>Sustainable Jamaat Halls:</b> Build smart systems to optimize electricity, water consumption, and other resources.',
      '<b>Energy Management:</b> Explore renewable energy monitoring, consumption tracking, and optimization.',
      '<b>Smart Facilities:</b> Use sensors and automation to improve building management, occupancy monitoring, and accessibility.',
    ]
  },
  // {
  //   id: 7,
  //   title: 'COMMUNITY MOBILITY & CONNECTIVITY',
  //   description:
  //     'Develop solutions to make transportation and coordination easier for community members.',
  //   icon: Car,
  //   points: [
  //     'Community carpooling and bike-pooling',
  //     'Transportation coordination for majalis and Ziyarat',
  //     'Mobility assistance for senior citizens and others in need',
  //     'Location-based community services and resources'
  //   ]
  // },
  {
    id: 7,
    title: 'AI, AUTOMATION & CYBERSECURITY',
    description:
      'Explore emerging technologies to improve Jamaat operations, automate processes, and protect community information.',
    icon: ShieldCheck,
    points: [
      '<b>AI-Powered Helpdesk:</b> Build an intelligent assistant to answer questions about Jamaat services, procedures, and activities using verified information.',
      '<b>Process Automation:</b> Automate repetitive administrative tasks and improve the efficiency of Jamaat operations.',
      '<b>Cybersecurity:</b> Develop solutions to protect sensitive community data, detect digital threats, and prevent fraud.',
      '<b>Data Analytics & Intelligent Search:</b> Use AI and data analytics to improve access to information and support decision-making.',
    ]
  },
  {
    id: 8,
    title: 'YOUR OWN IDEA',
    description:
      'Come up with your own idea / problem statement that fits under the theme of "Shia Community Benefit" or "Jamaat Benefit"',
    icon: Rocket,
    points: [
      'Please verify once with us before finalizing'
    ]
  }
];

export const ProblemStatements = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleCard = (id) => {
    setExpanded((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="problems" className="info-section">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center problem-header">
          <div className="section-label pill-label">
            <Lightbulb size={14} className="pill-icon" />
            THE CHALLENGES
          </div>

          <h2 className="section-title">
            WHAT WILL
            <br />
            <span className="text-cyan">YOU BUILD?</span>
          </h2>

          <p className="info-desc">
            Explore real community challenges and build innovative
            solutions that create meaningful impact.
          </p>
        </div>

        {/* Problem Statement Cards */}
        <div className="problem-grid">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isExpanded = expanded.includes(problem.id);

            return (
              <div
                key={problem.id}
                className={`card-glass problem-card ${
                  isExpanded ? 'problem-card-expanded' : ''
                }`}
              >
                <div className="problem-card-top">
                  <div className="problem-icon">
                    <Icon size={24} />
                  </div>

                  <span className="problem-number">
                    {String(problem.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="problem-title">
                  {problem.title}
                </h3>

                <p className="problem-description">
                  {problem.description}
                </p>

                <button
                  className="problem-toggle"
                  onClick={() => toggleCard(problem.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`problem-details-${problem.id}`}
                >
                  {isExpanded ? 'SHOW LESS' : 'EXPLORE IDEAS'}
                  <ChevronDown
                    size={16}
                    className={isExpanded ? 'rotated' : ''}
                  />
                </button>

                {isExpanded && (
                  <div
                    id={`problem-details-${problem.id}`}
                    className="problem-details"
                  >
                    <ul>
                      {problem.points.map((point, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Participant Guidelines */}
        <div className="problem-guidelines card-glass">
          <div className="guidelines-heading">
            <Info size={20} className="text-cyan" />
            <h3>THINK BEYOND THE LIST</h3>
          </div>

          <p>
            These problem statements are <b>ideas and suggestions, not strict requirements or limitations.</b><br />
            They are intended to inspire participants to identify challenges and develop meaningful solutions.
          </p>

          <div className="guidelines-grid">
            <div>
              <h4 className="text-cyan">MIX & MATCH</h4>
              <p>
                Combine ideas from different categories to create
                a comprehensive solution.
              </p>
            </div>

            <div>
              <h4 className="text-cyan">THINK CREATIVELY</h4>
              <p>
                Identify other community challenges and propose
                innovative solutions beyond the listed ideas.
              </p>
            </div>

            <div>
              <h4 className="text-cyan">YOUR OWN APPROACH</h4>
              <p>
                Solve one problem, multiple problems, or develop
                an entirely new solution.
              </p>
            </div>

            <div>
              <h4 className="text-cyan">CREATE IMPACT</h4>
              <p>
                Focus on practical solutions that address genuine
                community needs.
              </p>
            </div>
          </div>

          <div className="guidelines-footer">
            <Lightbulb size={18} className="text-yellow" />
            <span>
              Think beyond the obvious. Combine ideas. Build
              solutions that make a difference.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
