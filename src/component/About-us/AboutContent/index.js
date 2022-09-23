import React from "react";
import { Link } from "react-router-dom";
import PagesSideBar from "../../PagesSideBar";

export default function () {
  return (
    <div className="about-us-sec mt-40 ">
      <div className="container">
        <div className="row">
          <PagesSideBar />
          <div className="col-sm-9">
            <div className="about-us-wrap">
              <div className="heading-sec-title">
                <h5 className="gray">
                  <span>
                    <hr className="page-heading" />
                  </span>
                  <span>ABOUT US</span>
                </h5>
                <h1>
                  We are the best
                  <br />
                  in your area
                </h1>
              </div>
              <div className="about-us-content mt-20 f-size-18 line-h">
                <p>
                  Many doubts come into people's minds before planning a trip
                  because everyone wants an unforgettable experience without
                  regrets.
                  <br />
                  <br />
                  Get a Trek clarifies doubt by delivering trekking, rafting,
                  and camping facilities for Uttarakhand's adventurous trips.
                  <br />
                  <br />
                  We will share the entire details of treks to ensure a wondrous
                  trekking experience in Uttarakhand valleys by not missing
                  anything in the trip. We also provide an online guide booking
                  for the trekking so you can enjoy every moment without being
                  stressed about your trip.
                  <br />
                  <br />
                  Suppose you are an adventure enthusiast and want to go for an
                  outstation trip, so we are here for you with the pool of
                  opportunities to travel conveniently and with affordability.
                  Besides that, we also have many facilities for daily commuters
                  who want a convenient commuting option for the office.
                  <br />
                  <br />
                  We also provide the best trekking and camping equipment for
                  rent/buy purposes, so you don't have to worry about those
                  things.
                  <br />
                  <br />
                  GetaTrek is an Initiative by NoobtoDev, a product and
                  service-based company in Dehradun, Uttarakhand, India.
                  <br />
                  <br />
                  <h5 className="gray">
                    Book your Best trip ever at GetaTrek,
                    <Link to="/contact-us"> Contact us</Link> now!
                  </h5>
                </p>
              </div>
              <section className="mt-60">
                <h2>We're known for</h2>
                <div className="row mt-20">
                  <div className="col-md-4 col-sm-12 mt-20 mb-40">
                    <div className="search-box">
                      <h1 className="sup-heading gray margin0">1</h1>
                      <div className="center">
                        <h5>Trekking</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 mt-20 mb-40">
                    <div className="search-box">
                      <h1 className="sup-heading gray margin0">2</h1>
                      <div className="center">
                        <h5>Rafting</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 mt-20">
                    <div className="search-box">
                      <h1 className="sup-heading gray margin0">3</h1>
                      <div className="center">
                        <h5>Camping</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
