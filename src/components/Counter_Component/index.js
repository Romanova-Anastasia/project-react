import React, { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [clicks, setState] = useState(0);

  const incrementClicks = () => {
    setState(clicks + 1);
  };
  const decrementClicks = () => {
    setState(clicks - 1);
  };

  return (
    <div className="container">
      <p className="image"></p>
      <h1>Simple Counter</h1>
      <button onClick={incrementClicks} className="button-plus">
        👆
      </button>
      <p>{clicks}</p>
      <button onClick={decrementClicks} className="button-minus">
        👇
      </button>
    </div>
  );
};

export default Counter;
