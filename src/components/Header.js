import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/WatchContext";

const Header = () => {
  const toRenderLogo = window.location.pathname.length > 3 ? true : false;
  const [cart] = useContext(CartContext);

  const cartContainerStyle = {
    position: "absolute",
    top: "0px",
    right: "40px",
    cursor: "pointer",
  };

  const headerLogoVariants = {
    init: { y: -30 },
    anim: { y: 0, transition: { duration: 1 } },
    exit: { y: -30, transition: { duration: 0.7 } },
  };
  const cartItemVariants = {
    init: { y: -30 },
    anim: { y: 0, transition: { duration: 0.4 } },
    exit: { y: -30, transition: { duration: 0.4 } },
  };

  const numCartItems = cart.length <= 0 ? 0 : cart.length;

  return (
    <header>
      <AnimatePresence>
        {toRenderLogo && (
          <div className="menu-left">
            <Link to="/">
              <motion.img
                variants={headerLogoVariants}
                initial="init"
                animate="anim"
                exit="exit"
                transition={{ duration: 1 }}
                className="nav-logo"
                src={require("../img/logo.png")}
              />
            </Link>
          </div>
        )}
      </AnimatePresence>

      <Link to="/cart">
        <div style={cartContainerStyle} className="menu-right">
          <AnimatePresence>
            <motion.h3>Cart</motion.h3>
            {cart.length > 0 && (
              <motion.h4
                variants={cartItemVariants}
                initial="init"
                animate="anim"
                exit="exit"
                // transition={{ duration: 1 }}
                className="header-num-cart-items"
              >
                {numCartItems}
              </motion.h4>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </header>
  );
};

export default Header;
