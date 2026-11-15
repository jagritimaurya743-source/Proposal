import React, { useState } from 'react';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import romanticAudio from '../utils/romanticAudio';

/**
 * Screen 3: Interactive Questions sequence with progress dots, feedback toasts, and respectful progression.
 */
export default function QuestionScreen({ questions, onCompleteQuestions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isSwitching, setIsSwitching] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (option, idx) => {
    if (isSwitching) return;

    setSelectedOptionIdx(idx);
    setFeedbackMessage(option.responseFeedback || 'Such a sweet answer 💖');
    romanticAudio.playChime('sweet');

    // Smooth delay so the user can enjoy the feedback toast, then advance
    setIsSwitching(true);
    setTimeout(() => {
      if (currentIndex + 1 < totalQuestions) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOptionIdx(null);
        setFeedbackMessage('');
        setIsSwitching(false);
      } else {
        // All questions completed, advance to Love Letter
        onCompleteQuestions();
      }
    }, 1100);
  };

  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <section className="questions-screen">
      <div className="question-container">
        {/* Progress Tracker */}
        <div className="question-progress-header">
          <div className="progress-step-text">
            <Heart size={14} fill="currentColor" />
            <span>Question {currentIndex + 1} of {totalQuestions}</span>
          </div>

          <div className="progress-track" aria-hidden="true">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Step Heart Icons */}
          <div className="step-hearts">
            {questions.map((q, idx) => {
              const isDone = idx < currentIndex;
              const isCurrent = idx === currentIndex;
              return (
                <div
                  key={q.id || idx}
                  className={`step-heart-node ${isDone ? 'completed' : ''} ${isCurrent ? 'active' : ''}`}
                >
                  <Heart
                    size={16}
                    fill={isDone || isCurrent ? 'currentColor' : 'none'}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Question Body */}
        <div className={`question-card-inner ${isSwitching ? 'fade-switching' : ''}`}>
          <h2 className="question-prompt">
            {currentQuestion.prompt}
          </h2>

          <div className="answers-grid" role="group" aria-label="Question options">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOptionIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`answer-option-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(option, idx)}
                  disabled={isSwitching}
                >
                  <span className="answer-text">{option.text}</span>
                  <span className="answer-icon">{option.icon || '🌸'}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Celebratory Feedback Toast */}
        {feedbackMessage && (
          <div className="answer-feedback-toast" role="status">
            <Sparkles size={16} />
            <span>{feedbackMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}
