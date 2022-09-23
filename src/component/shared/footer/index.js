import React from 'react';
import { Link } from "react-router-dom";

export default function() {
    return (
      <footer>
        <div className="cont">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="logo">
                <Link to="/" className="navbar-brand link-color">
                  <img
                    src="/images/get-a-trek-logo.png"
                    alt="get-a-trek-logo"
                  />
                </Link>
              </div>
              <div className="tagline mt-20">
                <p className="gray">
                  Find, Book the best Trekking,
                  <br /> Camping and Rafting adventures.{" "}
                </p>
              </div>
              <div className="social-links-footer">
                <ul className="footer-s-links padding0">
                  <li className="s-link">
                    <Link to="//www.fb.me/getatrekofficial" target="_blank">
                      <i className="fab fa-facebook" />
                    </Link>
                  </li>
                  <li className="s-link">
                    <Link to="//www.instagram.com/getatrek/" target="_blank">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li className="s-link">
                    <i className="fab fa-twitter" />
                  </li>
                  <li className="s-link">
                    <i className="fab fa-linkedin" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul className="padding0">
                <li>
                  <h5>Home</h5>
                </li>
                <li>
                  <Link to="/" title="Go back to home" className="gray">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book-trekking"
                    title="Book Trekking at best prices"
                    className="gray"
                  >
                    Book Trekking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book-rafting"
                    title="Book Rafting at best prices"
                    className="gray"
                  >
                    Book Rafting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book-camping"
                    title="Book Camping at best prices"
                    className="gray"
                  >
                    Book Camping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book-guide"
                    title="Book a guide for trekking"
                    className="gray"
                  >
                    Book Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <ul className="footer-ul">
                <li>
                  <h5>Customer Services</h5>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    title="Know more about us!"
                    className="gray"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rent-bike-scooty"
                    title="Rent a bike or scooty"
                    className="gray"
                  >
                    Rent a Bike
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    title="Have any Query?"
                    className="gray"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" title="FAQs" className="gray">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footer-div">
            <div className="footer-div-para">
              <p className="gray mt-40">
                Copyright © 2020, NoobtoDev.&nbsp; All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
    
}