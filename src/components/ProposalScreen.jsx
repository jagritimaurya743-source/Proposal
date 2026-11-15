import React, { useState, useRef } from 'react';
import { Heart, Sparkles, RotateCcw, Share2, Check } from 'lucide-react';
import ConfettiEffect from './Confetti';
import romanticAudio from '../utils/romanticAudio';

/**
 * Screen 5: The Proposal Screen ("Do you love me?")
 * Features the legendary runaway "No" button that playfully dodges across the screen
 * whenever hovered, touched, or clicked, while the "Yes" button grows with love!
 */
export default function ProposalScreen({ config, onResetExperience }) {
  const [responseState, setResponseState] = useState(null); // 'yes' | null
  const [copiedNote, setCopiedNote] = useState(false);
  const [noPos, setNoPos] = useState(null);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [dodgeMessage, setDodgeMessage] = useState('');
  const noButtonRef = useRef(null);

  const { proposal } = config;

  const dodgeMessages = [
    "Nice try, sneaky! 😜",
    "Error 404: 'No' does not exist! ❌",
    "Did you really think I'd let you click that? 😏",
    "My heart doesn't accept rejections! 💖",
    "Keep chasing, it's good cardio! 🏃‍♀️💨",
    "You know you love me, just admit it! 🥰",
    "The 'No' button is officially on strike! 🙈",
    "Give up and click Yes already! 💕",
  ];

  // Function to move the "No" button to a random spot across the screen
  const dodgeNoButton = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const buttonWidth = 140;
    const buttonHeight = 52;
    const padding = 24;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const minX = padding;
    const maxX = Math.max(padding, vw - buttonWidth - padding);
    const minY = padding + 60; // Leave room for top audio pill
    const maxY = Math.max(minY + 50, vh - buttonHeight - padding - 60); // Leave room for bottom stage tracker

    let newX = Math.floor(Math.random() * (maxX - minX)) + minX;
    let newY = Math.floor(Math.random() * (maxY - minY)) + minY;

    // Ensure it jumps a reasonable distance if it was already moved
    if (noPos) {
      if (Math.abs(newX - noPos.x) < 120) {
        newX = newX > vw / 2 ? newX - 150 : newX + 150;
      }
      if (Math.abs(newY - noPos.y) < 80) {
        newY = newY > vh / 2 ? newY - 100 : newY + 100;
      }
      newX = Math.max(minX, Math.min(newX, maxX));
      newY = Math.max(minY, Math.min(newY, maxY));
    }

    setNoPos({ x: newX, y: newY });
    const nextDodgeCount = dodgeCount + 1;
    setDodgeCount(nextDodgeCount);
    setDodgeMessage(dodgeMessages[(nextDodgeCount - 1) % dodgeMessages.length]);

    // Cute playful audio blip
    romanticAudio.playNote(659.25, 0, 0.15, 0.08);
  };

  const handleYes = () => {
    setResponseState('yes');
    romanticAudio.playChime('celebrate');
  };

  const handleCopySweetMessage = () => {
    const textToCopy = `A Little Question for You 💗\n"${proposal.question}" - Said YES!\n- From ${config.yourName} to ${config.herName}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2200);
  };

  const yesScale = 1 + Math.min(dodgeCount * 0.06, 0.45);

  return (
    <section className="proposal-screen">
      <ConfettiEffect active={responseState === 'yes'} />

      <div className="proposal-card">
        {/* Animated Botanical Blooming Rose */}
        <div className="rose-blossom-wrapper" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="rosePetalGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ff8fab" />
                <stop offset="65%" stopColor="#e63956" />
                <stop offset="100%" stopColor="#800f2f" />
              </radialGradient>
              <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#52b788" />
                <stop offset="100%" stopColor="#2d6a4f" />
              </linearGradient>
            </defs>

            {/* Stem & Leaves */}
            <path
              d="M50 68 C 50 82, 48 90, 52 96"
              stroke="#2d6a4f"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Left Leaf */}
            <path
              d="M48 76 C 36 74, 30 66, 34 62 C 40 64, 46 70, 48 76"
              fill="url(#leafGrad)"
            />
            {/* Right Leaf */}
            <path
              d="M52 80 C 64 78, 70 70, 66 66 C 60 68, 54 74, 52 80"
              fill="url(#leafGrad)"
            />

            {/* Rose Outer Petals */}
            <circle cx="50" cy="46" r="28" fill="url(#rosePetalGrad)" opacity="0.9" />
            <path
              d="M32 46 C 32 32, 44 26, 50 26 C 56 26, 68 32, 68 46 C 68 58, 56 64, 50 64 C 44 64, 32 58, 32 46 Z"
              fill="#c9184a"
            />
            <path
              d="M38 42 C 38 34, 46 30, 50 30 C 54 30, 62 34, 62 42 C 62 50, 54 54, 50 54 C 46 54, 38 50, 38 42 Z"
              fill="#e63956"
            />
            {/* Rose Center Swirl */}
            <path
              d="M44 40 C 44 36, 48 34, 50 34 C 52 34, 56 36, 56 40 C 56 44, 52 46, 50 46 C 47 46, 45 43, 47 41 C 49 39, 52 40, 52 41"
              stroke="#ffd1dc"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Normal Proposal State */}
        {responseState === null && (
          <>
            <span className="proposal-lead-in">{proposal.kicker}</span>
            <h2 className="proposal-question-title">{proposal.question}</h2>

            <div className="proposal-buttons-group">
              {/* YES Button - Scales gently as No dodges */}
              <button
                type="button"
                className="btn-proposal-yes"
                style={{
                  transform: `scale(${yesScale})`,
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onClick={handleYes}
              >
                <Heart size={20} fill="currentColor" />
                <span>{proposal.yesButtonText || 'Yes 💖'}</span>
              </button>

              {/* RUNAWAY NO BUTTON */}
              <button
                ref={noButtonRef}
                type="button"
                className={`btn-proposal-time btn-runaway-no ${noPos ? 'is-dodging' : ''}`}
                style={
                  noPos
                    ? {
                        position: 'fixed',
                        left: `${noPos.x}px`,
                        top: `${noPos.y}px`,
                        zIndex: 999,
                        margin: 0,
                        transition: 'left 0.25s cubic-bezier(0.25, 1, 0.5, 1), top 0.25s cubic-bezier(0.25, 1, 0.5, 1), transform 0.2s ease',
                      }
                    : {}
                }
                onMouseEnter={dodgeNoButton}
                onPointerEnter={dodgeNoButton}
                onPointerDown={dodgeNoButton}
                onTouchStart={dodgeNoButton}
                onFocus={dodgeNoButton}
                onClick={dodgeNoButton}
                aria-label="No button (playfully moves away)"
              >
                <span>{proposal.noButtonText || 'No'}</span>
              </button>
            </div>

            {/* Playful Dodge Message */}
            {dodgeCount > 0 && (
              <div className="dodge-teaser-container" role="status">
                <span className="dodge-teaser-text">{dodgeMessage}</span>
              </div>
            )}

            <p className="proposal-respect-note">
              There is only one right answer here! 🥰
            </p>
          </>
        )}

        {/* YES Celebration Outcome */}
        {responseState === 'yes' && (
          <div className="response-outcome-card">
            <div className="outcome-icon" aria-hidden="true">
              {proposal.yesOutcome.emoji}
            </div>
            <h2 className="outcome-heading outcome-celebrate">
              {proposal.yesOutcome.title}
            </h2>
            <p className="outcome-message">
              {proposal.yesOutcome.message}
            </p>

            <div className="outcome-actions">
              <button
                type="button"
                className="btn-replay"
                onClick={() => {
                  setResponseState(null);
                  setNoPos(null);
                  setDodgeCount(0);
                  setDodgeMessage('');
                  onResetExperience();
                }}
              >
                <RotateCcw size={16} />
                <span>Experience Again</span>
              </button>

              <button
                type="button"
                className="btn-share-moment"
                onClick={handleCopySweetMessage}
              >
                {copiedNote ? <Check size={16} /> : <Share2 size={16} />}
                <span>{copiedNote ? 'Copied with love!' : 'Save This Moment 💌'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
