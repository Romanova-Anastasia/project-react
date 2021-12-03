import React, { useState } from "react";
import "./styles.css";

const ingredients = [
  "Пепперони",
  "Анчоусы",
  "Ананасы",
  "Сыр чеддер",
  "Шампиньоны",
  "Оливки",
  "Помидор",
];

const DropdownBox = () => {
  const [isOpen, setOpen] = useState("false");
  const [haveText, setHaveText] = useState("");

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleText = (event) => {
    setHaveText(event.currentTarget.textContent);
  };

  const itemList = (props) => {
    const list = props.map((item) => (
      <div onClick={handleText} className="dropdown__item">
        {item}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };

  return (
    <div
      className={!isOpen ? "dropdown active" : "dropdown"}
      onClick={handleClick}
    >
      <div className="dropdown__text">
        {!haveText ? "Ингредиенты" : haveText}
      </div>
      {itemList(ingredients)}
    </div>
  );
};

export default DropdownBox;