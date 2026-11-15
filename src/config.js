/**
 * ====================================================================
 * ROMANTIC PROPOSAL WEBSITE CONFIGURATION (PLAYFUL & TEASING EDITION)
 * ====================================================================
 * Personalize your website easily by updating the fields below!
 * Change her name, your name, messages, questions, and letter.
 */

export const romanticConfig = {
  // 1. Names
  herName: "Sarah", // <-- Put her name or cute nickname here
  yourName: "Alex",  // <-- Put your name here

  // 2. Screen 1: Welcome Envelope
  welcomeScreen: {
    kicker: "Top Secret Confession 💌",
    title: "A little surprise (and an investigation) is waiting for you…",
    buttonText: "Open Your Surprise 💌",
    waxSealIcon: "💖",
    tapTip: "Tap the wax seal or button to open if you dare 😏",
  },

  // 3. Screen 2: Personal Welcome (Playful & Teasing)
  personalWelcome: {
    badge: "Caught you smiling already 😏",
    greeting: "Hey trouble, {HER_NAME} 💗",
    message:
      "You didn't think you could just live rent-free in my head 24/7 without consequences, did you? I made a little interrogation—I mean, romantic surprise for you. Let's see if you can handle it!",
    buttonText: "Let's See What You Did ✨",
    hintText: "Warning: Side effects may include blushing and falling in love.",
  },

  // 4. Screen 3: Interactive Mischievous & Flirty Questions (Hinglish)
  questions: [
    {
      id: 1,
      prompt: "Sach-sach batao, meri neend aur chain churane ka irada kab se tha tumhara? 😏",
      options: [
        { text: "Day one se hi full planning thi meri 💅", icon: "💅", responseFeedback: "Uff, itni dangerous planning? Dil toh waise hi haara hua tha! 💖" },
        { text: "Main toh bas cute lag rahi thi, galti tumhari hai 😇", icon: "😇", responseFeedback: "Haan haan, bilkul masoom ho tum... sab dikh raha hai! 😏" },
        { text: "Abhi toh shuruat hai, aage dekho hota hai kya 😉", icon: "😉", responseFeedback: "Oho! Ye warning thi ya invitation? Dil garden-garden ho gaya! 🌸" },
      ],
    },
    {
      id: 2,
      prompt: "Jab phone pe mera notification aata hai, toh andar se kya scene chalta hai? 📱💓",
      options: [
        { text: "Cool banne ki acting karti hoon, par smile nahi rukti 🙈", icon: "🙈", responseFeedback: "Pakdi gayi! Ye chhupi hui smile hi toh meri jaan leti hai! 💖" },
        { text: "Sab kaam chhod ke 0.002 second mein reply karti hoon 🚀", icon: "🚀", responseFeedback: "Haaye! Itni speed? Dil jeet liya yaar tumne! 🥰" },
        { text: "Mann toh karta hai screen ko hi hug kar loon ✨", icon: "✨", responseFeedback: "Screen chhodo, asli hug abhi pending hai! 💌" },
      ],
    },
    {
      id: 3,
      prompt: "1 se 10 ke beech, meri baaton pe chhup-chhup ke kitna blush karti ho? 🌹",
      options: [
        { text: "Pure 100! Par tum zyada hawa mein mat udo 🙄", icon: "🙄", responseFeedback: "Sorry madam, main toh already saatvein aasman pe hoon! 🎈" },
        { text: "Blush? Main toh bas tumhein dekh ke pighal jaati hoon 🫠", icon: "🫠", responseFeedback: "Bas karo, ab mujhe bhi blush karwaogi kya! 💖" },
        { text: "Bas thoda sa... har ghante, har roz 😘", icon: "😘", responseFeedback: "Itna cute jhoot? Dil pe teer chal gaya seedha! 💘" },
      ],
    },
    {
      id: 4,
      prompt: "Agar aaj hum dono bhaag jaayein long drive aur momos ke liye, toh kya bologi? 🚗💨",
      options: [
        { text: "Chalo! Par bill aur pareshan karne ki duty tumhari 😜", icon: "😜", responseFeedback: "Manzoor hai! Tumhein pareshan karna toh mera favourite kaam hai! 😈💖" },
        { text: "Momos ka naam sun ke pighal gayi... kab chalna hai? 😋", icon: "🥟", responseFeedback: "Done deal! Ab toh koi escape plan nahi hai tumhara! ✨" },
        { text: "Sirf drive nahi, haath pakad ke baithna padega 🤝💗", icon: "💗", responseFeedback: "Haath kya, poori zindagi thaam ke rakhne ko ready hoon! 💕" },
      ],
    },
  ],

  // 5. Screen 4: Personal Message (Playful & Teasing Love Letter)
  loveLetter: {
    salutation: "To My Favorite Trouble, {HER_NAME},",
    body: `Let's be completely honest for a second...

Before you came along, my life was peaceful, productive, and organized. Now? I catch myself staring at my screen smiling like a total fool just because you sent a meme, an audio note, or a random text. You completely ruined my cool reputation!

You have this annoying habit of looking gorgeous without even trying, making me laugh when I'm trying to be serious, and taking up way too much real estate in my mind—completely rent-free.

I tried to act nonchalant and mysterious, but let's face it: I failed miserably. I fell for you completely. You're my favorite person to tease, my favorite notification, and my favorite reason to smile every single day.

So I built this whole website just to officially call you out on it... and to ask you one question that you can't run away from.`,
    signoff: "Yours (whether you like it or not),",
    buttonText: "Bring on the big question! 💗",
    skipButtonText: "I'm blushing, show me the whole letter!",
  },

  // 6. Screen 5: The Proposal Screen ("Do you love me?")
  proposal: {
    kicker: "No more running, no more games…",
    question: "Do you love me? 💗",
    yesButtonText: "Yes, obviously! 💖",
    noButtonText: "No",

    // Celebration response for YES
    yesOutcome: {
      emoji: "💖",
      title: "FINALLY! The truth comes out! 💖",
      message: "I knew you couldn't resist me! But jokes aside, I love you with all my heart. You make every single day brighter, funnier, and sweeter. Now come give me a hug! 🥰",
      note: "Officially my favorite person forever.",
    },

    // Playful fallback
    timeOutcome: {
      emoji: "🙈",
      title: "You can't say no! 😜",
      message: "The 'No' button is on vacation! There is only one true answer in our hearts. 💖",
      note: "Nice try catching the button!",
    },
  },

  // 7. Theme & Audio settings
  theme: {
    primaryColor: "#c9184a",
    blushColor: "#fb6f92",
    creamColor: "#fffdfa",
    lavenderColor: "#f3e8ff",
  },

  // 8. Optional photos (placeholder paths or local image URLs)
  photos: {
    coupleThumbnail: "", // e.g. "/photos/memory.jpg"
  },
};

export default romanticConfig;
