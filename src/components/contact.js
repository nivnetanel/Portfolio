import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../css/base.css";
import "../css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function ContactForm() {
  const [state, handleSubmit] = useForm("mgejlzqr");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input id="name" placeholder="Full Name" type="text" name="name" className="form-control" required />
                  </div>
                  <div className="col">
                    <input id="email" type="email" placeholder="Email Address" name="email" className="form-control" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea id="message" placeholder="Your Message" name="message" className="form-control" rows="10" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className="submitform" disabled={state.submitting}>
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

export default ContactForm;
