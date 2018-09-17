import React, { Component } from 'react';
import './Mission.css';
import LogoRound from './logo-round.png';

class Mission extends Component {
  render() {
    return (
      <article className="max-width">
        <div className="Mission">
          <h1>Our mission.</h1>
          <p>
            We make crypto easy to buy, trade and manage. We aim to get everyone onboard. With the CoinCollect application anyone can secure their position in crypto and maintain full control on their coins.
          </p>
          <img src={LogoRound} className="Mission-logo" alt="" />
        </div>
      </article>
    );
  }
}

export default Mission;
