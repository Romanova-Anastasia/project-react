import React from "react";
import ReactDOM from "react-dom";
import ButtonComponent from "./components/P-6_2.State_Cyclic-button";
import "./index.css";
import ButtonCL from './components/P-6_1.State_Custom-checkbox';

ReactDOM.render(
  <React.StrictMode>
    <ButtonComponent />
    <ButtonCL/>
  </React.StrictMode>,
  document.getElementById("root")
);
