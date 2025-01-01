import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
           Giving pets a second chance, one home at a time.
        </p>
        
          
        <p>&copy; 2024 Rohit kumawat</p>
      </div>
    </footer>
  );
};

export default Footer;
