import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const taglineVariants = {
    init: { opacity: 0 },
    anim: { opacity: 1, transition: { delay: 3, duration: 0.3 } },
    exit: { opacity: 0 },
  };

  return (
    <div className="footer">
      <div className="footer-social-links"></div>
      <motion.h3
        variants={taglineVariants}
        initial="init"
        animate="anim"
        exit="exit"
        className="footer-tagline"
      >
        it's your time.
      </motion.h3>
    </div>
  );
};

export default Footer;
