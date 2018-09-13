import React, { Component } from 'react';
import './ProblemsWeSolve.css';

class ProblemsWeSolve extends Component {
  render() {
    return (
      <article className="ProblemsWeSolve max-width">

        <h1>The problem with crypto today.</h1>

        <div class="flex flex-wrap">

          <section>
            <h2>A hard time for beginners</h2>
            <p>
              As a first time user in the crypto world, you are forced to sign up for numerous different sites and give your identity to all of them.
            </p>
            <p>
              What do all these sites want, and why do they want proof of my identity? This is a barrier that keeps users from making their first steps in the crypto world.
            </p>
          </section>

          <section>
            <h2>Fears about trustworthiness</h2>
            <p>
              There are stories all over the internet of hacked exchanges and stolen cryptocurrencies. 
            </p>
            <p>
              People have the feeling there is a lot of money to gain in crypto, but also a lot to lose. This is keeping them from investing.
            </p>
          </section>

          <section>
            <h2>Difficult interfaces</h2>
            <p>
              When people have gone through all the hassle to finally sign up on an exchange, they are dazzled by all the different options.
            </p>
            <p>
              All the exchanges are built for people acting as professional traders. Most people just want to buy and sell quick and easy. This complexity is keeping them from trading.
            </p>
          </section>

        </div>

      </article>
    );
  }
}

export default ProblemsWeSolve;
