import React, { Component } from "react";
import axios from "axios";

export default class BookGuideForm extends Component {
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
    <div className="search-box book-guide-page-sec">
      <form className="" onSubmit={this.onSubmit}>
        
          
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
          
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                id="msg"
                placeholder="Enter your query here.."
                required
              />
            </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <button
              type="submit"
              className="btn bg-color white"
              disabled={loading}
            >
              {loading && (
                <span>
                  <i class="fas fa-sun fa-spin"></i> Submiting
                </span>
              )}
              {!loading && <span>Submit</span>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
}