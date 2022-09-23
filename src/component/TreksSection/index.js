import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImgTextLoader from "../Loaders/ImgTextLoader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const treks = [
//   {
//     name: "Kedartal Trek",
//     image: "images/kedartal-trek.jpg",
//     url: "/treks",
//   },
//   {
//     name: "Har Ki Dun Trek",
//     image: "images/har-ki-dun-trek.jpeg",
//     url: "/treks",
//   },
//   {
//     name: "Brahmatal Trek",
//     image: "images/brahmatal-trek.jpg",
//     url: "/treks",
//   },
// ];

export default function () {
  const [ treks, setTreks ] = useState([]);
  useEffect(async ()=>{
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
    <section>
      <div className="cont">
        <div className="cat-heading">
          <h3 className="margin0">Popular Treks</h3>
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
        
    </div></div>
    </section>
  );
}
