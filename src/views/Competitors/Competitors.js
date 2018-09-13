import React, { Component } from 'react';
import table from './table.png';
import './Competitors.css';

class Competitors extends Component {
  render() {
    return (
      <article className="Competitors">
        <h1>CoinCollect versus competitors</h1>
        <img src={table} alt="Table with CoinCollect versus competitors" />
      </article>
    );
  }
}

export default Competitors;
