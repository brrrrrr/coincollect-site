import React, { Component } from 'react';
import footerTop from './footer-top.png';
import iconDiscord from './icon-discord.png';
import iconTwitter from './icon-twitter.png';
import iconFacebook from './icon-facebook.png';
import iconLinkedIn from './icon-linkedin.png';
import iconReddit from './icon-reddit.png';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">

        <img className="Footer-top" src={footerTop} />

        <div className="max-width">

          <h1>Our community</h1>
          <h2>Get in touch, stay in touch</h2>

          <div className="flex flex-wrap" style={{justifyContent: 'flex-start'}}>
            <div className="Footer-info">
              <p>
                We are a community project. You can talk to us at one of our community channels.
              </p>
              <p>
                We are always open if you want to talk business, give feedback, have questions or anything else.
              </p>
            </div>

            <div className="Footer-socials">
              <a className="Footer-icon" href="https://discord.gg/tYvguCv" target="_blank" rel="noopener noreferrer">
                <img src={iconDiscord} />
              </a>
              <a className="Footer-icon" href="https://twitter.com/CoinCollectHQ" target="_blank" rel="noopener noreferrer">
                <img src={iconTwitter} />
              </a>
              <a hidden className="Footer-icon" href="" target="_blank" rel="noopener noreferrer">
                <img src={iconFacebook} />
              </a>
              <a hidden className="Footer-icon" href="" target="_blank" rel="noopener noreferrer">
                <img src={iconLinkedIn} />
              </a>
              <a hidden className="Footer-icon" href="" target="_blank" rel="noopener noreferrer">
                <img src={iconReddit} />
              </a>
            </div>

          </div>

        </div>

      </footer>
    )
  }
}
