import React, { useContext, useEffect } from "react";
import HomeWatch from "../components/HomeWatch";
import { CartContext } from "../context/WatchContext";
import { motion } from "framer-motion";
import { totalCartValue } from "../utils/utils";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart] = useContext(CartContext);

  const cartVariants = {
    init: { opacity: 0 },
    anim: { opacity: 1, transition: { duration: 0.1 } },
  };
  const totalVariants = {
    init: { opacity: 0, y: 0 },
    anim: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 0.3 },
      exit: { opacity: 0, y: -3000 },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }} className="cart-page-container">
      <motion.h1
        variants={cartVariants}
        initial="init"
        animate="anim"
        className="cart-heading"
      >
        Cart
      </motion.h1>
      {cart.length > 0 && (
        <motion.div
          variants={totalVariants}
          initial="init"
          animate="anim"
          exit="exit"
          className="checkout-container"
        >
          <div className="checkout-total-container">
            <h3 className="checkout-total-text">{"total"}</h3>
            <h2 className="checkout-total-price">{`R${totalCartValue(
              cart
            )}`}</h2>
          </div>
          <button className="checkout-btn">Checkout</button>
        </motion.div>
      )}
      <div className="cart-items-container">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <HomeWatch watch={item.watch} optionIndex={item.optionIndex} />
              </div>
            ))}
          </>
        ) : (
          <div className="no-cart-items-container">
            <motion.h3 variants={cartVariants} initial="init" animate="anim">
              NO ITEMS IN THE CART YET
            </motion.h3>
            <Link to="">
              <motion.button
                variants={cartVariants}
                initial="init"
                animate="anim"
                className="cart-see-watches-btn"
              >
                See Watches
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
