import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const Animation = ({ children,className }) => {
  const commonRef = useRef(null);
  const commonInView = useInView(commonRef, { once: true });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      ref={commonRef}
      initial="hidden"
      animate={commonInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
