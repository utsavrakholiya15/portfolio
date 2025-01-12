import React from "react";
import "./footer.scss";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-title">
          <h2>Contact me.</h2>
          <p>
            Let’s create something extraordinary together! Whether it’s a
            project, an opportunity, or just a quick chat, I’m here for
            you—contact me today!
          </p>
        </div>
        <div className="footer-data">
          <a href="tel:+91-9825391190">
            <MdLocalPhone />
            +91 9825391190
          </a>
          <a href="mailto:utsavrakholiya11@gmail.com">
            <MdEmail />
            utsavrakholiya11@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
