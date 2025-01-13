import React from "react";
import "./websites.scss";
import biographImg from "../../../assets/IMAGEs/biograph-img.png";
import siroImg from "../../../assets/IMAGEs/siro-img.png";
import bofImg from "../../../assets/IMAGEs/bof-img.png";
import cleanicImg from "../../../assets/IMAGEs/cleanic-img.png";
import discoveryImg from "../../../assets/IMAGEs/discovery.png";
import findmyaitoolImg from "../../../assets/IMAGEs/findmyaitool.png";
import healthIQImg from "../../../assets/IMAGEs/healthIQ.png";
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
            {/* <li>{skills}</li> */}
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
            <button onClick={scrollToBottom}>Contact me</button>
          </div>
          <div className="websites-grid">
            <WebsiteItem
              img={biographImg}
              skills={"React, Sass"}
              desc={" Revolutionizing healthcare with a tech-driven hospital and medical platform."}
              url={"https://biograph-ten.vercel.app/"}
              title={"Biograph"}
            />
            <WebsiteItem
              img={siroImg}
              skills={"React Sass"}
              desc={"Experience the pinnacle of luxury at Dubai's premier hotel destination."}
              url={"https://siro-hotels.vercel.app/"}
              title={"Siro"}
            />
            <WebsiteItem
              img={findmyaitoolImg}
              skills={"React Sass"}
              desc={"Explore top AI tools with a sleek and stunning design. 🚀"}
              url={"https://findmyaitool.vercel.app/"}
              title={"Find my AI tool"}
            />
            <WebsiteItem
              img={bofImg}
              skills={"Tailwind, React"}
              desc={"A news homepage designed with Tailwind CSS, featuring a clean, responsive layout for seamless browsing of the latest headlines."}
              url={"https://bof-three.vercel.app/"}
              title={"The Bussiness of Fashion"}
            />
            <WebsiteItem
              img={cleanicImg}
              skills={"Tailwind, React"}
              desc={"A visually stunning homepage built with Tailwind CSS, offering a seamless experience for booking home and room cleaning services."}
              url={"https://cleanic.vercel.app/"}
              title={"The Cleanic"}
            />
            <WebsiteItem
              img={healthIQImg}
              skills={"Tailwind, React"}
              desc={"A sleek, responsive homepage built with Tailwind CSS, providing easy access to hospital services, appointments, and healthcare information."}
              url={"https://health-iq-nu.vercel.app/"}
              title={"Health IQ"}
            />
            <WebsiteItem
              img={discoveryImg}
              skills={"Redux, React"}
              desc={" A school-focused homepage built with Sass and Redux, featuring a seamless shopping and cart functionality for an enhanced user experience."}
              url={"https://discovery-pi  .vercel.app/"}
              title={"Discovery"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
