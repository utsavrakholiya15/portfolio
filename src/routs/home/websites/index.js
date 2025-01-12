import React from "react";
import "./websites.scss";
import biographImg from "../../../assets/IMAGEs/biograph-img.png";
import siroImg from "../../../assets/IMAGEs/siro-img.png";
import bofImg from "../../../assets/IMAGEs/bof-img.png";
import cleanicImg from "../../../assets/IMAGEs/cleanic-img.png";
export default function Websites() {
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
  const WebsiteItem = ({ img, skills, desc, url, title }) => {
    return (
      <div data-url={url} onClick={handleOnUrl} className="websites-item">
        <div className="websites-item-img">
          <img className="img-full" src={img} />
        </div>
        <div className="websites-item-data">
          <h4>{title}</h4>
          <ul>
            <li>{skills}</li>
            {desc ? <li>{desc}</li> : null}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className="websites-parent">
      <div className="container">
        <div className="websites">
          <div className="websites-title">
            <h2>Websites</h2>
            <button onClick={scrollToBottom} >Contact me</button>
          </div>
          <div className="websites-grid">
            <WebsiteItem
              img={biographImg}
              skills={"HTML SCSS React"}
              desc={"okay"}
              url={"https://biograph-ten.vercel.app/"}
              title={"Biograph"}
            />
            <WebsiteItem
              img={siroImg}
              skills={"HTML SCSS React"}
              desc={"okay"}
              url={"https://siro-hotels.vercel.app/"}
              title={"Siro"}
            />
            <WebsiteItem
              img={bofImg}
              skills={"Tailwind, React"}
              desc={"okay"}
              url={"https://bof-three.vercel.app/"}
              title={"The Bussiness of Fashion"}
            />
            <WebsiteItem
              img={cleanicImg}
              skills={"Tailwind, React"}
              desc={"okay"}
              url={"https://cleanic.vercel.app/"}
              title={"The Cleanic"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
