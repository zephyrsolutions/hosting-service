// src/components/Navbar.jsx
import React from "react";
import { FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <FaBolt className="logo-icon" />
          <span className="logo-text">Render<span>Host</span></span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Product</Link></li>
          <li><Link to="/pricing">Pricings</Link></li>
          <li><Link to="/contact">Customers</Link></li>
          <li><Link to="/">Docs</Link></li>
          <li><Link to="/pricing">Logs</Link></li>
          <li><Link to="/contact">Newsletter</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
