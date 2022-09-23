import React from "react";
import { Link } from "react-router-dom";
import PagesSideBar from "../../PagesSideBar";

export default function () {
  return (
    <div className="about-us-sec mt-40 ">
      <div className="container">
        <div className="row">
          <PagesSideBar />
          <div className="col-md-9 col-sm-12">
            <div className="about-us-wrap">
              <div className="heading-sec-title">
                <h5 className="gray">
                  <span>
                    <hr className="page-heading" />
                  </span>
                  <span>FAQs</span>
                </h5>
                <h1>
                  Why you should visit
                  <br />
                  GetaTrek for your amazing Trip?
                </h1>
              </div>
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Is Trekking for everyone?
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <p className="margin0">
                        Yes! Trekking is for everyone. Many people thinks, they
                        could do it or not. People have doubts in their mind
                        that trekking is not meant for them. We think that the
                        people should have will power to face the challenges and
                        could go for a trek.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Is GetaTrek safe for booking any trip?
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <p className="margin0">
                        Yes, GetaTrek is totally safe for booking any trip.
                        GetaTrek is convenient and you won't face any problem.
                        We provide Money Safe Guarantee.{" "}
                        <span>
                          To know more <Link to="/contact-us">Contact us</Link>.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Is Bike renting available for all the seasons?
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      YES! Bike and Scooty's are available for the rent for all
                      the seasons.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How to pay on GetaTrek?
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      We believe in online and safe payment methods. We accept
                      payment through all the online convenient method such as
                      PayPal, GooglePay, PhonePe, Paytm or AmazonPay.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How to book a raft or a camp here?
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      It's simple, You just have to choose the package which you
                      want to book and submit your query. One of our team member
                      will contact you asap within no time.
                      <br />
                      <br />
                      <small className="mt-10 gray">
                        <i class="fas fa-info-circle"></i> Check your Name,
                        Email and Phone Number carefully before submitting your
                        query.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="mt-40 gray">
                  For any other query or help, Talk to us directly{" "}
                  <span>
                    <Link to="/contact-us">Contact us</Link>.
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
