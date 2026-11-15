import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import romanticAudio from '../utils/romanticAudio';

/**
 * Screen 4: Personal Message (Love Letter) on parchment card with typewriter effect.
 */
export default function LoveLetter({ config, onGoToProposal }) {
  const { herName, yourName, loveLetter } = config;
  const rawBody = loveLetter.body.replace('{HER_NAME}', herName);
  const salutation = loveLetter.salutation.replace('{HER_NAME}', herName);

  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const speedMs = 38; // Pleasant romantic reading speed

    const interval = setInterval(() => {
      if (index < rawBody.length) {
        setDisplayedText(rawBody.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [rawBody]);

  const handleSkipTyping = () => {
    setDisplayedText(rawBody);
    setIsTypingComplete(true);
  };

  const handleContinue = () => {
    romanticAudio.playChime('sweet');
    onGoToProposal();
  };

  return (
    <section className="love-letter-screen">
      <div className="letter-paper-wrapper">
        <div className="parchment-card">
          {/* Header Emblem */}
          <div className="letter-header-emblem">
            <span className="letter-salutation">{salutation}</span>
            <span className="letter-stamp" aria-hidden="true">💌</span>
          </div>

          {/* Letter Body */}
          <div className="letter-prose-content">
            <p className="typed-text">{displayedText}</p>
            {!isTypingComplete && <span className="typing-cursor" aria-hidden="true" />}
          </div>

          {/* Letter Signoff */}
          <div className="letter-signoff">
            <p className="signoff-intro">{loveLetter.signoff}</p>
            <p className="signoff-signature">{yourName}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="letter-actions-bar">
          <button
            type="button"
            className="btn-continue-proposal"
            onClick={handleContinue}
          >
            <span>{loveLetter.buttonText}</span>
            <ArrowRight size={18} />
          </button>

          {!isTypingComplete && (
            <button
              type="button"
              className="btn-read-instant"
              onClick={handleSkipTyping}
            >
              {loveLetter.skipButtonText || 'Read whole letter'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
