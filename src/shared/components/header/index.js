import React from "react";
import "./header.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiVercelFill } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const handleOnUrl = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <header>
      <div className="container h-full">
        <div className="header">
          <div className="header-title">
            <p>Utsav Rakholiya</p>
          </div>
          <div className="header-icons">
            <div className="header-icons-align">
              <div onClick={()=>{
                handleOnUrl("https://vercel.com/utsav-rakholiyas-projects")
              }} className="header-icons-item">
                <RiVercelFill />
              </div>
              <div onClick={()=>{
                handleOnUrl("https://github.com/utsavrakholiya15")
              }} className="header-icons-item">
                <FaGithub />
              </div>
              <div onClick={()=>{
                handleOnUrl("https://www.linkedin.com/in/utsav-rakholiya-52b3a8290/")
              }} className="header-icons-item">
                <FaLinkedin />
              </div>
              <div className="header-icons-item">
                <SlEnvolopeLetter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
