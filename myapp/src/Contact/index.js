import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import NavBar from "../NavBar";

import "./index.css";

const Contact = () => {
  return (
    <div className="contact-bg-container">
      <NavBar />
      <div className="both-containers">
        {/* contact code */}
        <div className="entire-contact-container">
          <h1 className="contact-head">Contact Me</h1>
          <div className="gamil-container">
            <MdMail className="contact-mail-icon" />
            <p className="contact-detail">vijaykumar2022b@gmail.com</p>
          </div>
          <div className="gamil-container">
            <IoCall className="contact-mail-icon" />
            <p className="contact-detail">9346048819</p>
          </div>
          <a
            href="https://www.linkedin.com/in/vijaykumar-boya"
            target="_blank"
            rel="noreferrer"
            className="gamil-container linkedIn-conatiner"
          >
            <FaLinkedin className="contact-linkedIn-icon" />
            <p className="contact-detail"> Vijaykumar</p>
          </a>

          <a href="vijay-cv.pdf" download className="resume-link">
            Download Resume
          </a>
        </div>
        {/* form code */}
        <form className="user-form">
          <input
            name="Name"
            className="input-element"
            id="Name"
            type="text"
            required
            placeholder="Enter Your Name"
          />
          <input
            name="Email"
            className="input-element"
            id="Mail"
            type="email"
            required
            placeholder="Enter Your Email"
          />
          <textarea
            name="Message"
            className="message-element"
            placeholder="Enter Your Message"
            required
            rows={10}
            cols={10}
          ></textarea>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
