import React, { useState } from "react";
import "./styles.css";

const title = ["🔁", "🔄", "🔂"];

const ButtonComponent = () => {
  const [index, setIndex] = useState(0);

  const onButtonClick = () => {
    setIndex((index + 1) % title.length);
  };

  return (
    <button onClick={onButtonClick} className="button">
      {title[index]}
    </button>
  );
};

export default ButtonComponent;
