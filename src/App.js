import { useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projectpage from "./components/projectpage";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projectpage />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
