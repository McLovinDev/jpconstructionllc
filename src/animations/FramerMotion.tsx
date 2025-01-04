import type { Variants } from "framer-motion";

// Helper to define fade animations in different directions
export const fade = (
    direction: "up" | "down" | "left" | "right" | "none", 
    duration: number
  ): Variants => {
    let x = 0, y = 0;
  
    switch (direction) {
      case "up":
        y = 100;
        break;
      case "down":
        y = -100;
        break;
      case "left":
        x = 100;
        break;
      case "right":
        x = -100;
        break;
      default:
        break;
    }
  
    return {
      hidden: {
        x,
        y,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Zoom In animation preset
  export const zoomIn = (duration: number): Variants => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        ease: "easeOut",
      },
    },
  });
  
  // Zoom Out animation preset
  export const zoomOut = (duration: number): Variants => ({
    hidden: {
      scale: 1.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        ease: "easeOut",
      },
    },
  });
  
  // Utility to check if an element is visible in the viewport
  export const useInViewAnimation = (threshold: number = 0.3) => {
    return {
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: threshold },
    };
  };

  // Reverse Dissolve animation preset
export const reverseDissolve = (duration: number): Variants => ({
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: [0, 1], // Define el cambio de opacidad
    transition: {
      type: "tween",
      duration,
      ease: "easeOut",
    },
  },
});
