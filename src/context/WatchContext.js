import React, { createContext } from "react";
import { useState } from "react";
import useForceUpdate from "../hooks/useForceUpdate";

const watchInit = {
  name: "",
  manufacturer: "",
  description: "",
  options: [],
};

export const WatchContext = createContext(watchInit);
export const CartContext = createContext([]);

const GlobalState = ({ children }) => {
  const description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur a vero asperiores consequuntur reprehenderit voluptates!";

  const watches = [
    {
      id: "1444",
      name: "ELEJENT",
      description,
      options: [
        {
          codeName: "rice",
          colour: "#DBDBDB",
          image: "bwf.png",
          price: "R63 000",
        },
        {
          codeName: "summer",
          colour: "#1d2B44",
          image: "hff.png",
          price: "R59 000",
        },
      ],
    },
    {
      id: "1544",
      name: "NKUNI",
      description,
      options: [
        {
          codeName: "blue",
          colour: "#dfbeab",
          image: "vf.png",
          price: "R54 000",
        },
      ],
    },
    {
      id: "1644",
      name: "BRONZINO",
      description,
      options: [
        {
          codeName: "bronzi",
          colour: "#3f1a0f",
          image: "ccf.png",
          price: "R75 000",
        },
        {
          codeName: "cyberblue",
          colour: "#024a62",
          image: "ccbf.png",
          price: "R80 000",
        },
      ],
    },
    {
      id: "1744",
      name: "GOLIDE",
      description,
      options: [
        {
          codeName: "goli",
          colour: "#d29e5b",
          image: "gwsf.png",
          price: "R99 000",
        },
      ],
    },
    {
      id: "1844",
      name: "MJIBA",
      description,
      options: [
        {
          codeName: "flash",
          colour: "yellow",
          image: "ywf.png",
          price: "R51 000",
        },
        {
          codeName: "cyan",
          colour: "#01f1b5",
          image: "ywbf.png",
          price: "R51 000",
        },
      ],
    },
  ];

  const [cart, setCart] = useState([
    // {
    //   id: watches[0].id + "0",
    //   watch: watches[0],
    //   quantity: 1,
    //   optionIndex: 0,
    // },
  ]);
  const forceUpdate = useForceUpdate();

  const addToCart = (watch, optionIndex) => {
    console.log("ADDING TO CART", watch.id, optionIndex);
    setCart((prev) =>
      !watchInCart(watch, optionIndex)
        ? [
            ...prev,
            {
              id: watch.id + optionIndex.toString(),
              watch,
              quantity: 1,
              optionIndex,
            },
          ]
        : prev
    );
  };

  const removeFromCart = (watch, optionIndex) => {
    console.log("RM FROM CART", watch.id, optionIndex);
    setCart((prev) =>
      watchInCart(watch, optionIndex)
        ? prev.filter((item) => item.id !== watch.id + optionIndex.toString())
        : prev
    );
  };

  const watchInCart = (watch, optionIndex) =>
    cart
      .map((item) => item && item.id)
      .includes(watch.id + optionIndex.toString());

  const quantityIncrement = (watch, optionIndex) => {
    setCart((prev) => {
      prev.forEach((item) => {
        console.log(item.quantity, optionIndex, "FLY");
        if (item.id === watch.id + optionIndex.toString()) {
          item.quantity += 1;
        }
      });
      return prev;
    });
    forceUpdate();
  };

  const quantityDecrement = (watch, optionIndex) => {
    let toRemove = false;
    setCart((prev) => {
      prev.forEach((item) => {
        if (item.id === watch.id + optionIndex.toString()) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            removeFromCart(watch, optionIndex);
          }
        }
      });
      return prev;
    });
    forceUpdate();
  };

  const cartHandlers = {
    addToCart,
    removeFromCart,
    watchInCart,
    quantityDecrement,
    quantityIncrement,
  };

  return (
    <CartContext.Provider value={[cart, cartHandlers]}>
      <WatchContext.Provider value={watches}>{children}</WatchContext.Provider>
    </CartContext.Provider>
  );
};

export default GlobalState;
