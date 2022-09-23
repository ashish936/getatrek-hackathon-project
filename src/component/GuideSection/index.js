import React from 'react';
import { Link } from "react-router-dom";

export default function(){
    return (
      <section className="new-sec bg-3">
        <div className="cont">
          <div className="products-sec">
            <div className="row">
              <div className="guide-img col-md-6 col-sm-12 padding0">
                <img
                  src="images/trek-guide.png"
                  className="img-responsive"
                  alt="tour-guide"
                />
              </div>
              <div className="col-md-6 col-sm-12 padding0">
                <div className="cat-heading mt-20">
                  <h3>Are you looking for a Guide?</h3>
                </div>
                <p className="f-size-18 mt-20">
                  We provide you the best guy around your trek to help you out
                  with <br /> your confusions and queries and provide you the best experience of trekking.
                </p>
                <div className="book-btn mt-40">
                  <Link to="/book-guide"><button className="btn bg-color white btn-r">Book a Guide</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}