import React from 'react';
import logo from '../../assets/images/logo.png';
import checkmark from '../../assets/images/checkmark.svg';
import { getImageSource } from '../utils/helper';

const Header = () => (
  <div style={{ marginTop: 20 }} className="header">
    <div className="logo">
      <img src={getImageSource(logo)} alt="react logo" />
      <br />
      <img src={getImageSource(checkmark)} alt="react checkmark" />
    </div>
    <h1>React Redux Router</h1>
  </div>
);

export default Header;
