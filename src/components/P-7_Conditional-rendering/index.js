import { useState } from "react";
import "./styles.css";

const PopUpText = () => {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");

  const sayHi = () => {
    setGreeting("Hello World!");
    setLoading(false);
  };

  const timer = () => {
    setTimeout(sayHi, 3000);
    setGreeting("");
    setLoading(true);
  };

  return (
    <div>
      <button onClick={timer}>Say HI</button>
      {loading && <div className="loader"></div>}
      {greeting !== "" && <p>{greeting}</p>}
    </div>
  );
};

export default PopUpText;
