import React, { Component } from "react";
import "../css/base.css";
import "../css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact" data-aos="zoom-in">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Contact</h5>
              <h1>I'd Love To Hear From You.</h1>
              <p className="lead"></p>
            </div>
          </div>

          <div className="row contact-form">
            <div className="col-twelve">
              <form
                target="_blank"
                action="https://formsubmit.co/nivnetanel96@gmail.com"
                method="POST"
              >
                <div className="form-group">
                  <div className="form-row">
                    <div className="col">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submitform">
                  Submit
                </button>
              </form>

              <div id="message-warning"></div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
