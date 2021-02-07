import React, { useContext, useEffect } from "react";
import HomeWatch from "../components/HomeWatch";
import { motion } from "framer-motion";
import { WatchContext } from "../context/WatchContext";
import { Link } from "react-router-dom";
import AuxCartBtn from "../components/AuxCartBtn";

const HomePage = () => {
  const watches = useContext(WatchContext);

  const headingContainerVariants = {
    init: { y: 200 },
    anim: {
      y: 0,
      transition: {
        // delayChildren: 20,
        staggerChildren: 200,
        staggerDirection: 1,
      },
    },
  };

  const motionVariants = {
    init: { y: -200 },
    anim: {
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
    exit: {
      y: -40,
    },
  };

  const opacityVariants = {
    init: { opacity: 0 },
    anim: {
      opacity: 1,
      transition: {
        // delay: 0.5,
        duration: 1.2,
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const containerVariants = {
    init: { opacity: 0 },
    anim: { opacity: 1, transition: { duration: 1, type: "tween" } },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="init"
      animate="anim"
      exit="exit"
      className="home-wrapper"
      style={{ overflow: "hidden" }}
    >
      <AuxCartBtn />
      <motion.img
        variants={motionVariants}
        style={{ width: 50 }}
        className="logo"
        src={require("../img/logo.png")}
      />
      <div className="home-heading">
        {"Timeless Collection".split("").map((letter, index) => (
          <motion.span key={index + "summer"} variants={opacityVariants}>
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.div
        // animate={{ x: 0 }}
        variants={headingContainerVariants}
        initial="init"
        animate="anim"
        className="home-watches-container"
      >
        {watches.map((watch) => (
          <div key={watch.id + "watchsdjksd"}>
            <Link to={`/watch/${watch.name}+${watch.options[0].codeName}`}>
              <HomeWatch watch={watch} />
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
