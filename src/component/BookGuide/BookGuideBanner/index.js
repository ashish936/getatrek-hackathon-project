import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="heading-banner about-us-banner">
      <div className="overlay">
        <div className="heading-sec-title center">
          <h1 className="white">Hey Buddy! Looking for a Guide?</h1>
          <Link to="/places-for-trek"><h4 className="mt-40 white">Explore places</h4></Link>
        </div>
      </div>
    </div>
  );
}
