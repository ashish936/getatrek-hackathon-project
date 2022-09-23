import React from "react";
import {Link} from "react-router-dom";

export default function(){
    return (
      <div className="col-md-3 col-sm-12 mb-40">
        <ul class="list-group">
          <li class="list-group-item">
            <Link to="/">
              <h5 className="margin0">Home</h5>
            </Link>
          </li>
          <li class="list-group-item">
            <Link to="/about-us">
              <h5 className="margin0">About us</h5>
            </Link>
          </li>
          <li class="list-group-item">
            <Link to="/places-for-trek">
              <h5 className="margin0">Places for Treks</h5>
            </Link>
          </li>
          <li class="list-group-item">
            <Link to="/book-guide">
              <h5 className="margin0">Book Guide</h5>
            </Link>
          </li>
          <li class="list-group-item">
            <Link to="/contact-us">
              <h5 className="margin0">Contact us</h5>
            </Link>
          </li>
          <li class="list-group-item">
            <Link to="/faqs">
              <h5 className="margin0">FAQs</h5>
            </Link>
          </li>
        </ul>
      </div>
    );
}