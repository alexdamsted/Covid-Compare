import React, { Component } from "react";
import {} from "reactstrap";

class Flag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          <img
            src={`https://www.countryflags.io/${this.props.countries.ISO2}/flat/64.png`}
            onClick={() => this.props.addCountry(this.props.countries.Slug)}
            id="flags"
          ></img>
        }
      </div>
    );
  }
}

export default Flag;
