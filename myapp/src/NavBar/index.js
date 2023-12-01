import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoHomeSharp, IoCodeSlash, IoMailUnreadOutline } from "react-icons/io5";
import { IoIosPerson, IoMdClose } from "react-icons/io";

import "./index.css";

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navBg">
      <div className="lgContainer">
        <Link className="logo-link" to="/">
          <h1 className="logoText">
            My<sub className="tech">Tech Profile</sub>
          </h1>
        </Link>
      </div>
      <div className="lgContainerSm">
        <Link className="logo-link" to="/">
          <h4 className="logoTextSm">
            My <br />
            <span className="techSm">Tech Profile</span>
          </h4>
        </Link>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Link title="Home" className="link" to="/">
          <IoHomeSharp className="smallIcon" />
        </Link>
        <Link title="About" className="link" to="/about">
          <IoIosPerson className="smallIcon" />
        </Link>
        <Link title="Projects" className="link" to="/projects">
          <IoCodeSlash className="smallIcon" />
        </Link>
        <Link title="Contact" className="link" to="/contact">
          <IoMailUnreadOutline className="smallIcon" />
        </Link>

        <IoMdClose onClick={toggleSidebar} className="smallIconClose" />
      </div>
      <button
        className={`menuBtn ${isSidebarOpen ? "hideMenu" : ""}`}
        type="button"
        onClick={toggleSidebar}
      >
        <MdMenu className="menu" />
      </button>

      <ul className="menuList">
        <li className="element">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="element">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li className="element">
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="element">
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
