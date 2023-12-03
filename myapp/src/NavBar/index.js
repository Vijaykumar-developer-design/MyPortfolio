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
        <span title="Home">
          <Link className="link" to="/">
            <IoHomeSharp className="smallIcon" />
          </Link>
        </span>
        <span title="About">
          <Link className="link" to="/about">
            <IoIosPerson className="smallIcon" />
          </Link>
        </span>
        <span title="Projects">
          <Link className="link" to="/projects">
            <IoCodeSlash className="smallIcon" />
          </Link>
        </span>
        <span title="Contact">
          <Link className="link" to="/contact">
            <IoMailUnreadOutline className="smallIcon" />
          </Link>
        </span>

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
        <Link className="link" to="/">
          <li className="nav-item">Home</li>
        </Link>

        <Link className="link" to="/about">
          <li className="nav-item">About</li>
        </Link>

        <Link className="link" to="/projects">
          <li className="nav-item">Projects</li>
        </Link>

        <Link className="link" to="/contact">
          <li className="nav-item">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
