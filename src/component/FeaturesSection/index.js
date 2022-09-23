import React from 'react';
import { Link } from "react-router-dom";

export default function(){
    return (
      <section className="new-sec">
        <div className="cont">
          <div className="row mt-20">
            <div className="col-md-4 col-sm-12 mb-20">
              <Link to="/book-trekking">
                <div className="post">
                  <div className="overlay"></div>
                  <img
                    src="/images/find.jpg"
                    alt="Fint best trek"
                    className="img-responsive"
                  />
                  <div className="post-txt">
                    <h3 className="white txt-shadow">Book Trekking</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-sm-12 mb-20">
              <Link to="/book-rafting">
                <div className="post">
                  <div className="overlay"></div>
                  <img
                    src="/images/rafting.jpg"
                    alt="Book Guide"
                    className="img-responsive"
                  />
                  <div className="post-txt">
                    <h3 className="white txt-shadow">Book Rafting</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-sm-12 mb-20">
              <Link to="/book-camping">
                <div className="post">
                  <div className="overlay"></div>
                  <img
                    src="/images/camping.jpg"
                    alt="Enjoy Camping"
                    className="img-responsive"
                  />
                  <div className="post-txt">
                    <h3 className="white txt-shadow">Book Camping</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}