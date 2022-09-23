import React from "react";

export default function (props) {
  return (
    <div className="heading-sec">
      <div className="heading-banner">
        <img
          src={props.banner_bg}
          alt={props.title}
          className="img-responsive"
        />
        <div className="overlay">
          <div className="heading-sec-title center">
            <h1 className="white">{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
