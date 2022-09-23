import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function () {
  return (
    <section className="cont">
      <div className="container padding0">
        <div className="trekking-info-wrap">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="trek-title-wrap mb-30">
                <div className="heading-sec-title">
                  <h5 className="gray">
                    <span>
                      <hr className="page-heading" />
                    </span>
                    <span>BIKING</span>
                  </h5>
                </div>
                <h2>
                  <strong>
                    Rent a Bike or Scooty <br /> in Dehradun and Rishikesh,
                    Uttarakhand
                  </strong>
                </h2>
                <div className="sp-fe mt-30">
                  <ul className="line-h">
                    <li>Cheapest Prices ever</li>
                    <li>All Types of Bikes or Scooty available</li>
                    <li>Money safe guarantee</li>
                  </ul>
                </div>
                <div className="book-btn mt-30">
                  <div className="price-tag ">
                    <h3>
                      <i className="fas fa-rupee-sign"></i>
                      &nbsp;49 / Hour
                    </h3>
                  </div>
                  <Link to="/contact-us">
                    <button className="btn bg-color white btn-r">
                      Rent a Bike
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="features-wrap">
                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/rent-bike/bike-rent-1.jpg"
                      className="img-responsive"
                      alt="rent-a-bike-in-dehradun-uttarakhand-India"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/rent-bike/bike-rent-2.jpg"
                      className="img-responsive"
                      alt="rent-a-bike-in-rishikesh-uttarakhand-India"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/rent-bike/bike-rent-3.jpg"
                      className="img-responsive"
                      alt="rent-a-bike-in-shimla-himachal-India"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-30">
          <div>
            <div className="cat-heading">
              <h4 className="margin0">Bike or Scooty Rental</h4>
            </div>
            <div className="row mt-20">
              <div className="col-md-6 col-sm-12 mt-20">
                <div className="search-box search-box-wrap padding0">
                  <div className="rent-banner-sec-img">
                    <img
                      src="/images/rent-bike/rent-a-scooty.jpg"
                      className="img-responsive"
                    />
                  </div>
                  <div className="rent-info-sec">
                    <h5>Rent a Scooty</h5>
                    <p className="gray">
                      Provide you 1L Petrol for Free | Provide you the Helmet |
                      Mechanic Assistance or Exchange the Scooty if there would
                      be any internal issue within 50Km's for Free | Above
                      50Km's Assistance is Chargable
                    </p>
                    <small className="mt-20">
                      <i class="fas fa-info-circle"></i> No Scooty would be
                      provided without Helmet and Driving License.
                    </small>
                  
                  <div className="book-btn mt-30">
                    <div className="price-tag ">
                      <h4 className="gray">
                        <i className="fas fa-rupee-sign"></i>
                        &nbsp;49 / Hour
                      </h4>
                    </div>
                    <Link to="/contact-us">
                      <button className="btn bg-color white btn-r">
                        Rent a Scooty
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-20">
                <div className="search-box search-box-wrap padding0">
                  <div className="rent-banner-sec-img">
                    <img
                      src="/images/rent-bike/rent-a-bike.jpg"
                      className="img-responsive"
                    />
                  </div>
                  <div className="rent-info-sec">
                    <h5>Rent a Bike</h5>
                    <p className="gray">
                      Provide you 1L Petrol for Free | Provide you the Helmet |
                      Mechanic Assistance or Exchange the Bike if there would be
                      any internal issue within 50Km's for Free | Above 50Km's
                      Assistance is Chargable
                    </p>
                    <small className="mt-20">
                      <i class="fas fa-info-circle"></i> No Bike would be
                      provided without Helmet and Driving License.
                    </small>
                  
                  <div className="book-btn mt-30">
                    <div className="price-tag ">
                      <h4 className="gray">
                        <i className="fas fa-rupee-sign"></i>
                        &nbsp;59 / Hour
                      </h4>
                    </div>
                    <Link to="/contact-us">
                      <button className="btn bg-color white btn-r">
                        Rent a Bike
                      </button>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-30">
          <div>
            <div className="cat-heading">
              <h4 className="margin0">
                How we provide a Bike or Scooty on Rent
              </h4>
            </div>
            <div className="sp-fe mt-30">
              <ul className="line-h">
                <li>Ask For a Bike or Scooty.</li>
                <li>
                  Some casual formalities like verification of the ID's (Driving
                  License / Aadhaar).
                </li>
                <li>
                  Necessary and important formality provide you with the HELMET.
                </li>
                <li>Hoorah! You get the bike or sccoty on rent.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-40">
          <div>
            <div className="cat-heading">
              <h4 className="margin0">
                Rent a Bike in Uttarakhand and Himachal
              </h4>
            </div>
          </div>
        </section>
        <section className="mt-30">
          <div className="post-tour">
            <Link to="/contact-us/">
              <img
                src="/images/book_bike_on_rent.jpg"
                className="img-responsive"
                alt="rent_buy_trekking_equipments"
              />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
