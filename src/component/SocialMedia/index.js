import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
      <div className="social-links-sec">
        <div className="s-links-wrap">
          <div className="s-link">
            <Link to="//www.fb.me/getatrekofficial" target="_blank">
            <i className="fab fa-facebook" />
            </Link>
          </div>
          <div className="s-link">
            <Link to="//www.instagram.com/getatrek/" target="_blank">
              <i className="fab fa-instagram" />
            </Link>
          </div>
          <div className="s-link">
            <i className="fab fa-twitter" />
          </div>
          <div className="s-link">
            <i className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    );
}