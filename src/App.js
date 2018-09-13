import React, { Component } from 'react';
import './App.css';

import Intro from './views/Intro/Intro.js'
import Nav from './views/Nav/Nav.js'
import RevenueShare from './views/RevenueShare/RevenueShare.js'
import ProblemsWeSolve from './views/ProblemsWeSolve/ProblemsWeSolve.js'
import Mission from './views/Mission/Mission.js'
import Solution from './views/Solution/Solution.js'
import Competitors from './views/Competitors/Competitors.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />

        <Intro />

        <RevenueShare />

        <ProblemsWeSolve />

        <Mission />

        <Solution />

        <Competitors />

        <footer>
          <div className="logo-wrap" style={{margin: '80px 0 20px 0', textAlign: 'center'}}>
            <img src="https://i.imgur.com/7vlG3YE.png" alt="CoinCollect logo" />
          </div>
        </footer>

        <img src="pre-pro/design/landing.png" alt="CoinCollect landing design" hidden />

      </div>
    );
  }
}

export default App;
