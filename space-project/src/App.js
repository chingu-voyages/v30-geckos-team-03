import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import DateSearch from "./components/DateSearch";


export const App = () => {
  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <div className="container-border">
            <div className="row">
              <Navbar />
            </div>
            <div className="row">
              <DateSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
