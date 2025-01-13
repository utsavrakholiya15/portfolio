import React from "react";
import "./projects.scss";
import qaImg from "../../../assets/IMAGEs/qa.png";
import quizImg from "../../../assets/IMAGEs/quiz.png";
import ageCalImg from "../../../assets/IMAGEs/age-cal.png";
import toDoImg from "../../../assets/IMAGEs/todo.png";
import shopImg from "../../../assets/IMAGEs/shop.png";
export default function Projects() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the bottom of the page
      behavior: "smooth", // Smooth scrolling
    });
  };
  const handleOnUrl = (event) => {
    const url = event.currentTarget.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  };
  const ProjectsItem = ({ img, skills, desc, url, title }) => {
    return (
      <div data-url={url} onClick={handleOnUrl} className="projects-item">
        <div className="projects-item-img">
          <img className="img-full" src={img} />
        </div>
        <div className="projects-item-data">
          <h4>{title}</h4>
          <ul>
            {/* <li>{skills}</li> */}
            {desc ? <li>{desc}</li> : null}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className="projects-parent">
      <div className="container">
        <div className="projects">
          <div className="projects-title">
            <h2>Projects</h2>
            <button onClick={scrollToBottom}>Contact me</button>
          </div>
          <div className="projects-grid">
            <ProjectsItem
              img={quizImg}
              skills={"HTML SCSS React"}
              desc={"A fun and interactive way to test your knowledge, built using HTML, CSS, JavaScript, and React to create a smooth and engaging quiz experience."}
              url={"https://utsav-rakholiya-projects.vercel.app/quiz"}
              title={"Quiz App"}
            />
            <ProjectsItem
              img={qaImg}
              skills={"HTML SCSS React"}
              desc={"A simple yet effective way to explore JavaScript concepts, featuring interactive question-and-answer dropdowns for easy learning."}
              url={"https://utsav-rakholiya-projects.vercel.app/"}
              title={"Dropdowns"}
            />
            <ProjectsItem
              img={ageCalImg}
              skills={"Tailwind, React"}
              desc={" An accurate and easy-to-use age calculator that helps you determine your exact age down to the days, months, and years."}
              url={"https://utsav-rakholiya-projects.vercel.app/age-cal"}
              title={"Age Calculator"}
            />
            <ProjectsItem
              img={toDoImg}
              skills={"Tailwind, React"}
              desc={"A simple yet effective to-do list app that helps you organize tasks, set priorities, and stay productive with a clean and intuitive interface."}
              url={"https://utsav-rakholiya-projects.vercel.app/todo"}
              title={"To Do List"}
            />
            <ProjectsItem
              img={shopImg}
              skills={"Redux, React"}
              desc={"A fully functional online shop with a smooth cart system, letting users add, remove, and review products effortlessly before making a purchase."}
              url={"https://discovery-pi.vercel.app/shop"}
              title={"Shop and Cart"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
