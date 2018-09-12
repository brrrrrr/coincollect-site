import React, { Component } from 'react';
import logo from './assets/coincollect-logo.jpg';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav max-width">

        <nav className="main-nav flex">

          <div className="logo-wrap">
            <img src={logo} alt="CoinCollect logo" height="20" />
          </div>

          <div className="nav-items flex">
            <a href="/">
              Home
            </a>
            <a href="#">
              Features
            </a>
            <a href="#">
              Team
            </a>
            <a href="#">
              Community
            </a>
            <a href="http://ccl.explorer.dexstats.info/" title="Launch the CC explorer" target="_blank" className="button blue">
              Our coin
            </a>
          </div>

        </nav>

      </div>
    );
  }
}

export default Nav;
