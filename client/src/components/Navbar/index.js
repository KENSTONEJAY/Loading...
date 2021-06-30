import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ opacity: 93 }}>
      <a className="navbar-brand" href="#">TICKET SCALPER</a>
      <div className="container">
        <div className="row-cols-auto">
          <div className="navbar" id="navbarNav">
            <NavLink
              to="/home"
              className="nav-link"
            >
              Home
              </NavLink>
            <NavLink
              to="/location"
              className="nav-link"
            >
              Location
              </NavLink>
            <NavLink
              to="/sports"
              className="nav-link"
            >
              Sports
              </NavLink>
            <NavLink
              to="/concert"
              className="nav-link"
            >
              Concerts
              </NavLink>
            <NavLink
              to="/topevent"
              className="nav-link"
            >
              Top Events
              </NavLink>
            <NavLink
              to="/login"
              className="nav-link"
            >
              Login
              </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;