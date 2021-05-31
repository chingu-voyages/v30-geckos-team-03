import './App.css';
import React, { Component } from "react";
import FetchSpaceInfo from "./FetchSpaceInfo";
import Navbar from './components/Navbar';
import DateSearch from './components/DateSearch';
import AsteroidDetails from './components/AsteroidDetails';
import AsteroidCard from './components/AsteroidCard';
import Image from './components/Image';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <DateSearch />
          {/* <AsteroidDetails/> */}
          <FetchSpaceInfo />

          {/* <div className="row">
            <div className="col-md-auto"><AsteroidCard name="Asteroid 1"/></div>
            <div className="col-md-auto"><AsteroidCard name="Asteroid 2"/></div>
          </div> */}
          
          <Image />
        </div>
      </div>
    </div>
  );
}

export default App;

