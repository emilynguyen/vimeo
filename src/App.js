import React, { Component } from "react";
import "./App.css";
import { VideoBlock } from "./Video";
import { Carousel } from "./Carousel";

class App extends Component {
  render() {
    return (
      <div>
        <VideoBlock />
        <Carousel />
      </div>
    );
  }
}

export default App;
