import React, { Component } from "react";
import { Collapse, Container } from "reactstrap";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  // When a new News component mounts we want news data for it immediately
  async componentDidMount() {
    // Date data for api url
    const dateObj = new Date();
    const year = dateObj.getUTCFullYear();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate() - 1;

    try {
      const countryOpened = this.props.countryOpened;
      const apiKey = "d958f67599fe4abba4433734c5613631";
      const resp = await fetch(
        `https://newsapi.org/v2/everything?qInTitle=${countryOpened}&q=${countryOpened}+virus+Covid&from=${year}-${month}-${day}&sortBy=popularity&apiKey=${apiKey}`
      );
      const newsData = await resp.json();

      if (newsData) {
        // We want top 5 articles only
        for (var i = 0; i < 5; i++) {
          // Search for a duplicate article by title
          const duplicate = this.state.news.find(
            (el) => el.title === newsData.articles[i].title
          );

          if (!duplicate) {
            if (newsData.articles[i].author) {
              this.setState((prevState) => ({
                news: prevState.news.concat({
                  author: newsData.articles[i].author,
                  source: newsData.articles[i].source.name,
                  title: newsData.articles[i].title,
                  description: newsData.articles[i].description,
                  url: newsData.articles[i].url,
                }),
              }));
            } else {
              alert(
                "Sorry. Some or all news articles for this country may not load."
              );
            }
          } else {
            // Continue into the next iteration
            continue;
          }
        }
      } else {
        alert("News data couldn't be loaded. Try refreshing.");
      }
    } catch (e) {}
  }

  render() {
    const { news } = this.state;
    return news.map((n) => (
      <div>
        <Collapse isOpen={this.props.isOpen}>
          <u>Author:</u> {n.author}
          <br />
          <u>Source:</u> {n.source}
          <br />
          <br />
          <h4>{n.title}</h4>
          <br />
          <p>
            <i>{n.description}</i>
          </p>
          <br />
          <a href={n.url} target="_blank">
            {n.url}
          </a>
          <br />
          <hr />
        </Collapse>
      </div>
    ));
  }
}

export default News;
