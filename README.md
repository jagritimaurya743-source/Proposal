# A Little Question for You 💗

A beautiful, interactive, romantic proposal website built with React, Vite, and modular SCSS. Designed to express feelings in a sweet, memorable, and deeply respectful way.

---

## ✨ Features & Stages

1. **Screen 1: Welcome Envelope**
   - 3D interactive animated envelope with a glowing wax heart seal.
   - Smooth opening animation revealing the letter inside.
2. **Screen 2: Personal Welcome**
   - Personalized greeting with her name highlighted in blush-rose gradients.
   - Warm welcome message and invitation to journey together.
3. **Screen 3: Interactive Sweet Questions**
   - 4 thoughtful, playful questions with interactive buttons and real-time response toasts.
   - Progress bar and heart step indicators.
   - Non-judgmental, respectful flow where all answers lead forward warmly.
4. **Screen 4: Personal Love Letter**
   - Animated handwritten-style letter on a vintage parchment card.
   - Real-time typewriter effect with an instant "Read whole letter" option.
   - Personal signature with your name.
5. **Screen 5: The Proposal Screen**
   - Blooming animated rose and romantic lighting.
   - Two functional, respectful choices:
     - **“Yes, I'd love to 💖”**: Triggers celebratory confetti bursts, heartfelt message, and a "Save This Moment" button.
     - **“I need some time 🌷”**: Responds with warmth, patience, and zero pressure ("Your feelings matter, and there's absolutely no pressure").
6. **Atmospheric Touches**
   - Floating hearts, rose petals, and sparkling stars.
   - Web Audio synthesized romantic ambient melody & chimes (no external audio files needed; won't autoplay until user interaction).
   - Live on-screen "Personalize" editor for quick testing.
   - Stage progress dots at the bottom to jump between screens easily.
   - Accessible keyboard focus, touch-friendly tap targets, and `prefers-reduced-motion` support.

---

## 📁 Project Architecture

```
/
├── index.html                   # HTML entry point with Google Fonts
├── metadata.json                # Project title and metadata
├── package.json                 # Dependencies and scripts
├── vite.config.ts               # Vite configuration
├── README.md                    # Setup & customization guide
└── src/
    ├── config.js                # Centralized configuration (names, texts, questions)
    ├── App.tsx                  # Main app component & state orchestration
    ├── main.tsx                 # React entry point
    ├── components/
    │   ├── Envelope.jsx         # Screen 1: 3D interactive envelope & wax seal
    │   ├── WelcomeScreen.jsx    # Screen 2: Personalized greeting & message
    │   ├── QuestionScreen.jsx   # Screen 3: Interactive questions & feedback
    │   ├── LoveLetter.jsx       # Screen 4: Parchment letter with typewriter
    │   ├── ProposalScreen.jsx   # Screen 5: Blooming rose, choices & celebration
    │   ├── Confetti.jsx         # Romantic canvas confetti bursts
    │   ├── FloatingHearts.jsx   # Atmospheric falling petals & floating hearts
    │   ├── MusicPlayer.jsx      # Romantic melody toggle & restart button
    │   ├── CustomCursor.jsx     # Non-intrusive desktop cursor follower
    │   └── PersonalizeModal.jsx # Live in-browser personalization editor
    ├── styles/
    │   ├── _variables.scss      # Colors, typography, shadows, radii
    │   ├── _mixins.scss         # Glassmorphism, buttons, breakpoints
    │   ├── _animations.scss     # Keyframes (pulse, drift, flap, glow)
    │   ├── _envelope.scss       # Envelope 3D styling
    │   ├── _welcome.scss        # Welcome screen styling
    │   ├── _questions.scss      # Questions & answer cards
    │   ├── _love-letter.scss    # Parchment card & typewriter
    │   ├── _proposal.scss       # Proposal card, rose & outcomes
    │   ├── _floating-hearts.scss# Floating particle styling
    │   ├── _music-player.scss   # Audio controls & stage tracker
    │   └── main.scss            # Root SCSS combining all modules
    └── utils/
        └── romanticAudio.js     # Web Audio API ambient synth & sound effects
```

---

## 🚀 Setup Instructions (Windows, Mac, Linux & VS Code)

### Prerequisites
- Node.js (version 18 or newer recommended). Download from [nodejs.org](https://nodejs.org/).
- Visual Studio Code or your favorite code editor.

### Step 1: Open the Project in VS Code
1. Extract or clone the project folder onto your computer.
2. Open **VS Code**, then click **File > Open Folder...** and select the project directory.
3. Open the integrated terminal in VS Code using the shortcut:
   - **Windows / Linux:** `Ctrl + ` `~` (backtick)
   - **Mac:** `Cmd + ` `~`

### Step 2: Install Dependencies
Run the following command in the terminal:
```bash
npm install
```
This installs React, Vite, Sass, Lucide React icons, and canvas-confetti.

### Step 3: Run the Development Server
Start the local development server:
```bash
npm run dev
```
You will see output similar to:
```
  VITE v...  ready in ... ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```
Hold `Ctrl` and click the link (or open `http://localhost:3000` in Google Chrome, Edge, Safari, or Firefox).

### Step 4: Build for Production / Deployment
To create an optimized production build for Netlify, Vercel, or GitHub Pages:
```bash
npm run build
```
The output will be generated in the `dist/` directory ready for 1-click hosting.

---

## 🎨 How to Customize the Experience

### 1. Changing Names & Text in `src/config.js`
Open `src/config.js` in your editor. You can easily modify:
- **`herName`**: Change `"Sarah"` to her name or nickname.
- **`yourName`**: Change `"Alex"` to your name.
- **`personalWelcome`**: Edit the greeting and opening message.
- **`questions`**: Add, remove, or modify the questions, answer choices, and response feedback.
- **`loveLetter`**: Customize your heartfelt message and sign-off.
- **`proposal`**: Customize the final question, celebration message for "Yes", and gentle note for "I need some time".

### 2. Live Customizer in the Browser
When running the website, click the **"Personalize"** button in the bottom right corner. You can test your changes live right in the browser!

### 3. Customizing Colors in `src/styles/_variables.scss`
You can adjust the theme palette in `src/styles/_variables.scss`:
- `$color-rose-deep`: Primary romantic crimson (`#c9184a`)
- `$color-blush-500`: Soft blush pink (`#fb6f92`)
- `$color-cream-base`: Warm ivory background (`#fffdfa`)
- `$color-lavender-100`: Lavender accent tone (`#f3e8ff`)

---

## 💗 Respectful & Accessible Design
- Both options ("Yes" and "I need some time") are fully respected and functional.
- The "I need some time" button does not move away, disappear, or pressure the recipient.
- Supports `prefers-reduced-motion` for visitors who prefer static visuals.
- Fully responsive across smartphones, tablets, laptops, and wide screens.
