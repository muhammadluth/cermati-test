import React, { Component } from "react";

export default class Newsletter extends Component {
  render() {
    return (
      <div>
        <div className="col-xl-6 col-md-6 col-sm-4">
          <div className="newsletter">
            <div className="card text-white">
              <div className="card-body view-card-newsletter">
                <div className="icon-exit">
                  <i className="fa fa-times" />
                </div>
                <h5 className="card-title">
                  Get latest updates in web technologies
                </h5>
                <p className="card-text newsletter-text">
                  I write articles related to web technologies, such as design
                  trends, development tools, UI/UX case studies and reviews, and
                  more. Sign up to my newsletter to get them all.
                </p>
                <div className="row">
                  <div className="col-xl-9 col-md-9 col-sm-12 view-newsletter">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 view-newsletter">
                    <a
                      href="#"
                      onClick={() => this.props.handleEmail()}
                      className="btn btn-warning button-newsletter"
                    >
                      <div className="text-button">Count me in!</div>
                    </a>
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
