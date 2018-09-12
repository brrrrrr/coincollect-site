import React, { Component } from 'react';
import './App.css';

import Intro from './views/Intro/Intro.js'
import Nav from './views/Nav/Nav.js'

// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />

        <Intro />

        <footer>
          <div className="logo-wrap" style={{margin: '20px 0', textAlign: 'center'}}>
            <img src="https://i.imgur.com/7vlG3YE.png" alt="CoinCollect logo" />
          </div>
        </footer>

        <img src="pre-pro/design/landing.png" hidden />

      </div>
    );
  }
}

export default App;
