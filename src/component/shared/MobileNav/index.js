import React from "react";
import { NavLink } from "react-router-dom";

export default function (props) {
  return (
    <div className="container-fluid padding0">
      <nav className="navbar-mobile">
        <a
          href="javascrip:void(0);"
          className="closebtn"
          onClick={props.hideNav}
        >
          &times;
        </a>
        <div className="logo">
          <div className="logo">
            <NavLink to="/" className="navbar-brand link-color" href="#">
              <img src="/images/get-a-trek-logo.png" alt="get-a-trek-logo" />
            </NavLink>
          </div>
        </div>
        <ul className="navbar-nav mt-20">
          <li className="nav-item nav-link link-color">
            <NavLink to="/">
              <i class="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li className="nav-item nav-link link-color">
            <NavLink to="/about-us">
              <i class="fas fa-comment-dots"></i> About
            </NavLink>
          </li>
          <li className="nav-item nav-link link-color">
            <div class="dropdown">
              <span class="dropbtn">
                <i class="fas fa-handshake"></i> Book Trip
              </span>
              <div class="dropdown-content">
                <NavLink to="/book-trekking">Trekking</NavLink>
                <NavLink to="/book-rafting">Rafting</NavLink>
                <NavLink to="/book-camping">Camping</NavLink>
              </div>
            </div>
          </li>
          <li className="nav-item nav-link link-color">
            <NavLink to="/book-bike-scooty-on-rent">
              <i class="fas fa-motorcycle"></i> Rent a Bike
            </NavLink>
          </li>
          <li className="nav-item nav-link link-color">
            <NavLink to="/places-for-trek">
              <i class="fas fa-map-marker-alt"></i> Places for Treks
            </NavLink>
          </li>
          <li className="nav-item nav-link link-color">
            <NavLink to="/book-guide">
              <i class="fas fa-child"></i> Book Guide
            </NavLink>
          </li>
          <li className="nav-item nav-link link-color">
            <NavLink to="/contact-us">
              <i class="fas fa-mobile-alt"></i> Contact us
            </NavLink>
          </li>
          <li className="nav-item nav-link link-color">
            <NavLink to="/faqs">
              <i class="fas fa-question"></i> FAQs
            </NavLink>
          </li>
        </ul>
        <div className="mobile-nav-copyright">
          <p className="gray">&copy; Copyright 2020, NoobtoDev</p>
        </div>
      </nav>
    </div>
  );
}
