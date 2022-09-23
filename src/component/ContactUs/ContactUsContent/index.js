import React, { Component } from "react";
import PagesSideBar from "../../PagesSideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default class ContactUsContent extends Component {
  

  state = {
    loading: false,
  };
  

  onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    
    const requestPayload = {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      phone: data.get("phone"),
      email: data.get("email"),
      message: data.get("message"),
      url: "yo",
    };
    

    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
      e.target.reset();
      this.notify = () => toast("Wow so easy !");
      //this.setState({first_name: "",last_name: "",phone: "",email: "",message: ""});
    }, 2000);

    console.log(data.get("email")); // reference by form input's `name` tag

    axios.post(
      "https://g697tzgu66.execute-api.us-east-1.amazonaws.com/dev/contact-us",
      requestPayload
    );
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="about-us-sec mt-40 ">
        <div className="container">
          <div className="row">
            <PagesSideBar />
            <div className="col-sm-9">
              <div className="about-us-wrap">
                <div className="heading-sec-title">
                  <h5 className="gray">
                    <span>
                      <hr className="page-heading" />
                    </span>
                    <span>CONTACT US</span>
                  </h5>
                  <h1>
                    We are here
                    <br />
                    to help you!
                  </h1>
                </div>
                <div className="about-us-content mt-20">
                  <div className="row mt-60">
                    <div className="col-md-4 col-sm-12 mt-20 mb-40">
                      <div className="search-box">
                        <h1 className="sup-heading gray margin0">1</h1>
                        <h4>Office</h4>
                        <p className="gray">
                          CS/IT Block, TBI GEU
                          <br />
                          Clement Town, Dehradun
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-20 mb-40">
                      <div className="search-box">
                        <h1 className="sup-heading gray margin0">2</h1>
                        <h4>Contact</h4>
                        <p className="gray">
                          +91 7906263995
                          <br />
                          info@getatrek.com
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-20">
                      <div className="search-box">
                        <h1 className="sup-heading gray margin0">3</h1>
                        <h4>Business</h4>
                        <p className="gray">
                          +91 7310795100
                          <br />
                          info@noobtodev.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-40">
                    <div className="contact-form-sec">
                      <h2>Still have</h2>
                      <h1>a Question ?</h1>
                      <form className="mt-40" onSubmit={this.onSubmit}>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                id="fname"
                                name="first_name"
                                className="form-control"
                                placeholder="First Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                id="lname"
                                name="last_name"
                                className="form-control"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="number"
                                id="number"
                                name="phone"
                                className="form-control"
                                placeholder="+91 01234567890"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="abc@xyz.com"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                id="msg"
                                placeholder="Enter your query here.."
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12">
                            <button
                              type="submit"
                              className="btn bg-color white"
                              disabled={loading}
                              // onClick={notify}
                            >
                              {loading && (
                                <span>
                                  <i class="fas fa-sun fa-spin"></i> Submiting
                                </span>
                              )}
                              {!loading && <span>Submit</span>}
                            </button>
                            <ToastContainer
                              position="top-right"
                              autoClose={5000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                            />

                            <ToastContainer />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
