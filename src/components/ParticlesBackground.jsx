import React, { useCallback } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    try {
      console.log("Initializing tsParticles engine...");
      await loadSlim(engine);
      console.log("tsParticles engine loaded successfully!");
    } catch (e) {
      console.error("Failed to load tsParticles engine:", e);
    }
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#8a2be2", "#4169e1", "#7b68ee", "#6a5acd"],
            },
            links: {
              color: "#7b68ee",
              distance: 120,
              enable: true,
              opacity: 0.8,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;
