import { useEffect } from "react";

// This component handles bubble creation and animation
const BubbleBackground = () => {
  useEffect(() => {
    // Function to create individual bubbles
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble"); // Add the bubble class for styling

      // Append bubble to the body
      document.body.appendChild(bubble);

      // Randomize bubble position and animation properties
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${4 + Math.random() * 4}s`; // Randomize speed
      bubble.style.animationDelay = `${Math.random() * 2}s`; // Randomize delay

      // Remove the bubble after its animation ends
      setTimeout(() => {
        bubble.remove();
      }, 8000); // Bubbles disappear after 8 seconds
    };

    // Create bubbles at regular intervals
    const bubbleInterval = setInterval(createBubble, 300); // Create a bubble every 300ms

    // Cleanup the interval on component unmount
    return () => clearInterval(bubbleInterval);
  }, []);

  return null; // No visual component, bubbles are created dynamically
};

// Custom bubble styles using Tailwind and keyframes
export const bubbleStyles = `
  .bubble {
    position: absolute;
    bottom: -50px;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.2); // Semi-transparent white
    border-radius: 50%;
    animation: rise 8s infinite ease-in-out;
  }

  @keyframes rise {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-120vh); // Make the bubble rise off the screen
      opacity: 0;
    }
  }
`;

// Exporting the component
export default BubbleBackground;
