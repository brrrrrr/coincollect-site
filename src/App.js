import React, { Component } from 'react';
import './App.css';

import Intro from './views/Intro/Intro.js'
import Nav from './views/Nav/Nav.js'
import RevenueShare from './views/RevenueShare/RevenueShare.js'
import ProblemsWeSolve from './views/ProblemsWeSolve/ProblemsWeSolve.js'
import Mission from './views/Mission/Mission.js'
import Solution from './views/Solution/Solution.js'
import Competitors from './views/Competitors/Competitors.js'
import Team from './views/Team/Team.js'
import Investors from './views/Investors/Investors.js'
import Footer from './views/Footer/Footer.js'

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
          <a href="https://discord.gg/tYvguCv" target="_blank" rel="noopener noreferrer" className="button darkblue big">
            Join our Discord channel
          </a>
        </div>

        <Solution />

        <Competitors />

        <Team />

        <Investors />

        <Footer />

      </div>
    );
  }
}

export default App;
