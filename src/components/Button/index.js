import React, { useState } from "react"; // Component, если я воспользуюсь первым вариантом

/*
class Button extends Component {
  state = {
    title: "Play",
  };

  onButtonClick = () => {
    this.setState({ title: "Pause" });
  };

  render() {
    return (
      <button
        onClick={() =>
          this.onButtonClick(this.state.title === "Play" ? "Pause" : "Play")
        }
      >
        {this.state.title}
      </button>
    );
  }
}
*/
//export default Button;

const ButtonFC = () => {
  const [title, setTitle] = useState("Play");

  const onButtonClick = () => {
    setTitle(title === "Play" ? "Pause" : "Play");
  };

  return <button onClick={onButtonClick}> {title} </button>;
};

export default ButtonFC;
