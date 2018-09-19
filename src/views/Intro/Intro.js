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
                Get CC, earn rewards
              </h1>

              <h2 className="Intro-subTitle">
                Our unique coin structure is beneficial for all.
              </h2>

              <div className="Intro-cta-wrapper">
                <a href="https://coincollect.us19.list-manage.com/subscribe?u=fea973e7599186bcdb671c103&id=fe1018d331" target="_blank" rel="noopener noreferrer" className="button darkblue big">
                  Sign up for our newsletter
                </a>
              </div>

            </div>

            <div className="Intro-key-points" data-description="Page right (desktop)">

              <div><b>200.000.000</b> max. supply</div>
              <div><b>0.0001</b> transaction fee</div>
              <div><b className="color-darkblue">Komodo</b> assetchain</div>
              <div>Secured with Bitcoin's hashrate</div>

            </div>

          </div>

        </div>

      </section>
    );
  }
}

export default Intro;
