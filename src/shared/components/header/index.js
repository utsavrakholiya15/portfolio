import React from "react";
import "./header.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiVercelFill } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
export default function Header() {
  return (
    <header>
      <div className="container h-full">
        <div className="header">
          <div className="header-title">
            <p>Utsav Rakholiya</p>
          </div>
          <div className="header-icons">
            <div className="header-icons-align">
              <div className="header-icons-item">
                <RiVercelFill />
              </div>
              <div className="header-icons-item">
                <FaGithub />
              </div>
              <div className="header-icons-item">
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
