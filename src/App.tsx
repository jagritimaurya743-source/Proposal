import React, { useState } from 'react';
import defaultRomanticConfig from './config';
import FloatingHearts from './components/FloatingHearts';
import Envelope from './components/Envelope';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import LoveLetter from './components/LoveLetter';
import ProposalScreen from './components/ProposalScreen';
import MusicPlayer from './components/MusicPlayer';
import CustomCursor from './components/CustomCursor';
import PersonalizeModal from './components/PersonalizeModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [config, setConfig] = useState(defaultRomanticConfig);

  // Transitions
  const handleNextFromEnvelope = () => setCurrentScreen(1);
  const handleStartQuestions = () => setCurrentScreen(2);
  const handleCompleteQuestions = () => setCurrentScreen(3);
  const handleGoToProposal = () => setCurrentScreen(4);
  const handleReset = () => setCurrentScreen(0);

  const stageLabels = ['Surprise', 'Welcome', 'Questions', 'Letter', 'Proposal'];

  return (
    <div className="romantic-app-container">
      {/* Ambient gradient orbs */}
      <div className="ambient-aurora-orb orb-blush" aria-hidden="true" />
      <div className="ambient-aurora-orb orb-lavender" aria-hidden="true" />
      <div className="ambient-aurora-orb orb-rose" aria-hidden="true" />

      {/* Floating particles (hearts, petals, sparkles) */}
      <FloatingHearts count={24} />

      {/* Non-intrusive desktop romantic cursor */}
      <CustomCursor />

      {/* Ambient music & restart button */}
      <MusicPlayer onReset={handleReset} currentScreenIndex={currentScreen} />

      {/* Main Viewport Container */}
      <main className="romantic-viewport">
        {currentScreen === 0 && (
          <Envelope
            config={config}
            onOpenNext={handleNextFromEnvelope}
          />
        )}

        {currentScreen === 1 && (
          <WelcomeScreen
            config={config}
            onStartQuestions={handleStartQuestions}
          />
        )}

        {currentScreen === 2 && (
          <QuestionScreen
            questions={config.questions}
            onCompleteQuestions={handleCompleteQuestions}
          />
        )}

        {currentScreen === 3 && (
          <LoveLetter
            config={config}
            onGoToProposal={handleGoToProposal}
          />
        )}

        {currentScreen === 4 && (
          <ProposalScreen
            config={config}
            onResetExperience={handleReset}
          />
        )}
      </main>

      {/* Navigation stage indicator dots */}
      <nav className="romantic-stage-tracker" aria-label="Experience stages">
        {stageLabels.map((label, idx) => (
          <button
            key={label}
            type="button"
            className={`tracker-dot ${currentScreen === idx ? 'active' : ''}`}
            onClick={() => setCurrentScreen(idx)}
            title={`Stage ${idx + 1}: ${label}`}
            aria-label={`Go to stage ${idx + 1}: ${label}`}
          />
        ))}
      </nav>

      {/* Easy on-screen customizer */}
      <PersonalizeModal config={config} onUpdateConfig={setConfig} />
    </div>
  );
}
