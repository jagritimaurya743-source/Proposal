import { useEffect } from 'react';
import confetti from 'canvas-confetti';

/**
 * Fires celebratory romantic confetti (rose, pink, cream, gold particles)
 * using canvas-confetti.
 */
export function fireRomanticConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.65 },
    colors: ['#c9184a', '#ff758f', '#ffb3c1', '#f3e8ff', '#e0a96d', '#ffffff'],
    disableForReducedMotion: true,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multi-stage burst
  fire(0.25, {
    spread: 30,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

export default function ConfettiEffect({ active }) {
  useEffect(() => {
    if (active) {
      fireRomanticConfetti();

      // Second gentle shower after 1.2 seconds
      const timeout = setTimeout(() => {
        fireRomanticConfetti();
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [active]);

  return null;
}
