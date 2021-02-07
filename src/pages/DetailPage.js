import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmallWatch from "../components/SmallWatch";
import ColourWays from "../components/ColourWays";
import { CartContext, WatchContext } from "../context/WatchContext";
import { scrollToTop } from "../utils/utils";
import {
  getWatchName,
  detailStyle,
  opacityVariants,
  motionDownVariants,
  containerVariants,
} from "../utils/variables";
import AuxCartBtn from "../components/AuxCartBtn";

const DetailPage = () => {
  const watches = useContext(WatchContext);
  const [cart, { addToCart, removeFromCart, watchInCart }] = useContext(
    CartContext
  );
  let watchObj = watches.filter(
    (watch) => watch.name === getWatchName().watchName
  )[0];
  watchObj = watchObj ? watchObj : watches[0];

  let watchDetailsObj = watchObj.options.filter(
    (watch) => (watch.codeName = getWatchName().codeName)
  )[0];
  watchDetailsObj = watchDetailsObj ? watchDetailsObj : watchObj.options[0];

  const [watch, setWatch] = useState(watchObj);
  const [optionIndex, setOptionIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const watchHandler = (watch, option = null) => {
    scrollToTop();
    setWatch(watch);
    option && setOptionIndex(option);
    !option && setOptionIndex(0);
  };

  const watchDetails = watch.options[optionIndex];

  const addToCartBtn = (inCart) => {
    if (inCart) {
      return {
        text: "- Remove From Cart",
        style: { background: "#aaa" },
      };
    }
    return {
      text: "+ Add To Cart",
      style: { background: "#0aff7c" },
    };
  };

  return (
    <>
      <AuxCartBtn />
      <motion.div
        variants={containerVariants}
        initial="init"
        animate="anim"
        exit="exit"
        className="detail-container"
      >
        <div className="watch-container">
          <motion.img
            style={{ detailStyle }}
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            exit={{
              y: 500,
              transition: {
                duration: 1,
              },
            }}
            transition={{ duration: 1.7 }}
            className="big-watch"
            src={require(`../img/${watchDetails.image}`)}
          />
        </div>

        <div style={{ overflow: "hidden" }} className="watch-detail">
          <motion.h1
            className="detail-watch-name"
            variants={motionDownVariants}
          >
            {watch.name}
          </motion.h1>
          <motion.h4
            className="detail-watch-description"
            variants={motionDownVariants}
          >
            {watch.description}
          </motion.h4>

          <motion.div variants={motionDownVariants} className="colour-ways">
            {watch.options.map((option, index) => (
              <div key={index + "clwdss"}>
                <ColourWays
                  optionIndex={index}
                  watch={watch}
                  watchHandler={watchHandler}
                />
              </div>
            ))}
          </motion.div>

          <motion.h2
            variants={motionDownVariants}
            exit="exit"
            className="price"
          >
            {watchDetails.price}
          </motion.h2>

          <motion.button
            className="detail-add-to-cart"
            style={addToCartBtn(watchInCart(watch, optionIndex)).style}
            onClick={() =>
              watchInCart(watch, optionIndex)
                ? removeFromCart(watch, optionIndex)
                : addToCart(watch, optionIndex)
            }
            variants={opacityVariants}
            exit="exit"
          >
            {addToCartBtn(watchInCart(watch, optionIndex)).text}
          </motion.button>
        </div>

        <div className="watch-collection">
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              className="watch-collection-heading"
              style={{ marginLeft: 15 }}
              variants={motionDownVariants}
            >
              Collection
            </motion.h2>

            <div className="the-watches">
              {watches.map((watch) => (
                <div key={watch.id + "wdskfmd"}>
                  <SmallWatch watch={watch} watchHandler={watchHandler} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DetailPage;
