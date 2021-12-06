import React from 'react';
import ReactDOM from 'react-dom';
import ButtonFC from './components/Button';
import HideText from './components/HideText';
import Counter from './components/Counter_Component';
import ButtonCL from './components/P-6_1.State_Custom-checkbox';
import PopUpText from './components/P-7_Conditional-rendering';
import './index.css';
import Render from './components/Anastasia--P-7_Rendering(refactor)';
import Login from './components/H-7__Ternary-operator';

ReactDOM.render(
  <React.StrictMode>
    <Counter/>
    <ButtonCL/>
    <ButtonFC/>
    <HideText/>
    <PopUpText/>
    <Render/>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);


