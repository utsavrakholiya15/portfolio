import React from "react";
import "./skills.scss";
export default function Skills() {
  return (
    <div className="skills-parent">
      <div className="container">
        <div className="skills">
          <div className="skills-item">
            <h2>HTML</h2>
            <p>Defines the structure of web pages.</p>
          </div>
          <div className="skills-item">
            <h2>CSS</h2>
            <p>Styles and decorates the structure defined by HTML.</p>
          </div>
          <div className="skills-item">
            <h2>JavaScript</h2>
            <p>Adds interactivity and dynamic behavior to websites.</p>
          </div>
          <div className="skills-item">
            <h2>React</h2>
            <p>Enables fast rendering through a virtual DOM.</p>
          </div>
          <div className="skills-item">
            <h2>Sass</h2>
            <p>Allows for advanced features like mixins and inheritance.</p>
          </div>
          <div className="skills-item">
            <h2>Tailwind</h2>
            <p>Enables custom designs with pre-built utility classes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
