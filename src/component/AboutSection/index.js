import React from 'react';

export default function(){
    return (
      <section className="new-sec bg-2">
        <div className="cont">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3 className="white mt-20">
                <strong>Why GetaTrek?</strong>
              </h3>
              <p className="white mt-20 f-size-18 line-h">
                Many doubts come into people's minds before planning a trip
                because everyone wants an unforgettable experience without
                regrets.
                <br />
                <br />
                <strong>GetaTrek</strong> clarifies doubt by delivering
                trekking, rafting, and camping facilities for Uttarakhand's
                adventurous trips.
                We will share the entire details of treks to ensure a wondrous
                trekking experience in Uttarakhand valleys by not missing
                anything in the trip. We also provide an online guide booking
                for the trekking so you can enjoy every moment without being
                stressed about your trip.
                <br />
                <br />
                With us, you don't have to worry about anything and dive into
                the memorable moments of your life here in Uttarakhand.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 flex-center">
              <div className="new-sec-img">
                <img
                  src="images/trekking.png"
                  alt="trekking"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}