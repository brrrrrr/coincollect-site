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
            <dt><h2>One platform to buy, manage and trade your coins.</h2></dt>
            <dd>
              <p>
                We integrate the best fiat gateways to make sure you can buy crypto with fiat in CoinCollect.
              </p>
              <p>
                We use cutting edge decentralized technology in CoinCollect to ensure that you can easily trade and securely hodl* in your application.
              </p>
            </dd>
            <dt><h2>You are the master of your keys.</h2></dt>
            <dd>
              <p>
                In CoinCollect we use advanced decentralized technology to make sure you own your keys. Meaning you are, at any time, in full control.
              </p>
              <p>
                We eliminate every doubt you had about the vulnerability of first generation exchanges.
              </p>
            </dd>
            <dt><h2>A smooth user experience.</h2></dt>
            <dd>
              <p>
                CoinCollect is the most smooth experience there is in the crypto world. Every screen navigates intuitively and is crystal clear.
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
