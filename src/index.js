import React from 'react';
import ReactDOM from 'react-dom';
import ButtonFC from './components/Button';
import HideText from './components/HideText';
import Counter from './components/Counter_Component';
import ButtonCL from './components/P-6_1.State_Custom-checkbox';
import PopUpText from './components/P-7_Conditional-rendering';
import './index.css';
import DropdownBox from './components/P-7__Dropdown';
//import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Counter/>
    <ButtonCL/>
    <ButtonFC/>
    <HideText/>
    <PopUpText/>
    <DropdownBox/>
  </React.StrictMode>,
  document.getElementById('root')
);


