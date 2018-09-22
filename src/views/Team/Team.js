import React, { Component } from 'react';
import './Team.css';

import chris from './assets/chris-small.jpg';
import bartwr from './assets/bartwr-small.jpg';
import max from './assets/max_026.jpg';
import cipi from './assets/anon_cipi.png';
import barv from './assets/barv-small.jpg';

class Competitors extends Component {
  render() {
    return (
      <article className="Team max-width">
        <h1>Our team</h1>
        <div className="Team-members flex flex-wrap">

          <article className="Team-member">
            <div className="photo-and-socials-wrapper">
              <div className="Team-member-photo" style={{backgroundImage: 'url('+chris+')'}}></div>
            </div>
            <div className="name-and-description-wrapper">
              <h1>
                Chris van Maarseveen
              </h1>
              <div className="Team-member-tagline">General Project Lead & Product Owner</div>
              <p>
                Diesmaster joined the Komodo Platform team at the age of 16, being their youngest member. He dedicated himself to BarterDEX and developed his vision for future products.
              </p>
            </div>
          </article>

          <article className="Team-member">
            <div className="photo-and-socials-wrapper">
              <div className="Team-member-photo" style={{backgroundImage: 'url('+bartwr+')'}}></div>
            </div>
            <div className="name-and-description-wrapper">
              <h1>
                Bart Roorda
              </h1>
              <div className="Team-member-tagline">Tech Lead</div>
              <p>
                bartwr has a long history of open source advocacy and is a Dutch celeb in community building for blockchain and tech innovation. He’s a full stack developer with over 10 years experience.
              </p>
            </div>
          </article>

          <article className="Team-member">
            <div className="photo-and-socials-wrapper">
              <div className="Team-member-photo" style={{backgroundImage: 'url('+max+')'}}></div>
            </div>
            <div className="name-and-description-wrapper">
              <h1>Max Theyse</h1>
              <div className="Team-member-tagline">General Project Lead & Product Owner</div>
              <p>
                Max found the other team members by his passion for Komodo and BarterDEX. He has an inborn need to optimise the user experience for crypto, especially for BarterDEX based apps.
              </p>
            </div>
          </article>

          <article className="Team-member">
            <div className="photo-and-socials-wrapper">
              <div className="Team-member-photo" style={{backgroundImage: 'url('+cipi+')'}}></div>
            </div>
            <div className="name-and-description-wrapper">
              <h1>Cipi</h1>
              <div className="Team-member-tagline">
                Server Operator Lead
              </div>
              <p>
                The most experienced LP node operator there is. Like Diesmaster, cipi is part of the Komodo team and shares the passion for BarterDEX and Komodo with the rest.
              </p>
            </div>
          </article>

          <article className="Team-member">
            <div className="photo-and-socials-wrapper">
              <div className="Team-member-photo" style={{backgroundImage: 'url('+barv+')'}}></div>
            </div>
            <div className="name-and-description-wrapper">
              <h1>Bart van Maarseveen</h1>
              <div className="Team-member-tagline">
                Operation & Evangelisation Lead
              </div>
              <p>
                barv has a history with open source and web entrepreneurship since the mid nineties which makes him our valuable senior. Organises communities and talks with bartwr and loves to innovate & promote.
              </p>
            </div>
          </article>

        </div>
      </article>
    );
  }
}

export default Competitors;
