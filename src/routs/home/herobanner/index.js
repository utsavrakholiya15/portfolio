import React from "react";
import "./herobanner.scss";
import { IoLogoReact } from "react-icons/io5";
export default function Herobanner() {
  return (
    <div className="hb">
      <div className="container h-full">
        <div className="hb-relative">
          <div className="hb-bg-grid">
            <div className="hb-bg-black"></div>
            <div className="hb-bg-grey">
              <div className="hb-bg-grey-img">
                <IoLogoReact />
              </div>
            </div>
          </div>
          <div className="hb-data">
            <div className="hb-data-align">
              <h2>
                Nice to meet you!
                <br />
                I'm
                <span> Utsav Rakholiya.</span>
              </h2>
              <p>
                Based in Surat,I'm a frontend developer passionate about
                building accessible web apps that users love!
              </p>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
