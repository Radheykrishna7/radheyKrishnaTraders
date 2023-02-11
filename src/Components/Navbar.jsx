import React from "react";
import "./Navbar.css";
// import logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src={logo} className="navbar-logo" alt="Logo" /> */}
      <section href="/">
        <h1 className="navbar-title">RadheyKrishnaTraders</h1>
      </section>
      <ul className="navbar-links">
        <p className="navbar-item">
          <a href="tel:7011735870">☎️ +91 7011735870</a>
        </p>
        <p className="navbar-item">
          <a href="mailto:Adityakarna750@gmail.com">
            📧 Adityakaran750@gmail.com
          </a>
        </p>
      </ul>
    </nav>
  );
};

export default Navbar;
