import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import { 
  WhoCanParticipate, 
  IdeaToImpact, 
  BuildTogether, 
  WhatWillYouBuild, 
  AISection, 
  EventAtGlance 
} from './components/InfoSections';
import Schedule from './components/Schedule';
import { 
  Presentation, 
  Prizes, 
  Preparation, 
  FAQ, 
  CallToAction, 
  Coordinators 
} from './components/RemainingSections';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <ParticlesBackground />
      <div className="bg-glow"></div>
      <div className="bg-glow-right"></div>
      
      <Header />
      
      <main>
        <Hero />
        <AboutSection />
        <WhoCanParticipate />
        <IdeaToImpact />
        <BuildTogether />
        {/* <WhatWillYouBuild /> */}
        {/* <AISection /> */}
        {/* <Schedule /> */}
        {/* <Presentation /> */}
        {/* <Prizes /> */}
        {/* <Preparation /> */}
        <EventAtGlance />
        <FAQ />
        <CallToAction />
        <Coordinators />
      </main>

      <Footer />
    </>
  );
}

export default App;
