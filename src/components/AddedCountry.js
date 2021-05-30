import React, { useState } from "react";
import { Button } from "reactstrap";
import News from "./News.js";
import NewsLink from "./NewsLink.js";

const AddedCountry = (props) => {
  // useState hook is a common usecase for boolean toggle functionality
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // The News component allows rendering of News in a seperate <tr>
  // The NewsLink component allows an onClick reactstrap Collapse of the News component
  return (
    <tbody className="table-borderless added-content">
      <tr>
        <td>
          <NewsLink Link={props.added.addedCountry} toggle={toggle} />
        </td>
        <td>{props.added.activeTotal}</td>
        <td>{props.added.confirmedTotal}</td>
        <td>{props.added.recoveredTotal}</td>
        <td>{props.added.deathsTotal}</td>
        <td>
          {
            <Button
              onClick={() => props.removeCountry(props.added.addedCountry)}
              key={props.added.addedCountry}
              type="submit"
              color="danger"
              size="sm"
            >
              Remove
            </Button>
          }
        </td>
      </tr>
      <tr>
        <td colSpan="6">
          <News isOpen={isOpen} countryOpened={props.added.addedCountry} />
        </td>
      </tr>
    </tbody>
  );
};

export default AddedCountry;
