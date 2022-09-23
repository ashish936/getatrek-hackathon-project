import React from "react";
import { Link } from "react-router-dom";

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
                    <span>RAFTING</span>
                  </h5>
                </div>
                <h2>
                  <strong>
                    Book Rafting in Rishikesh Uttarakhand and Himachal, India
                  </strong>
                </h2>
                <div className="sp-fe mt-30">
                  <ul className="line-h">
                    <li>
                      For the one's who have <br /> 'Adventure' as their middle
                      name.
                    </li>
                    <li>Enjoy the rapids</li>
                    <li>Money safe guarantee</li>
                    <li>Money safe guarantee</li>
                  </ul>
                </div>
                <div className="book-btn mt-30">
                  <div className="price-tag ">
                    <h3>
                      <i className="fas fa-rupee-sign"></i>
                      &nbsp;499 / Person
                    </h3>
                  </div>
                  <Link to="/contact-us">
                    <button className="btn bg-color white btn-r">
                      Book Now
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
                      src="/images/rafting/rafting-3.jpg"
                      className="img-responsive"
                      alt="book-rafting-in-rishikesh-img3"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/rafting/rafting-2.jpg"
                      className="img-responsive"
                      alt="book-rafting-in-rishikesh-img2"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/rafting/rafting-1.jpg"
                      className="img-responsive"
                      alt="book-rafting-in-rishikesh-img1"
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
              <h4 className="margin0">River Rafting in Rishikesh </h4>
            </div>
            <div className="row mt-40">
              <div className="col-md-4 col-sm-12 mt-20 mb-30">
                <div className="search-box">
                  <h1 className="sup-heading gray margin0">9Km</h1>
                  <div className="">
                    <h5>River Rafting from Bharampuri</h5>
                    <p className="gray">
                      Min 4 Members are Required | 4 Rapids | Body Surfing |
                      Cliff Jumping | Safety Kayaker | Life Jacket |
                      Transportation from Tapovan to Rafting Starting Point
                      (Bharampuri)
                    </p>
                  </div>
                  <div className="book-btn mt-30">
                    <div className="price-tag ">
                      <h4 className="gray">
                        <i className="fas fa-rupee-sign"></i>
                        &nbsp;499 / Person
                      </h4>
                    </div>
                    <Link to="/contact-us">
                      <button className="btn bg-color white btn-r">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mt-20 mb-30">
                <div className="search-box">
                  <h1 className="sup-heading gray margin0">16Km</h1>
                  <div className="">
                    <h5>River Rafting from Shivpuri</h5>
                    <p className="gray">
                      Min 4 Members are Required | 7 Rapids | Body Surfing |
                      Cliff Jumping | Safety Kayaker | Life Jacket |
                      Transportation from Tapovan to Rafting Point Starting
                      Point (Shivpuri)
                    </p>
                  </div>
                  <div className="book-btn mt-30">
                    <div className="price-tag ">
                      <h4 className="gray">
                        <i className="fas fa-rupee-sign"></i>
                        &nbsp;699 / Person
                      </h4>
                    </div>
                    <Link to="/contact-us">
                      <button className="btn bg-color white btn-r">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mt-20">
                <div className="search-box">
                  <h1 className="sup-heading gray margin0">24Km</h1>
                  <div className="">
                    <h5>River Rafting from Marine Drive</h5>
                    <p className="gray">
                      Min 4 Members are Required | Transportation from Tapovan
                      to Rafting Starting point (Marine Drive) | Pre Session |
                      10 Rapids | Cliff Jumping | Body Surfing | Life Jacket,
                      Paddle
                    </p>
                  </div>
                  <div className="book-btn mt-30">
                    <div className="price-tag ">
                      <h4 className="gray">
                        <i className="fas fa-rupee-sign"></i>
                        &nbsp;999 / Person
                      </h4>
                    </div>
                    <Link to="/contact-us">
                      <button className="btn bg-color white btn-r">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-30">
          <div>
            <div className="cat-heading">
              <h4 className="margin0">Instructions</h4>
            </div>
            <div className="sp-fe mt-30">
              <ul className="line-h">
                <li>Don't panic, Always wear a life jacket.</li>
                <li>Wear the right outerwear for the day.</li>
                <li>Hold the paddle properly and Listen to your guide.</li>
                <li>Carry towels with you.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-30">
          <div>
            <div className="cat-heading">
              <h4 className="margin0">Make your Life an Adventure</h4>
            </div>
          </div>
        </section>
        <section className="mt-30">
          <div className="post-tour">
            <Link to="/contact-us/">
              <img
                src="/images/booking-rafting-contact.png"
                className="img-responsive"
                alt="book-rafting-contact"
              />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
