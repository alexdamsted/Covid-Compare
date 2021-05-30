import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {} from "reactstrap";

import SideNav from "./components/SideNav.js";
import About from "./components/About.js";
import Help from "./components/Help.js";
import Compare from "./components/Compare.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      inputbox: [],
      added: [],
      loading: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      inputbox: e.target.value,
    });
    this.resetCarousel();
  };

  // Use this method to prevent the carousel bug
  resetCarousel = () => {
    // carousel ref is passed up from Carousel_Component.js
    this.childCarousel_2.childCarousel.carousel.goTo(Number(0));
  };

  getCountryData = async (slug) => {
    const resp = await fetch(`https://api.covid19api.com/live/country/${slug}`);
    let addedData = await resp.json();
    // Api returns most days of covid, per country, that it tracks
    // Thus, we want the last tracked day of a country
    addedData = addedData[addedData.length - 1];
    return addedData;
  };

  // Add a country to the added state
  // Call when user clicks button associated with their desired country
  addCountry = async (slug) => {
    const addedData = await this.getCountryData(slug);
    if (addedData) {
      // Search added state for a duplicate
      const duplicate = this.state.added.find(
        (el) => el.addedCountry === addedData.Country
      );
      if (!duplicate) {
        this.setState((prevState) => ({
          added: prevState.added.concat({
            addedCountry: addedData.Country,
            confirmedTotal: addedData.Confirmed,
            deathsTotal: addedData.Deaths,
            recoveredTotal: addedData.Recovered,
            activeTotal: addedData.Active,
            countryCode: addedData.CountryCode,
          }),
        }));
      } else {
        alert(
          `${addedData.Country} is already in your list. Add another country.`
        );
      }
    } else {
      alert(`Sorry, country data is not available for ${slug}.`);
    }
  };

  removeCountry = (addedCountry) => {
    this.setState((prevState) => ({
      // Create a new array out of the added state containing only the objects that pass the test
      added: prevState.added.filter((el) => el.addedCountry !== addedCountry),
    }));
  };

  async componentDidMount() {
    // Get initial api data from /countries
    const resp = await fetch("https://api.covid19api.com/countries");
    const countries = await resp.json();
    this.setState({ countries });
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    // Filter out countries depending on what state the inputbox is in
    const { countries, inputbox } = this.state;
    const filtered = countries.filter((country) =>
      country.Country.toLowerCase().includes(inputbox.toString().toLowerCase())
    );

    return (
      <>
        <div className="container-fluid">
          <div className="row content">
            <Router>
              <SideNav />
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/help" component={Help} />

                <Route path={["/", "/compare"]}>
                  <Compare
                    handleChange={this.handleChange}
                    ref={(ref) => (this.childCarousel_2 = ref)} // Giving the carousel child ref to parent (App.js)
                    filtered={filtered}
                    addCountry={this.addCountry}
                    loading={this.state.loading}
                    added={this.state.added}
                    removeCountry={this.removeCountry}
                  />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </>
    );
  }
}

export default App;
