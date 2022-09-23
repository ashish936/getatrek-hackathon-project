import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class HomeCarousel extends Component {
  render() {
    return (
      <div className="main-section">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          interval="4000"
          transitionTime="1600"
        >
          <div>
            <div className="overlay"></div>
            <img src="/images/trek-bg.jpg" />
            <div className="head-wrap center">
              <h1 class="ml6">
                <span class="text-wrapper">
                  <span class="letters white">
                    Adventure is waiting for you
                  </span>
                </span>
              </h1>
              <h5 className="gray">
                Best offers for Trekking Adventure
              </h5>
              <div className="exp-btn mt-30">
                <Link to="/book-trekking">
                  <button className="btn bg-color white btn-r">
                    <h5 className="margin0">
                      Explore <i class="fas fa-arrow-right"></i>
                    </h5>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="overlay"></div>
            <img src="/images/rafting-bg2.jpg" />
            <div className="head-wrap center">
              <h1 class="ml6">
                <span class="text-wrapper">
                  <span class="letters white txt-shadow">
                    Discover River Rafting Adventures
                  </span>
                </span>
              </h1>
              <h5 className="white txt-shadow">
                Book thrilling river Rafting now{" "}
              </h5>
              <div className="exp-btn mt-30">
                <Link to="/book-rafting">
                  <button className="btn bg-color white btn-r">
                    <h5 className="margin0">
                      Explore <i class="fas fa-arrow-right"></i>
                    </h5>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="overlay"></div>
            <img src="/images/camping-bg.jpg" />
            <div className="head-wrap center">
              <h1 class="ml6">
                <span class="text-wrapper">
                  <span class="letters white txt-shadow">
                    We Serve the best in our area
                  </span>
                </span>
              </h1>
              <h5 className="gray">
                Find, Book the Jungle view Camping or Riverside Camping
              </h5>
              <div className="exp-btn mt-30">
                <Link to="/book-camping">
                  <button className="btn bg-color white btn-r">
                    <h5 className="margin0">
                      Explore <i class="fas fa-arrow-right"></i>
                    </h5>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

//ReactDOM.render(<HomeCarousel />, document.querySelector(".demo-carousel"));