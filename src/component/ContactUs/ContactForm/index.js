import React from "react";

export default function(){
    return (
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
    );
}