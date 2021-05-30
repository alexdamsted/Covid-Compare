import React, { Component } from "react";

export class Side_Nav extends Component {
  render() {
    return (
      <div class="sidenav">
        <div class="nav flex-column position-fixed">
          <h4>Covid Compare</h4>
          <br />

          <a class="nav-link" href="/compare">
            Compare
          </a>

          <a class="nav-link" href="/about">
            About
          </a>

          <a class="nav-link" href="/help">
            Help
          </a>
        </div>
      </div>
    );
  }
}

export default Side_Nav;
