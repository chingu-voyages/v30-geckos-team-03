import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import fecthAsteroid from './FetchSpaceInfo'


export const App = () => {

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <Searchbar />
          <fecthAsteroid />
          {/* <AsteroidDetails/> */}

          {/* <div className="row">
            <div className="col-md-auto"><AsteroidCard name="Asteroid 1"/></div>
            <div className="col-md-auto"><AsteroidCard name="Asteroid 2"/></div>
          </div> */}
          
          
        </div>
      </div>
    </div>
  );
};

export default App;
