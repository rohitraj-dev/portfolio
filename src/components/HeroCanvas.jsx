import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function GoldIcosahedron() {
  const meshRef = useRef(null);
  const wireRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x += 0.003;
      wireRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      {/* Solid layer */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#c9a84c"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial
          color="#c9a84c"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      style={{ background: 'transparent' }}
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 3.5], fov: 45 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#c9a84c" />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#ffffff" />
      <GoldIcosahedron />
    </Canvas>
  );
}
