import React, { Component } from "react";
import { Link } from "react-scroll";
import "../css/base.css";
import "../css/main.css";
import profilepic from "../images/profile-pic.jpg";

class About extends Component {
  render() {
    return (
      <>
        <section id="about" className="grey-section">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>About</h5>
              <h1>Let me introduce myself.</h1>

              <div className="intro-info">
                <img src={profilepic} alt="Niv Netanel" data-aos="zoom-in" />
                <p className="lead">My name is Niv Netanel, I live in Israel. I am a Full Stack Developer.</p>
              </div>
            </div>
          </div>

          <div className="row about-content">
            <div className="col-six tab-full">
              <h3>Profile</h3>

              <p className="lead">High managing skills additional to technical and creative thinking. Self-learner and passionate about technology.</p>

              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>Niv Netanel</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>September 09, 1996</span>
                </li>
                <li>
                  <strong>Github:</strong>
                  <span>
                    <a href="https://github.com/nivnetanel" target="_blank" rel="noopener noreferrer">
                      github.com/nivnetanel
                    </a>
                  </span>
                </li>
                <li>
                  <strong>Linkedin:</strong>
                  <span>
                    <a href="https://www.linkedin.com/in/niv-netanel/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/niv-netanel
                    </a>
                  </span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>
                    <a href="mailto:nivnetanel96@gmail.com">nivnetanel96@gmail.com</a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-six tab-full">
              <h3>TECHNICAL SKILLS</h3>
              <p className="lead">A software developer focused on Python, data, workflow automation and machine learning. Skilled in:</p>

              <ul className="skills-list">
                {["Python", "JavaScript", "TypeScript", "ReactJS", "HTML5 & CSS"].map((skill) => (
                  <li key={skill}>
                    <span className="skill-chip">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row button-section">
            <div className="col-twelve">
              <Link data-aos="flip-left" className="button stroke" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                HIRE ME
              </Link>
              <Link data-aos="flip-right" className="button stroke" activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
                Projects
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
