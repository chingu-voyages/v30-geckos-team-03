import './App.css';
import React, { Component } from "react";
import FetchSpaceInfo from "./FetchSpaceInfo";


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchSpaceInfo />
      </div>
    );
  }
}

export default App;

