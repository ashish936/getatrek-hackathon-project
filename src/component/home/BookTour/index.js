import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="tour-sec">
        <div className="img-overlay">
      <div className="cont white">
        <h1 class="ml6 mt-80">
          <span class="text-wrapper">
            <span class="letters">
              <strong>Find the Best
               Trip Ever!!</strong>
            </span>
          </span>
        </h1>
        <h3>We deal with Trekking, Rafting and Camping</h3>
        <h4>Are you interested?</h4>
        <Link to="/contact-us"><button className="btn bg-color white btn-r mt-60">Give it a Shot!! Contact Us</button></Link>
      </div>
      </div>
    </div>
  );
}
