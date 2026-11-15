import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

/**
 * Optional delicate cursor follower on desktop.
 * Automatically checks for non-touch device and reduced motion preference.
 */
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable if device supports hover and fine pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (isTouchDevice || !visible) {
    return null;
  }

  return (
    <div
      className="sparkle-cursor-follower"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      aria-hidden="true"
    >
      <Heart className="cursor-heart" size={14} fill="currentColor" />
    </div>
  );
}
