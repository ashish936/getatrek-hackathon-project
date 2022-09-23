import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function () {
  const [treks, setTreks] = useState([]);
  useEffect(async () => {
    const response = await (
      await fetch(
        "https://5xqnqyaup3.execute-api.us-east-1.amazonaws.com/dev/treks"
      )
    ).json();
    console.log(response.body.treks);
    setTreks(response.body.treks);
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
                    <span>CAMPING</span>
                  </h5>
                </div>
                <h2>
                  <strong>
                    Book a Camp in Rishikesh, Uttarakhand and Himachal, India
                  </strong>
                </h2>
                <div className="sp-fe mt-30">
                  <ul className="line-h">
                    <li>
                      Bonfire, Delicious Food, Light Music and so much fun
                    </li>
                    <li>Enjoy the Riverside view</li>
                    <li>Common Washrooms</li>
                    <li>Money safe guarantee</li>
                  </ul>
                </div>
                <div className="book-btn mt-30">
                  <div className="price-tag ">
                    <h3>
                      <i className="fas fa-rupee-sign"></i>
                      &nbsp;1099 / Person
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
                      src="/images/camping/camping-1.jpg"
                      className="img-responsive"
                      alt="book-camp-in-himachal-India"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/camping/camping-2.jpg"
                      className="img-responsive"
                      alt="book-camp-in-rishikesh-uttarakhand"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/camping/camping-3.jpg"
                      className="img-responsive"
                      alt="camping-in-rishikesh"
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
              <h4 className="margin0">Camping in Rishikesh </h4>
            </div>
            <div className="row mt-40">
              <div className="col-md-12 col-sm-12">
                <div className="search-box">
                  <div className="">
                    <h4>Camping in Tapovan, Rishikesh</h4>
                    <p className="gray">
                      Breakfast | Lunch | Snacks | Dinner | Bonfire | Light
                      Music
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
              <div className="col-md-12 col-sm-12 mt-30">
                <div className="search-box">
                  <div className="">
                    <h4>Camping in Shivpuri, Rishikesh</h4>
                    <p className="gray">
                      Breakfast | Lunch | Snacks | Dinner | Bonfire | Light
                      Music
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
            </div>
          </div>
        </section>
        <section className="mt-40">
          <div>
            <div className="cat-heading">
              <h4 className="margin0">Instructions</h4>
            </div>
            <div className="sp-fe mt-30">
              <ul className="line-h">
                <li>Maintain hygeine.</li>
                <li>No Fire is allowed near Camps.</li>
                <li>Stay close to your friends.</li>
                <li>Must have an ID card.</li>
                <li>Stay away from river. Never get too close to River.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-40">
          <div>
            <div className="cat-heading">
              <h4 className="margin0">Rent/Buy Camping Gears or Equipments</h4>
            </div>
          </div>
        </section>
        <section className="mt-30">
          <div className="post-tour">
            <Link to="/contact-us/">
              <img
                src="/images/book-camp-rent-but-camping-equipments.png"
                className="img-responsive"
                alt="book-camp-rent-but-camping-equipments"
              />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
