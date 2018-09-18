import React, { Component } from 'react';
import './Team.css';

class Competitors extends Component {
  render() {
    return (
      <article className="Team max-width">
        <h1>Meet the team</h1>
        <div className="Team-members flex flex-wrap">

          <article className="Team-member">
            <h1>
              Chris van Maarseveen
            </h1>
            <div className="Team-member-tagline">General Project Lead & Product Owner</div>
            <p>
              Diesmaster joined the Komodo Platform team at the age of 16, being their youngest member. He dedicated himself to BarterDEX and developed his vision for future products.
            </p>
          </article>

          <article className="Team-member">
            <h1>
              Bart Roorda
            </h1>
            <div className="Team-member-tagline">Tech Lead</div>
            <p>
              bartwr has a long history of open source advocacy and is a Dutch celeb in community building for blockchain and tech innovation. He’s a full stack developer with over 10 years experience.
            </p>
          </article>

          <article className="Team-member">
            <h1>Max Theyse</h1>
            <div className="Team-member-tagline">Design Lead</div>
            <p>
              Max found the other team members by his passion for Komodo and BarterDEX. He has an inborn need to optimise the user experience for crypto, especially for BarterDEX based apps.
            </p>
          </article>

          <article className="Team-member">
            <h1>Cipi</h1>
            <div className="Team-member-tagline">
              Server Operator Lead
            </div>
            <p>
              The most experienced LP node operator there is. Like Diesmaster, cipi is part of the Komodo team and shares the passion for BarterDEX and Komodo with the rest.
            </p>
          </article>

          <article className="Team-member">
            <h1>Bart van Maarseveen</h1>
            <div className="Team-member-tagline">
              Operation & Evangelisation Lead
            </div>
            <p>
              barv has a history with open source and web entrepreneurship since the mid nineties which makes him our valuable senior. Organises communities and talks with bartwr and loves to innovate & promote.
            </p>
          </article>

        </div>
      </article>
    );
  }
}

export default Competitors;
