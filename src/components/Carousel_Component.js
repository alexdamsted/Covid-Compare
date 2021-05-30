import React, { Component } from "react";
import {} from "reactstrap";
import Carousel from "react-elastic-carousel";
import Carousel_Country from "./Carousel_Country.js";

class Carousel_Component extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel
        itemPadding={[10, 10]}
        itemsToShow={3}
        // Bring this ref to App.js
        ref={(ref) => (this.carousel = ref)}
      >
        {this.props.filtered.map((country) => (
          <Carousel_Country
            key={country.Country}
            countries={country}
            addCountry={this.props.addCountry}
            loading={this.props.loading}
          />
        ))}
      </Carousel>
    );
  }
}

export default Carousel_Component;
