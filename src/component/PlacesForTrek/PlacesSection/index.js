import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    return (
      <section className="places-sec mt-40 mb-40">
        <div>
          <div className="cat-heading mt-20">
            <h3 className="margin0">Places for Trek</h3>
          </div>
          <div className="products-sec">
            <div className="row">
              {treks &&
              treks.map((trek) => {
                return(
              <div className="col-md-4 col-sm-12 mt-20">
                <Link to={trek.url}>
                <div className="search-box block-post padding0">
                  <div className="box-img">
                    <img
                      src={trek.thumbnail_image}
                      alt={trek.thumbnail_alt}
                      className="img-responsive"
                    />
                  </div>
                  <div className="box-text bg-color-p">
                    <h4 className="margin0">{trek.title}</h4>
                  </div>
                </div>
                </Link>
              </div>
                );
              })}
              
            </div>
          </div>
        </div>
      </section>
    );
}