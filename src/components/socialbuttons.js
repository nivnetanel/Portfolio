import React, { Component } from "react";
import "../css/base.css";
import "../css/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class SocialButtons extends Component {
  render() {
    return (
      <div>
        <ul className="intro-social">
          <li className="rounded-social-buttons">
            <a
              className="social-button linkedin"
              href="https://www.linkedin.com/in/niv-netanel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="rounded-social-buttons">
            <a
              className="social-button github"
              href="https://github.com/nivnetanel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialButtons;
