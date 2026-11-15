import React from 'react';
import { Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import romanticAudio from '../utils/romanticAudio';

/**
 * Screen 2: Personal Welcome with her name, custom warm message, and Begin CTA.
 */
export default function WelcomeScreen({ config, onStartQuestions }) {
  const { herName, personalWelcome } = config;

  // Substitute {HER_NAME} placeholder if present
  const greetingText = personalWelcome.greeting.replace('{HER_NAME}', herName);

  const handleBegin = () => {
    romanticAudio.playChime('sweet');
    onStartQuestions();
  };

  return (
    <section className="welcome-screen">
      <div className="welcome-card">
        <div className="welcome-badge">
          <Sparkles className="sparkle-dot" size={14} />
          <span>{personalWelcome.badge}</span>
        </div>

        <h2 className="welcome-title">
          {greetingText.split(herName)[0]}
          <span className="her-name-highlight">{herName}</span>
          {greetingText.split(herName)[1] || ' 💗'}
        </h2>

        <p className="welcome-message-prose">
          {personalWelcome.message}
        </p>

        <div className="welcome-interactive-hint">
          <HeartHandshake size={18} />
          <span>{personalWelcome.hintText}</span>
        </div>

        <button
          type="button"
          className="btn-begin-journey"
          onClick={handleBegin}
        >
          <span>{personalWelcome.buttonText}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
