import { motion } from "framer-motion";

export const bubbleVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: -200,
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export const BubbleAnimation = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-50 dark:bg-gray-300"
          style={{
            width: `${Math.random() * 50 + 30}px`,
            height: `${Math.random() * 50 + 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={bubbleVariants}
          initial="hidden"
          animate="visible"
        />
      ))}
    </>
  );
};
