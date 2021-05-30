import React, { Component } from "react";
import Find from "./Find.js";
import Carousel_Component from "./Carousel_Component.js";
import Added from "./Added.js";

export class Compare extends Component {
  render() {
    return (
      <div className="col-sm-9 main-content">
        <Find
          placeholder="Search for a country"
          handleChange={this.props.handleChange}
        />
        <div className="row mt-5 mb-5">
          <Carousel_Component
            // Sending the carousel child ref to parent (App.js)
            ref={(ref) => (this.childCarousel = ref)}
            filtered={this.props.filtered}
            addCountry={this.props.addCountry}
            loading={this.props.loading}
          />
        </div>
        <div className="row">
          <Added
            key={this.props.added}
            added={this.props.added}
            removeCountry={this.props.removeCountry}
          />
        </div>
      </div>
    );
  }
}

export default Compare;
