import React, { Component } from "react";
import { Table } from "reactstrap";
import AddedCountry from "./AddedCountry.js";

class Added extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Active</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {this.props.added.map((added) => (
            <AddedCountry
              key={added.addedCountry}
              added={added}
              removeCountry={this.props.removeCountry}
            />
          ))}
        </Table>
      </div>
    );
  }
}

export default Added;
