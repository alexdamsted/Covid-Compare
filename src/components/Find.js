import React, { Component } from "react";
import { Form, Input } from "reactstrap";

class Find extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text transparent">
            <i class="fa fa-search"></i>
          </div>
        </div>
        <input
          class="form-control left-border-none"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Find;
