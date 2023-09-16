import React, { Component } from "react";
import { Link } from "react-scroll";
import SocialButtons from "./socialbuttons";
import "../css/base.css";
import "../css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Home extends Component {
  render() {
    return (
      <>
        <section id="intro">
          <div className="intro-overlay" />
          <div className="intro-content ">
            <div className="row">
              <div className="container2">
                <h5 className="typed-out2">Hello, World.</h5>
              </div>
              <div className="col-twelve">
                <div className="container">
                  <h1 className="typed-out">I'm Niv Netanel. </h1>
                </div>

                <p className="intro-position">
                  <span>Developer</span>
                  <span>Designer</span>
                </p>
                <Link
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  className="button stroke"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  More About Me
                </Link>
              </div>
            </div>
            <SocialButtons />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
