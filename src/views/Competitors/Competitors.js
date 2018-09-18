import React, { Component } from 'react';
import table from './table.png';
import './Competitors.css';

class Competitors extends Component {
  render() {
    return (
      <article className="Competitors max-width">
        <h1>CoinCollect versus normal exchanges</h1>
        <a href={table}>
          <img src={table} alt="Table with CoinCollect versus competitors" />
        </a>
      </article>
    );
  }
}

export default Competitors;
