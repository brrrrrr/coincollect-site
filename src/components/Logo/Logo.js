import React, { Component } from 'react';
import logo from './coincollect-dark.png';
// import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img src={logo} alt="Logo CoinCollect" />
      </div>
    );
  }
}

export default Logo;
