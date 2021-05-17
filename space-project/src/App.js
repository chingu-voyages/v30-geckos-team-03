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

// function App() {
//   let information='chocolate mint';
  
//   return (
//     <div className="App">
//     <p>Function Variable Data Below</p>
//     <p>{information}</p>
//     </div>
//   );
// }

// export default App;
