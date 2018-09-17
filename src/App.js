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

        <div className="App-cta-wrapper max-width flex flex-wrap">
          <a href="https://coincollect.us19.list-manage.com/subscribe?u=fea973e7599186bcdb671c103&id=fe1018d331" target="_blank" rel="noopener noreferrer" className="button darkblue big">
            Subscribe to our newsletter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="button darkblue big">
            Join our Discord channel
          </a>
        </div>

        <Solution />

        <Competitors />

        <footer>
          <div className="logo-wrap" style={{margin: '80px 0 20px 0', textAlign: 'center'}}>
            <img src="https://i.imgur.com/7vlG3YE.png" alt="CoinCollect logo" />
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
