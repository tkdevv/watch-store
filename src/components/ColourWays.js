import React from "react";
import { Link } from "react-router-dom";

const ColourWays = ({ optionIndex, watch, watchHandler }) => {
  const watchDetails = watch.options[optionIndex];

  const colourStyles = {
    background: watchDetails.colour,
    width: "40px",
    height: "40px",
    borderRadius: "5000px",
  };

  return (
    <div onClick={() => watchHandler(watch, optionIndex)}>
      {/* <Link to={`/watch/${watch.name}+${option.codeName}`}> */}
      <div style={colourStyles}></div>
      {/* </Link> */}
    </div>
  );
};

export default ColourWays;
