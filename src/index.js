import React from "react";
import ReactDOM from "react-dom";
import ButtonComponent from "./components/P-6_2.State_Cyclic-button";
import ButtonCL from "./components/P-6_1.State_Custom-checkbox";
import ButtonFC from "./components/Button";
import HideText from "./components/HideText";
import Counter from "./components/Counter_Component";
import PopUpText from "./components/P-7_Conditional-rendering";
import "./index.css";
import Render from "./components/Anastasia--P-7_Rendering(refactor)";
import Login from "./components/H-7__Ternary-operator";
//import Posts from './components/Posts';
import App from "./components/H-8_Simple-pagination";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <ButtonComponent />
    <ButtonCL />
    <ButtonFC />
    <HideText />
    <PopUpText />
    <Render />
    <Login />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
