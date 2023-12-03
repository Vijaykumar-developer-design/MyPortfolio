import { FaRegCopyright } from "react-icons/fa";

import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import "./index.css";

const Home = () => (
  <div className="home-container">
    <About />
    <Projects />
    <Contact />
    <footer className="copyright">
      All rights reserved <FaRegCopyright className="copyright-icon" />{" "}
      Vijaykumar.{" "}
    </footer>
  </div>
);

export default Home;
