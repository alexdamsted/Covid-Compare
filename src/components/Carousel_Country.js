import React, { Component } from "react";
import {} from "reactstrap";
import Flag from "./Flag.js";
import Loader from "react-loader-spinner";

class Carousel_Country extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (
        <Loader
          type="ThreeDots"
          color="black"
          height={80}
          width={80}
          timeout={5000}
        />
      );
    } else {
      return (
        <div className="carousel-country">
          <div className="carousel-country-flag">
            <Flag
              countries={this.props.countries}
              addCountry={this.props.addCountry}
            />
          </div>
          <div className="carousel-country-title">
            {this.props.countries.Country}
          </div>
        </div>
      );
    }
  }
}

export default Carousel_Country;
