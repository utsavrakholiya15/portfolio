import React from "react";
import "./header.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiVercelFill } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import resumePDF from "../../../assets/PDFs/utsav-rakholiya-resume.pdf";
export default function Header() {
  const handleOnUrl = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "utsav-rakholiya-resume.pdf";
    link.click();
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
              <div
                onClick={() => {
                  handleOnUrl("https://vercel.com/utsav-rakholiyas-projects");
                }}
                className="header-icons-item"
              >
                <RiVercelFill />
              </div>
              <div
                onClick={() => {
                  handleOnUrl("https://github.com/utsavrakholiya15");
                }}
                className="header-icons-item"
              >
                <FaGithub />
              </div>
              <div
                onClick={() => {
                  handleOnUrl(
                    "https://www.linkedin.com/in/utsav-rakholiya-52b3a8290/"
                  );
                }}
                className="header-icons-item"
              >
                <FaLinkedin />
              </div>
              <div onClick={handleDownload} className="header-icons-item">
                <SlEnvolopeLetter />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
}
