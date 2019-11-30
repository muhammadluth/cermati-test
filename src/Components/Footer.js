import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer style={{ backgroundColor: "#040325" }}>
        <div className="footer-copyright text-center py-3 view-footer">
          <i style={{ paddingRight: 5 }} className="fa fa-copyright" />
          2019 Muhammad Luthfi.
          <a
            className="view-footer"
            style={{ paddingLeft: 5 }}
            href="https://github.com/muhammadluth/"
          >
            All rights reserved.
          </a>
        </div>
      </footer>
    );
  }
}
