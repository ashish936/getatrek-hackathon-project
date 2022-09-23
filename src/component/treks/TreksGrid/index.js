import React from "react";

export default function (props) {
  return (
    <div className="trek-grid">
      <div className="container padding0">
        <div className="trek-grid-wrap">
          <div className="f1">
            <div className="f1-icon">
              <img
                src="/images/icons/duration.png"
                height="60px"
                alt="duration"
              />
            </div>
            <div className="f1-text ml-10">
              <h5>Duration </h5> {props.duration}
            </div>
          </div>
          <div className="f1">
            <div className="f1-icon">
              <img
                src="/images/icons/difficulty.png"
                height="60px"
                alt="duration"
              />
            </div>
            <div className="f1-text ml-10">
              <h5>Difficulty </h5> {props.difficulty}
            </div>
          </div>
          <div className="f1">
            <div className="f1-icon">
              <img
                src="/images/icons/altitude.png"
                height="60px"
                alt="duration"
              />
            </div>
            <div className="f1-text ml-10">
              <h5>Altitude </h5> {props.altitude}
            </div>
          </div>
          <div className="f1">
            <div className="f1-icon">
              <img
                src="/images/icons/best-time.png"
                height="60px"
                alt="duration"
              />
            </div>
            <div className="f1-text ml-10">
              <h5>Time to Visit </h5> {props.time_to_visit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
