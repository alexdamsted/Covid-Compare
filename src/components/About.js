import React, { Component } from "react";
import {} from "reactstrap";

class About extends Component {
  render() {
    return (
      <div className="col-sm-9 main-content">
        <h5>About</h5>
        <br />
        <p>
          <b>Covid Compare</b> is a project made by Alex from{" "}
          <a href="https://www.ajda.nz/" target="_blank" rel="noopener">
            ajda.nz
          </a>
        </p>
        <p>
          It's built with React js and Reactstrap/Bootstrap. It also makes use
          of React Router, React hooks, and{" "}
          <a href="https://github.com/sag1v/react-elastic-carousel#readme">
            React Elastic Carousel
          </a>
          .
        </p>
        <p>
          {" "}
          The project integrates two RESTful API's. A free version of{" "}
          <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc">
            Covid-19 API
          </a>{" "}
          and <a href="https://newsapi.org/">newsapi.org</a>.
        </p>
        <br />
        <h5>Current Issues</h5>
        <br />
        <p>
          1. The api's being free versions, seem to create errors regarding
          displaying data.
        </p>
        <p>
          2. This app is only partially responsive. It was not created to be
          used on mobile.
        </p>
        <p>
          3. * May (2021) UPDATE * The free version of Newsapi.org no longer
          allows production usage. The News functionality no longer works in a
          production environment. Sorry.
        </p>
      </div>
    );
  }
}

export default About;
