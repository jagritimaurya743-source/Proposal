/**
 * Romantic Audio Engine using the standard Web Audio API.
 * Synthesizes peaceful romantic music box / electric piano arpeggios
 * and gentle interactive chimes with zero external audio dependencies.
 */

class RomanticAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.musicTimer = null;
    this.chordIndex = 0;

    // Romantic peaceful chord progression in C major / A minor
    // Frequencies (Hz) for a music-box / soft rhodes style
    this.chords = [
      // Cmaj7 (C4, E4, G4, B4)
      [261.63, 329.63, 392.00, 493.88],
      // G/B (B3, D4, G4, D5)
      [246.94, 293.66, 392.00, 587.33],
      // Am9 (A3, C4, E4, B4)
      [220.00, 261.63, 329.63, 493.88],
      // Fmaj9 (F3, A3, C4, E4, G4)
      [174.61, 220.00, 261.63, 329.63, 392.00],
    ];
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
        this.masterGain = this.audioCtx.createGain();
        this.masterGain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
        this.masterGain.connect(this.audioCtx.destination);
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playNote(frequency, timeOffset = 0, duration = 1.4, noteGain = 0.12) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime + timeOffset;

    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    // Gentle warm sine wave with a hint of triangle
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);

    // Soft attack, gentle exponential decay
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.linearRampToValueAtTime(noteGain, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  playArpeggioStep() {
    if (!this.isPlaying) return;

    const currentChord = this.chords[this.chordIndex];
    // Play notes gently staggered
    currentChord.forEach((freq, idx) => {
      this.playNote(freq, idx * 0.28, 2.2, 0.08);
    });

    this.chordIndex = (this.chordIndex + 1) % this.chords.length;

    // Schedule next chord every 3 seconds
    this.musicTimer = setTimeout(() => {
      this.playArpeggioStep();
    }, 2800);
  }

  toggleMusic() {
    this.initContext();
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  startMusic() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.playArpeggioStep();
  }

  stopMusic() {
    this.isPlaying = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  // Sweet chime for button clicks or answer selection
  playChime(type = 'sweet') {
    this.initContext();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    if (type === 'sweet') {
      // Two gentle rising chimes (E5, G#5 or E5, B5)
      this.playNote(659.25, 0, 0.8, 0.12);
      this.playNote(987.77, 0.12, 1.2, 0.14);
    } else if (type === 'celebrate') {
      // Romantic triumphant gentle arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, i) => {
        this.playNote(freq, i * 0.09, 2.0, 0.14);
      });
    } else if (type === 'gentle') {
      this.playNote(587.33, 0, 0.7, 0.09);
    }
  }

  // Soft envelope opening sound effect
  playEnvelopeSound() {
    this.initContext();
    if (!this.audioCtx) return;
    // Play harp-like gentle 3-note glissando
    [440.00, 554.37, 659.25, 880.00].forEach((freq, i) => {
      this.playNote(freq, i * 0.07, 1.0, 0.1);
    });
  }
}

export const romanticAudio = new RomanticAudioEngine();
export default romanticAudio;
