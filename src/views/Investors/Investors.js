import React, { Component } from 'react';
import title from './title.png';
import logoDevsec from './logo-devsec.png';
import logoSupernet from './logo-supernet.png';
import './Investors.css';

class Investors extends Component {
  render() {
    return (
      <article className="Investors max-width flex flex-wrap">
        <div>
          <img src={title} />
        </div>
        <div>
          <div className="Investors-investor">
            <h1>DEVSEC</h1>
            <a href="https://devsec.info/" target="_blank">Go to website</a>
            <img src={logoDevsec} />
            <p>
              We are happy to have DEVSEC as an advisor. With DEVSEC we have access to a decentralised team of engineers, developers and security experts including JL777 (tech lead Komodo) & CA333 (security lead Komodo).
            </p>
            <p>
              DEVSEC is the ultimate partner to perform secure code reviews, exploitation and pen testing, avoiding exploits and more.
            </p>
          </div>
          <div className="Investors-investor">
            <h1>SuperNet</h1>
            <a href="https://supernet.org" target="_blank">Go to website</a>
            <img src={logoSupernet} />
            <p>
              SuperNET is a collaborative community of participating cryptocurrency coins and their development teams, alongside innovative coders, networking experts, social media and commercial development specialists and third party service providers, seeking to create a united platform of technologies focussing on the establishment.
            </p>
            <p>
              SuperNET is invested in projects like Komodo, Bitcoin, IOTA, Syscoin & Stratis for a total of ~ 60M USD.
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Investors;
