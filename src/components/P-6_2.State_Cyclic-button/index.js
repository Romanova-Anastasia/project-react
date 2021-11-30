import React, { useState } from "react";
import "./styles.css";

const ButtonComponent = () => {
  const [title, setTitle] = useState("🔁");
  const [index, setIndex] = useState(0);

  const onButtonClick = () => {
    setIndex(index === 2 ? 0 : index + 1);
    setTitle(["🔄", "🔂", "🔁"][index]);
  };

  return (
    <button onClick={onButtonClick} className="button">
      {title}
    </button>
  );
};

export default ButtonComponent;
