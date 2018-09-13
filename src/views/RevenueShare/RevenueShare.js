import React, { Component } from 'react';
import background from './background.png';
import './RevenueShare.css';

class RevenueShare extends Component {
  render() {
    return (
      <section className="RevenueShare">
        <img src={background} alt="RevenueShare infographic" />
      </section>
    );
  }
}

export default RevenueShare;
