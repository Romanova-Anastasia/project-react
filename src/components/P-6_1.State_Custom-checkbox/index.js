import React, { useState } from "react";
import './styles.css';


const ButtonCL = () => {
  const [title, setTitle] = useState("😍");

  const onButtonClick = () => {
    setTitle(title === "😍" ? "😭" : "😍");
  };

  return <button onClick={onButtonClick} className="smile"> {title} </button>;
};

export default ButtonCL;