import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const skills = [
  "Python", "React", "TypeScript", "FastAPI", "Node.js",
  "Next.js", "Tailwind", "PostgreSQL", "MongoDB", "scikit-learn",
  "XGBoost", "Framer Motion", "Git", "Cloudflare", "Supabase",
  "Redis", "WebSocket", "Claude API", "Leaflet.js", "Streamlit",
];

const RADIUS = 2.2;

function fibonacciSphere(count, radius) {
  const points = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / count);
    const phi = (2 * Math.PI * i) / goldenRatio;
    points.push([
      radius * Math.sin(theta) * Math.cos(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(theta),
    ]);
  }
  return points;
}

const positions = fibonacciSphere(skills.length, RADIUS);

function WordCloud() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x += 0.0004;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <Html
          key={skill}
          position={positions[i]}
          center
          style={{
            color: '#c9a84c',
            fontSize: '11px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            textShadow: '0 0 8px rgba(201,168,76,0.4)',
          }}
        >
          {skill}
        </Html>
      ))}
    </group>
  );
}

export default function SkillsGlobe() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 5.5], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <WordCloud />
    </Canvas>
  );
}
