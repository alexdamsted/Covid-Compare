import React, { Component } from "react";
import {} from "reactstrap";

class Help extends Component {
  render() {
    return (
      <div className="col-sm-9 main-content">
        <h5>Help</h5>
        <br />
        <h3>How to use this app</h3>
        <br />

        <p>1. Search for a country in the search bar or in the carousel.</p>
        <p>
          2. Click on the <b>flag</b> of your desired country. This will add it
          into a table below.
        </p>
        <p>
          3. Click on a country name in the table to open up relevant news
          stories.{" "}
        </p>
      </div>
    );
  }
}

export default Help;
