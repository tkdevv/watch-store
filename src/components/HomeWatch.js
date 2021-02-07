import React, { useContext } from "react";
import { motion } from "framer-motion";
import { getPathName } from "../utils/variables";
import { CartContext } from "../context/WatchContext";
import CartWatchDetail from "./CartWatchDetail";

const HomeWatch = ({ watch, optionIndex = 0 }) => {
  const [cart] = useContext(CartContext);

  const headingContainerVariants = {
    init: { y: 0 },
    anim: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 5,
      },
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: {
        duration: 0.8,
        type: "tween",
      },
    },
  };

  const motionVariants = {
    init: { y: 200 },
    anim: {
      y: 0,
      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };

  const superVariants = {
    init: { y: 400, opacity: 0 },
    anim: {
      y: 0,
      opacity: 2,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    exit: {
      y: 500,
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const opacityVariants = {
    init: { opacity: 0 },
    anim: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 1,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={headingContainerVariants}
      initial="init"
      animate="anim"
      exit="exit"
      className="home-watch"
    >
      <motion.img
        className="home-watch-image"
        variants={superVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: [0.5, 0.2, 0.5, 0.8] }}
        src={require(`../img/${watch.options[optionIndex].image}`)}
      />
      <div className="home-watch-text-items">
        <motion.h2 className="home-watch-name" variants={opacityVariants}>
          {watch.name}
        </motion.h2>
        {getPathName() === "cart" && cart.length > 0 ? (
          <CartWatchDetail watch={watch} optionIndex={optionIndex} />
        ) : (
          <motion.h2 className="home-watch-link" variants={opacityVariants}>
            see details
          </motion.h2>
        )}
      </div>
    </motion.div>
  );
};

export default HomeWatch;
