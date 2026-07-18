import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../css/base.css";
import "../css/main.css";

const sections = [
  { id: "intro", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "main-nav scrolled" : "main-nav"}>
      <Link className="nav-logo" to="intro" smooth={true} duration={500}>
        Niv Netanel<span>.</span>
      </Link>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={section.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="current"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
