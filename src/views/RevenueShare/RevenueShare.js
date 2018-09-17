import React, { Component } from 'react';
import background from './background.png';
import flowchart from './revenue-flowchart.png';
import backgroundBottom from './background-bottom.png';
import './RevenueShare.css';

class RevenueShare extends Component {
  render() {
    return (
      <section className="RevenueShare">
        <img src={background} alt="" />
        <div className="max-width">
          <h1>
            We care so we share
            <div>all our revenue</div>
          </h1>
          <p>
            100% of all revenue flows directly to all holders of CoinCollect (CC). Different revenue streams make sure the coin will generate profitable rewards for holders.
          </p>
        </div>
        <img className="RevenueShare-flowchart" src={flowchart} alt="Revenue flowchart" />
        <img src={backgroundBottom} alt="" />
      </section>
    );
  }
}

export default RevenueShare;
