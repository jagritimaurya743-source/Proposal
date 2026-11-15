import React, { useState } from 'react';
import { Heart, Sparkles, MailOpen } from 'lucide-react';
import romanticAudio from '../utils/romanticAudio';

/**
 * Screen 1: Welcome Envelope with 3D flap animation, wax seal, and letter reveal.
 */
export default function Envelope({ config, onOpenNext }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play soft chime & paper sound
    romanticAudio.playEnvelopeSound();

    // Allow opening animation to play, then advance to Screen 2
    setTimeout(() => {
      onOpenNext();
    }, 1100);
  };

  const { kicker, title, buttonText, waxSealIcon, tapTip } = config.welcomeScreen;

  return (
    <section className={`envelope-screen ${isOpening ? 'is-opening' : ''}`}>
      <span className="envelope-intro-kicker">{kicker}</span>
      <h1 className="envelope-heading">
        {title}
        <Sparkles className="sparkle-icon" size={26} />
      </h1>

      {/* 3D Interactive Envelope Stage */}
      <div
        className="envelope-stage"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpen()}
        aria-label="Open your surprise envelope"
      >
        <div className="envelope-box">
          {/* Letter inside envelope that rises up */}
          <div className="envelope-letter-card">
            <Heart className="letter-preview-heart" size={28} fill="currentColor" />
            <span className="letter-preview-text">For You</span>
          </div>

          {/* Top Flap (Flips open) */}
          <div className="envelope-flap" />

          {/* Bottom & side pocket folds */}
          <div className="envelope-pocket" />

          {/* Heart Wax Seal */}
          <div className="heart-seal-wrapper">
            <button
              type="button"
              className="heart-seal-btn"
              aria-label="Wax heart seal"
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
            >
              <Heart size={26} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      <div className="envelope-actions">
        <button
          type="button"
          className="btn-open-envelope"
          onClick={handleOpen}
          disabled={isOpening}
        >
          <MailOpen size={20} />
          <span>{isOpening ? 'Opening for you...' : buttonText}</span>
        </button>
        <p className="envelope-tip">{tapTip}</p>
      </div>
    </section>
  );
}
