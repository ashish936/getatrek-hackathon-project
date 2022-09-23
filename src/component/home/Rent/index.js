import React from "react";
import { Link } from "react-router-dom";

export default function(){
    return(
    <section>
        <div className="cont no-t-p">
            <div className="post-tour">
                <Link to="/rent-bike-scooty/" title="Rent a bike or scooty">
                <img
                    src="/images/book_bike_on_rent.jpg"
                    className="img-responsive"
                    alt="rent_buy_trekking_equipments"
                />
                </Link>
            </div>
        </div>
    </section>
    );
}

