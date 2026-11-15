import React, { useMemo } from 'react';
import { Heart, Sparkles } from 'lucide-react';

/**
 * Floating romantic background particles: hearts, sparkles, and rose petals.
 * Automatically respects prefers-reduced-motion via SCSS.
 */
export default function FloatingHearts({ count = 22 }) {
  const particles = useMemo(() => {
    const items = [];
    const types = ['heart', 'petal', 'sparkle', 'heart', 'petal'];

    for (let i = 0; i < count; i++) {
      const type = types[i % types.length];
      const left = Math.floor(Math.random() * 96) + 2; // 2% to 98%
      const duration = 9 + Math.random() * 12; // 9s to 21s
      const delay = Math.random() * 8; // 0s to 8s
      const size = type === 'sparkle' ? 12 + Math.random() * 8 : 16 + Math.random() * 18;
      const opacity = 0.35 + Math.random() * 0.45;

      items.push({
        id: i,
        type,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        size,
        opacity,
      });
    }
    return items;
  }, [count]);

  return (
    <div className="floating-hearts-container" aria-hidden="true">
      {particles.map((p) => {
        if (p.type === 'heart') {
          return (
            <div
              key={p.id}
              className="floating-item heart-item"
              style={{
                left: p.left,
                animationDuration: p.duration,
                animationDelay: p.delay,
                opacity: p.opacity,
              }}
            >
              <Heart size={p.size} fill="currentColor" />
            </div>
          );
        }

        if (p.type === 'petal') {
          return (
            <div
              key={p.id}
              className="floating-item petal-item"
              style={{
                left: p.left,
                animationDuration: p.duration,
                animationDelay: p.delay,
                transform: `scale(${p.size / 20})`,
                opacity: p.opacity,
              }}
            />
          );
        }

        return (
          <div
            key={p.id}
            className="floating-item sparkle-item"
            style={{
              left: p.left,
              animationDuration: `${parseFloat(p.duration) / 3}s`,
              animationDelay: p.delay,
              top: `${Math.random() * 90}%`,
              opacity: p.opacity,
            }}
          >
            <Sparkles size={p.size} />
          </div>
        );
      })}
    </div>
  );
}
