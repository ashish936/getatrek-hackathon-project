import React from "react";

export default function(){
    return (
        <section className="places-for-trek mt-110">
            <div className="places-desktop">
                <div className="head-section">
                <img
                    src="images/places-for-trek-head-sec.png"
                    className="img-responsive"
                    alt="Places for trek"
                />
                </div>
                <div className="places-for-trek-tagline">
                <h1>Get a life, Get a Trek</h1>
                </div>
            </div>
            <div className="head-sec-mobile bg-color-p">
                <img
                    src="images/places-mobile.png"
                    className="img-responsive"
                    alt="Places for trek"
                />
                <div className="places-for-trek-tagline-mobile center">
                    <h4 className="margin0">Get a life, Get a Trek</h4>
                </div>
            </div>
      </section>
    );
}