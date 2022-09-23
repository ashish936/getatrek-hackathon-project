import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <section className="new-sec">
      <div className="cont">
        <h2>Why you should need a Guide?</h2>
        <div className="products-sec mt-40">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-20 center">
              <div className="icon-height">
                <img
                  src="/images/icons/location.png"
                  alt="where to trek"
                  className="img-responsive"
                />
              </div>
              <div className="center">
                <h5 className="mt-40">
                  A person doesn't know where to<br /> trek in the area.
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-20 center">
              <div className="icon-height">
                <img
                  src="/images/icons/secure.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="center">
                <h5 className="mt-40">
                  Guests may not feel safe hiking on their<br/> own in an unknown/new
                  area.
                </h5>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 center mt-20">
              <div className="icon-height">
                <img
                  src="/images/icons/flair.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="center">
                <h5 className="mt-40">
                  A guide can bring a local<br/> enjoyment to the hike.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="read-more mt-80">
          <p>
            <Link to="/blogs/book-guide-why-you-should-need-a-guide-for-trekking">
              Read a blog on Why you should need a guide on a trek?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
