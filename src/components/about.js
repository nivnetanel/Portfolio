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
                <img
                  src={profilepic}
                  alt="Profile Picture"
                  data-aos="zoom-in"
                />
                <p className="lead">
                  My name is Niv Netanel, I live in Israel. I am computer
                  science student at HIT Israel.
                </p>
              </div>
            </div>
          </div>

          <div className="row about-content">
            <div className="col-six tab-full">
              <h3>Profile</h3>

              <p className="lead">
                High managing skills additional to technical and creative
                thinking. Self-learner and passionate about technology.
              </p>

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
                  <span>www.github.com/nivnetanel</span>
                </li>
                <li>
                  <strong>Linkedin:</strong>
                  <span>www.linkedin.com/in/niv-netanel/</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>nivnetanel96@gmail.com</span>
                </li>
              </ul>
            </div>

            <div className="col-six tab-full">
              <h3>TECHNICAL SKILLS</h3>
              <p className="lead">
                A software dev with the goal of achieving expertise in Python,
                Data,Automating Workflow and Machine Learning, Skilled in:
              </p>

              <ul className="skill-bars">
                <li>
                  <div className="progress percent100">
                    {/* <span>90%</span> */}
                  </div>
                  <strong>HTML5 & CSS</strong>
                </li>
                <li>
                  <div className="progress percent100">
                    {/* <span>85%</span> */}
                  </div>
                  <strong>REACTJS</strong>
                </li>
                <li>
                  <div className="progress percent100">
                    {/* <span>80%</span> */}
                  </div>
                  <strong>JAVASCRIPT</strong>
                </li>
                <li>
                  <div className="progress percent100">
                    {/* <span>80%</span> */}
                  </div>
                  <strong>TYPESCRIPT</strong>
                </li>
                <li>
                  <div className="progress percent100">
                    {/* <span>95%</span> */}
                  </div>
                  <strong>PYTHON</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="row button-section">
            <div className="col-twelve">
              <Link
                data-aos="flip-left"
                className="button stroke"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HIRE ME
              </Link>
              <Link
                data-aos="flip-right"
                className="button stroke"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
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
