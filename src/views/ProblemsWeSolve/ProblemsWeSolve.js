import React, { Component } from 'react';
import './ProblemsWeSolve.css';

class ProblemsWeSolve extends Component {
  render() {
    return (
      <div className="ProblemsWeSolve flex flex-wrap max-width">

        <div>
          <h1>
            Problems that keep people from crypto
          </h1>
        </div>

        <div className="flex flex-wrap ProblemsWeSolve-problemsList">

          <section>
            <h2>Fears to get hacked</h2>
            <p>
              <i>Fear your bitcoins will get hacked on exchanges?</i>
            </p>
            <p>
              People have the feeling there is a lot of money to gain in crypto, but also a lot to lose. This fear is keeping them from investing.
            </p>
          </section>

          <section>
            <h2>Drowned in accounts</h2>
            <p>
              <i>Sign up to three different sites and each time submitting your ID?</i>
            </p>
            <p>
              This is a huge barrier that keeps users from entering crypto.
            </p>
          </section>

          <section>
            <h2>Horrible interfaces</h2>
            <p>
              Finally signed up, you are dazzled by all the complex options.
            </p>
            <p>
              All exchanges are built for people acting as professional traders. Most people just want to buy and sell quick and easy. Current complexity is keeping them from trading.
            </p>
          </section>

        </div>
      </div>
    );
  }
}

export default ProblemsWeSolve;
