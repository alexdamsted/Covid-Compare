import React, { Component } from "react";

class Find extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text transparent">
            <i className="fa fa-search"></i>
          </div>
        </div>
        <input
          className="form-control left-border-none"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Find;
