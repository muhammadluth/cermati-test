import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="image-backgroud">
          <div className="overlay-view">
            <div className="view-logo">
              <img
                alt="logo"
                className="logo"
                src={require("../Assets/y-logo-white.png")}
              />
            </div>
            <div className="view-text">
              <div className="title-header">Hello! I'm Muhammad Luthfi</div>
              <div className="title-type">
                Consult, Design, and Develop Websites
              </div>
              <div className="text-desc">
                Have something great in mind? Fell freeto contact me.
              </div>
              <div className="text-desc">I,ll help you to make it happen.</div>
              <div className="view-button">
                <button
                  onClick={() => this.props.handleButton()}
                  className="button"
                >
                  LET'S MAKE CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
