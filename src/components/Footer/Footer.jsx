import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div>
          <strong>RenderHost</strong>
          <p>Reliable hosting — built for speed and simplicity.</p>
        </div>
        <div>
          <p>© {new Date().getFullYear()} RenderHost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
