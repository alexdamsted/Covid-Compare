import React, { Component } from "react";
import Find from "./Find.js";
import Carousel_Component from "./Carousel_Component.js";
import Added from "./Added.js";

export class Compare extends Component {
  render() {
    return (
      <div class="col-sm-9 main-content">
        <Find
          placeholder="Search for a country"
          handleChange={this.props.handleChange}
        />
        <div class="row mt-5 mb-5">
          <Carousel_Component
            // Sending the carousel child ref to parent (App.js)
            ref={(ref) => (this.childCarousel = ref)}
            filtered={this.props.filtered}
            addCountry={this.props.addCountry}
            loading={this.props.loading}
          />
        </div>
        <div class="row">
          <Added
            added={this.props.added}
            removeCountry={this.props.removeCountry}
          />
        </div>
      </div>
    );
  }
}

export default Compare;
