import React from "react";
import Logo from "../nlogo.png";
import newLogo from "../newlogo.png";
// Import the FontAwesomeIcon component and desired icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-gray bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={newLogo} alt="logo..." />
            <h6></h6>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  about me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  how work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  portfolio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
