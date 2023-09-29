import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element's position when animation starts
      easing: 'ease-in-out', // Easing function for the animation
      once: false, // Whether to only animate elements once or on every scroll
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
      <div data-aos="fade-right">
        <About />
      </div>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-down" className="">
        <Work />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;