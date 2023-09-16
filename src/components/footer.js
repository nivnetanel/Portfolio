import React, { Component } from "react";
import { Link} from "react-scroll";
import "../css/base.css";
import "../css/main.css";
import SocialButtons from "./socialbuttons";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="row section-intro">
          <SocialButtons />
          <Link
            data-aos="zoom-in"
            className="button stroke"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Back To Top
          </Link>
        </div>

        <div className="col-six tab-full">
          <div className="copyright">
            <span>© Copyright Niv Netanel</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
