import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const skills = [
  "Python", "React", "TypeScript", "FastAPI", "Node.js",
  "Next.js", "Tailwind", "PostgreSQL", "MongoDB", "scikit-learn",
  "XGBoost", "Framer Motion", "Git", "Cloudflare", "Supabase",
  "Redis", "WebSocket", "Claude API", "Leaflet.js", "Streamlit",
];

const RADIUS = 2.2;

// Fibonacci sphere algorithm to distribute points evenly on a sphere
function fibonacciSphere(count, radius) {
  const points = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / count);
    const phi = (2 * Math.PI * i) / goldenRatio;

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    points.push([x, y, z]);
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
        <Text
          key={skill}
          position={positions[i]}
          fontSize={0.18}
          color="#c9a84c"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      ))}
    </group>
  );
}

export default function SkillsGlobe() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.8} />
      <WordCloud />
    </Canvas>
  );
}
