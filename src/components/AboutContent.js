import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";
import ReactImg from "../assets/react.png";
import Skills from "../assets/skills.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm an aspiring front-end web developer, I create a responsive and
          beautiful website.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Skills} className="img" alt="skill" />
          </div>
          <div className="img-stack bottom">
            <img src={ReactImg} className="img" alt="skill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
