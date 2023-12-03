import { useState } from "react";

import "./index.css";

const status = {
  skill: "Skills",
  education: "Education",
};
const About = () => {
  const [isActive, updateActive] = useState(status.skill);
  const updateStatus = (value) => {
    updateActive(value);
  };
  const design = isActive === status.skill ? "activeSkill" : "";
  const designEd = isActive === status.education ? "activeSkill" : "";
  const renderDetails = () => {
    return isActive === status.skill ? (
      <div>
        <div className="skillsContainer">
          <h1 className="skillCategory">Front-End </h1>
          <p className="skillSet">HTML, CSS, Bootstrap, JavaScript, ReactJS</p>
        </div>
        <div className="skillsContainer">
          <h1 className="skillCategory">Back-End </h1>
          <p className="skillSet">Python, Java, Node.js</p>
        </div>
        <div className="skillsContainer">
          <h1 className="skillCategory">Databases</h1>
          <p className="skillSet">SQL</p>
        </div>
      </div>
    ) : (
      <div>
        <div className="skillsContainer">
          <h1 className="skillCategory">
            The Adoni Arts And Science College - AP
          </h1>
          <p className="skillSetGraduation">
            Graduation - Bcom(Computer Applications) - 2021
          </p>
        </div>
        <div className="skillsContainer">
          <h1 className="skillCategory">Deeksha Junior College -AP</h1>
          <p className="skillSet">Intermediate - CEC - 2018</p>
        </div>
        <div className="skillsContainer">
          <h1 className="skillCategory">Z.P.High School -AP</h1>
          <p className="skillSet">Secondary School Certificate - 2016</p>
        </div>
      </div>
    );
  };
  return (
    <div className="aboutHomeBg">
      <div className="aboutHome">
        <div>
          <h1 className="nameIntro">
            Hi, I am <span className="name">Vijaykumar</span> <br /> From India
          </h1>
          <h1 className="jobTitle">Frontend Developer</h1>
        </div>

        <img
          className="profileImgBg"
          alt="profile"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1700980092/Profile_lrawfd.png"
        />
      </div>
      <div>
        <div className="aboutSection">
          <h1 className="aboutText">About Me</h1>
          <p className="aboutDescription">
            I'm a Frontend Developer, and I'm good at creating good-looking and
            user-friendly websites. I use HTML, CSS, JavaScript, Bootstrap, and
            React.js to make websites that work well and look cool. I pay a lot
            of attention to how things look and how people interact with
            websites. I stay updated on the latest trends in web development to
            make sure the websites I create not only look great but also work
            smoothly and are easy for everyone to use. Whether I'm working by
            myself or with a team, my goal is to make high-quality websites that
            make both the client and the people using the websites happy.
          </p>
        </div>
        <ul className="skillDiv">
          <li
            onClick={() => updateStatus(status.skill)}
            className={`skillBtn ${design}`}
            type="button"
          >
            Skills
          </li>
          <li
            onClick={() => updateStatus(status.education)}
            className={`skillBtn ${designEd}`}
            type="button"
          >
            Education
          </li>
        </ul>
        {renderDetails()}
      </div>
    </div>
  );
};
export default About;
