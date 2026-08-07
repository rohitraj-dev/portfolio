import { useEffect, useRef } from 'react';

const skills = [
  "Python", "React", "TypeScript", "FastAPI", "Node.js",
  "Next.js", "Tailwind", "PostgreSQL", "MongoDB", "scikit-learn",
  "XGBoost", "Framer Motion", "Git", "Cloudflare", "Supabase",
  "Redis", "WebSocket", "Claude API", "Leaflet.js", "Streamlit",
];

function fibonacciSphere(count, radius) {
  const points = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / count);
    const phi = (2 * Math.PI * i) / goldenRatio;
    points.push({
      x: radius * Math.sin(theta) * Math.cos(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(theta),
    });
  }
  return points;
}

export default function SkillsGlobe() {
  const containerRef = useRef();
  const angleRef = useRef({ x: 0.3, y: 0 });
  const rafRef = useRef();

  const RADIUS = 130;
  const basePositions = fibonacciSphere(skills.length, RADIUS);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tags = container.querySelectorAll('[data-tag]');

    function rotate() {
      angleRef.current.y += 0.005;
      angleRef.current.x += 0.001;

      const cosX = Math.cos(angleRef.current.x);
      const sinX = Math.sin(angleRef.current.x);
      const cosY = Math.cos(angleRef.current.y);
      const sinY = Math.sin(angleRef.current.y);

      tags.forEach((tag, i) => {
        const { x, y, z } = basePositions[i];

        // Rotate around Y axis
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // Rotate around X axis
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const scale = (z2 + RADIUS) / (2 * RADIUS);
        const opacity = 0.25 + scale * 0.75;
        const fontSize = 10 + scale * 6;

        tag.style.transform = `translate(${x1}px, ${y2}px)`;
        tag.style.opacity = opacity;
        tag.style.fontSize = `${fontSize}px`;
        tag.style.zIndex = Math.round(scale * 100);
      });

      rafRef.current = requestAnimationFrame(rotate);
    }

    rafRef.current = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            data-tag="true"
            style={{
              position: 'absolute',
              color: '#c9a84c',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              userSelect: 'none',
              willChange: 'transform, opacity',
              transition: 'none',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
