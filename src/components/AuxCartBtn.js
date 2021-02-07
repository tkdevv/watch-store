import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/WatchContext";
import cartImg from "../img/cart.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const AuxCartBtn = () => {
  const [cart] = useContext(CartContext);
  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    setScrollVal(window.scrollY);
    window.addEventListener("scroll", () => {
      setScrollVal(window.scrollY);
    });
  }, []);
  //   console.log(scrollVal, window.scrollY);
  return (
    <>
      <AnimatePresence>
        <Link to="/cart">
          {cart.length > 0 && scrollVal > 50 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="aux-cart-btn-container"
            >
              <img src={cartImg} alt="cart" className="aux-cart-img" />
              <div className="aux-cart-quantity">
                <h5 className="aux-cart-quantity-text">{cart.length}</h5>
              </div>
            </motion.div>
          )}
        </Link>
      </AnimatePresence>
    </>
  );
};

export default AuxCartBtn;
