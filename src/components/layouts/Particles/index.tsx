'use client';
import { useEffect, useMemo } from 'react';
import { initParticlesEngine, Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function BackgroundParticles() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Carrega uma versão leve (pode trocar por loadFull)
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      // background: { color: { value: '#0f172a' } },
      // fpsLimit: 60,
      particles: {
        color: { value: '#9000ff' },
        // color: { value: '#ffffff' },
        links: {
          enable: true,
          color: '#ff0274',
          distance: 150,
          triangles: {
            enable: true,
            opacity: 0.01,
          },
        },
        move: { enable: true, speed: 1 },
        number: { value: 200, density: { enable: true, area: 1000 } },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 5 } },
        shape: { type: 'circle' },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
}
