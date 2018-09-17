import React, { Component } from 'react';
import './Nav.css';

import Logo from '../../components/Logo/Logo.js';

class Nav extends Component {
  render() {
    return (
      <div className="Nav max-width">

        <nav className="main-nav flex">

          <div className="logo-wrap">
            <a href="/">
              <Logo color="darkblue" />
            </a>
          </div>

          <div className="nav-items flex">
            <a href="/" style={{display: 'none'}}>
              How it works
            </a>
            <a className="darkblue" href="http://ccl.explorer.dexstats.info/" title="Launch the CC explorer" target="_blank" rel="noopener noreferrer">
              Explorer
            </a>
            <div className="flex button-wrapper">
              <a hidden href="/" className="button darkblue">
                Our product
              </a>
            </div>
          </div>

        </nav>

      </div>
    );
  }
}

export default Nav;
