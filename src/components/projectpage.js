import React, { Component } from "react";
import "../css/base.css";
import "../css/main.css";
import Projects from "./projects";

class Projectpage extends Component {
  render() {
    return (
      <>
        <section id="portfolio">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>
            </div>
          </div>
          <div className="row portfolio-content">
            <div className="col-twelve">
              <div
                id="folio-wrapper"
                className="block-1-2 block-mob-full stack"
              >
                <Projects />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Projectpage;
