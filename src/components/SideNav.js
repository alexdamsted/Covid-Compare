import React, { Component } from "react";

export class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <div className="nav flex-column position-fixed">
          <h4>Covid Compare</h4>
          <br />

          <a className="nav-link" href="/compare">
            Compare
          </a>

          <a className="nav-link" href="/about">
            About
          </a>

          <a className="nav-link" href="/help">
            Help
          </a>
        </div>
      </div>
    );
  }
}

export default SideNav;
