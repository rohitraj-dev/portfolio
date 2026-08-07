import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check desktop on mount only (avoids SSR issues)
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Large ambient glow — slow trail */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
          transition: 'transform 0.15s ease-out, opacity 0.3s ease',
          opacity: visible ? 1 : 0,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      {/* Small dot — fast follow */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(201,168,76,0.6)',
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          transition: 'transform 0.05s ease-out, opacity 0.3s ease',
          opacity: visible ? 1 : 0,
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  );
}
