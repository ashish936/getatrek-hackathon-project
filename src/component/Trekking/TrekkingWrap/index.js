import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function () {
    const [treks, setTreks] = useState([]);
    useEffect(async () => {
      const response = await (
        await fetch(
          "https://ysn2atituc.execute-api.us-east-1.amazonaws.com/dev/treks"
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
              <div className="trek-title-wrap mb-20">
                <div className="heading-sec-title">
                  <h5 className="gray">
                    <span>
                      <hr className="page-heading" />
                    </span>
                    <span>TREKKING</span>
                  </h5>
                </div>
                <h2>
                  <strong>
                    Book Trekking in Uttarakhand and Himachal, India
                  </strong>
                </h2>
                <div className="book-btn mt-40">
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
                      src="/images/trekking/trekking-discount.jpg"
                      className="img-responsive"
                      alt="book-trekking-in-uttarakhand"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/trekking/trekking-quote.jpg"
                      className="img-responsive"
                      alt="book-trekking-in-himachal"
                    />
                  </div>
                </div>

                <div className="cont-wrap">
                  <div className="box-img-h">
                    <img
                      src="/images/trekking/trekking-breathe.jpg"
                      className="img-responsive"
                      alt="book-trekking-in-India"
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
              <h3 className="margin0">Top Rated Treks</h3>
            </div>
            <div className="products-sec">
              <Carousel responsive={responsive}>
                {treks &&
                  treks.map((trek) => {
                    return (
                      <Link to={trek.url}>
                        <div className="treks-sec-carousel mt-20">
                          <div className="search-box block-post padding0">
                            <div className="box-img">
                              <img
                                src={trek.background_image}
                                alt={trek.title}
                                className="img-responsive"
                              />
                            </div>
                            <div className="box-text">
                              <h4 className="margin0">{trek.title}</h4>
                              <div className="box-btn bg-color white">
                                <Link to={trek.url}>
                                  <i className="fas fa-arrow-right" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </Carousel>
            </div>
          </div>
        </section>
        <section className="mt-30">
          <div>
            <div className="cat-heading">
              <h3 className="margin0">Rent/Buy Trekking Gears or Equipments</h3>
            </div>
          </div>
        </section>
        <section className="mt-30">
          <div className="post-tour">
            <Link to="/contact-us/">
              <img
                src="/images/rent_buy_trekking_equipments.png"
                className="img-responsive"
                alt="rent_buy_trekking_equipments_in_uttarakhand_India"
              />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
