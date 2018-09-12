import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <section className="Intro">

        <div className="max-width">

          <div className="flex">

            <div data-description="Page left (desktop)">

              <h1 className="Intro-title">
                Buy, manage and
                trade your coins with <em>CoinCollect</em>
              </h1>

              <div className="Intro-available-on">
                Available soon on Android & iOS!
              </div>

              <div className="Intro-cta-wrapper">
                <a href="https://coincollect.us19.list-manage.com/subscribe?u=fea973e7599186bcdb671c103&id=fe1018d331" target="_blank" className="button gold margin-right">
                  Stay up-to-date
                </a>
                <a href="#" className="button white" style={{display: 'none'}}>
                  Learn about our coin
                </a>
              </div>

            </div>

            <article className="Intro-community" data-description="Page right (desktop)">
              <header className="Intro-community-header">
                1.000x1.000
                <small>Airdrop</small>
              </header>
              <div className="Intro-community-tag">
                1.000 coins to 1.000 people
              </div>
              <div className="Intro-community-body">
                Join our community and stay tuned for further details on the community airdrop.
                <p className="Intro-community-ctas">
                  <a href="https://coincollect.us19.list-manage.com/subscribe?u=fea973e7599186bcdb671c103&id=fe1018d331" target="_blank" className="Intro-community-cta">Subscribe to our newsletter &raquo;</a> 
                  <a href="https://twitter.com/CoinCollectHQ" target="_blank" className="Intro-community-cta">Follow CoinCollect on Twitter &raquo;</a> 
                  <a href="https://discord.gg/tYvguCv" target="_blank" className="Intro-community-cta">Join the community chat on Discord &raquo;</a> 
                </p>
              </div>
            </article>

          </div>

        </div>

      </section>
    );
  }
}

export default Intro;
