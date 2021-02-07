import React, { useContext } from "react";
import { CartContext } from "../context/WatchContext";
import { containerVariants, opacityVariants } from "../utils/variables";
import { motion } from "framer-motion";

const CartWatchDetail = ({ watch, optionIndex }) => {
  const [cart, { quantityDecrement, quantityIncrement }] = useContext(
    CartContext
  );

  const cartItem = cart.filter((item) => {
    console.log(item.id === watch.id + optionIndex.toString());
    return item.id === watch.id + optionIndex.toString().trim();
  })[0];

  console.log(watch.id, optionIndex, cart);
  return (
    <>
      {cartItem && (
        <motion.div variants={opacityVariants} initial="init" animate="anim">
          <h3 className="cart-watch-price">
            {watch.options[optionIndex].price}
          </h3>
          <div className="cart-watch-quantity-container">
            <button
              style={cartItem.quantity > 1 ? {} : { color: "red" }}
              onClick={() => quantityDecrement(watch, optionIndex)}
              className="decrement-btn quantity-btn"
            >
              {cartItem && cartItem.quantity > 1 ? "-" : "x"}
            </button>
            <h3 className="cart-watch-quantity">{cartItem.quantity}</h3>
            <button
              onClick={() => quantityIncrement(watch, optionIndex)}
              className="increment-btn quantity-btn"
            >
              +
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CartWatchDetail;
