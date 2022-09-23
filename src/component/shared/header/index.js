import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MobileNav from '../MobileNav';

export default class Nav extends Component {
  state = {
    show : false,
  }

  show = () =>{
    this.setState({
      show : true
    })
  }

  hideNav = () =>{
    this.setState({
      show: false,
    });
  }
  render(){
    console.log(this.state.show);
    return (
      <nav className="navbar navbar-expand-sm bg-nav fixed-top">
        <div className="logo">
          <Link to="/" className="navbar-brand link-color">
            <img src="/images/get-a-trek-logo.png" alt="get-a-trek-logo" />
          </Link>
        </div>
        <div className="right-align">
          <ul className="navbar-nav">
            <li className="nav-item nav-link link-color">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item nav-link link-color">
              <Link to="/about-us">About</Link>
            </li>
            <li className="nav-item nav-link link-color">
              <div class="dropdown">
                <span class="dropbtn">Book Trip</span>
                <div class="dropdown-content">
                  <Link to="/book-trekking">Trekking</Link>
                  <Link to="/book-rafting">Rafting</Link>
                  <Link to="/book-camping">Camping</Link>
                </div>
              </div>
            </li>
            <li className="nav-item nav-link link-color">
              <Link to="/places-for-trek">Places for Treks</Link>
            </li>
            <li className="nav-item nav-link link-color">
              <Link to="/rent-bike-scooty">Rent a Bike</Link>
            </li>
            <li className="nav-item nav-link link-color">
              <Link to="/book-guide">Book Guide</Link>
            </li>
            <li className="nav-item nav-link link-color">
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li className="nav-item nav-link link-color">
              <Link to="/faqs">FAQs</Link>
            </li>
            {/*<li className="nav-item nav-link link-color">
              <i className="fas fa-sign-in-alt" />
              &nbsp;&nbsp;Signin/Register
            </li>
            <li className="nav-item nav-link link-color">
              <i className="fas fa-cart-plus" />
              &nbsp;&nbsp;<span className="badge badge-secondary">0</span>
            </li>*/}
          </ul>
          <div className="nav-book-btn book-btn">
            <i
              className="fas fa-align-right on-mobile-menu"
              onClick={this.show}
            />
          </div>
          <div>{this.state.show && <MobileNav hideNav={this.hideNav} />}</div>
        </div>
      </nav>
    );
  }
}
