import confetti from "canvas-confetti";

const ConfettiAnimation = (particleCount = 100, spread = 70) => {
  confetti({
    particleCount: particleCount, // Number of confetti pieces
    spread: spread, // Spread of the confetti
    origin: {y: 0.6}, // Start the confetti a bit above
    zIndex: 9999, // Ensure it's on top of other elements
    angle: 60, // Angle of the confetti
    scalar: 1.1, // Size of the confetti
  });
};

export default ConfettiAnimation;
