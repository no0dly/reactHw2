import React, { Component } from "react";
import uuid from "uuid";

import NewsPost from "./NewsPost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      newsInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleChange(e) {
    this.setState({
      newsInput: e.target.value
    });
  }
  handleKeyDown(e) {
    const { news, newsInput } = this.state;
    let newNews = {};
    if (e.keyCode === 13) {
      newNews = {
        text: newsInput
        // uuid()
      };
      this.setState({
        newsInput: "",
        news: [...news, newNews]
      });
    }
  }

  renderPosts() {
    const { news } = this.state;
    return news.map(post => {
      return <NewsPost text={post.text} key={uuid()} />;
    });
  }
  render() {
    const { newsInput } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
