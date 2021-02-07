import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SmallWatch = ({ watch, watchHandler }) => {
  const smallWatchVariants = {
    init: { y: 200, opacity: 0 },
    anim: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 1,
      },
    },
  };
  const opacityVariants = {
    init: { opacity: 0 },
    anim: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0,
      },
    },
  };

  return (
    <div onClick={() => watchHandler(watch)}>
      <div style={{ overflow: "hidden" }} className="small-watch">
        <motion.img
          style={{ overflow: "hidden" }}
          variants={smallWatchVariants}
          initial="init"
          animate="anim"
          exit="exit"
          src={require(`../img/${watch.options[0].image}`)}
        />
        <div style={{ overflow: "hidden" }} className="detail-small-watch-name">
          <motion.h3 variants={opacityVariants}>{watch.name}</motion.h3>
        </div>
      </div>
    </div>
  );
};

export default SmallWatch;
