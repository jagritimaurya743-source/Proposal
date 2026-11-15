import React, { useState } from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import romanticAudio from '../utils/romanticAudio';

/**
 * Ambient romantic music and sound controls in the top-right corner.
 * Conforms strictly to guidelines: does not autoplay without interaction.
 */
export default function MusicPlayer({ onReset, currentScreenIndex }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleMusic = () => {
    const active = romanticAudio.toggleMusic();
    setIsPlaying(active);
  };

  return (
    <aside className="audio-floating-controls" aria-label="Audio and navigation controls">
      {/* Music Play / Pause */}
      <button
        type="button"
        className={`audio-pill-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={handleToggleMusic}
        title={isPlaying ? 'Pause romantic ambient melody' : 'Play soft romantic ambient melody'}
        aria-label={isPlaying ? 'Pause romantic ambient melody' : 'Play soft romantic ambient melody'}
      >
        {isPlaying ? (
          <>
            <span className="audio-equalizer" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>Romantic Melody</span>
          </>
        ) : (
          <>
            <Volume2 size={16} />
            <span>Play Music 🎵</span>
          </>
        )}
      </button>

      {/* Restart Experience Button if beyond screen 1 */}
      {currentScreenIndex > 0 && (
        <button
          type="button"
          className="nav-pill-btn"
          onClick={onReset}
          title="Restart from envelope"
          aria-label="Restart from envelope"
        >
          <RotateCcw size={15} />
        </button>
      )}
    </aside>
  );
}
