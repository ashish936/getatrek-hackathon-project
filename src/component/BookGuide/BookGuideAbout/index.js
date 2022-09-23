import React from "react";
import BookGuideForm from "../BookGuideForm";

export default function () {
  return (
    <section className="new-sec bg-color-p">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3 className="mt-20 mb-20">Book a Guide</h3>
            <BookGuideForm />
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
