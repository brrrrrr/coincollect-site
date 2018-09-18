import React, { Component } from 'react';
import './Solution.css';

class Solution extends Component {
  render() {
    return (
      <div className="Solution">
        <div className="max-width flex flex-wrap"> 

          <h1>
            Our solution
          </h1>

          <dl>
            <dt><h2>One platform to buy, manage and trade your coins</h2></dt>
            <dd>
              <p>
                We integrate the best fiat gateways to make sure you can buy crypto with dollars or euros in CoinCollect.
              </p>
              <p>
                We use cutting edge decentralized technology in CoinCollect to ensure that you can easily trade and securely hodl* in CoinCollect.
              </p>
            </dd>
            <dt><h2>Your keys, your coins</h2></dt>
            <dd>
              <p>
                In Coincollect we use advanced decentralized exchange technology allowing us to make sure you own your keys at all times. This means you are in control.
              </p>
              <p>
                Eliminating the problem you had with the first generation (1.0) exchanges and their vulnerabilities.
              </p>
            </dd>
            <dt><h2>Smooth user experience</h2></dt>
            <dd>
              <p>
                CoinCollect is the most smooth experience there is in crypto. Every screen navigates intuitively. Everything is clear as daylight.
              </p>
              <p>
                No more frustrating moments in which you could just smash your device through a wall.
              </p>
            </dd>
          </dl>

        </div>
      </div>
    );
  }
}

export default Solution;
