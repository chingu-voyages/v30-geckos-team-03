import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DateSearch from "./components/DateSearch";
import SearchBar from "./components/Searchbar";
import LocationDistance from "./components/LocationDistance";
import NameDescription from "./components/NameDescription";
import AsteroidDetails from "./components/AsteroidDetails.jsx";
import AsteroidCard from "./components/AsteroidCard.jsx";
import Image from "./components/Image.jsx";
import { fetchAsteroid } from "./FetchData";

export const App = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [asteroid, setAsteroid] = useState({});

  const searchAsteroid = async (e) => {
    
      const dataAsteroid = await fetchAsteroid(start, end);

      setAsteroid(dataAsteroid);
      setStart("");
      setEnd("");
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm">
                  <SearchBar start={start} end={end} search={searchAsteroid()} />
                  <LocationDistance
                    asteroid={asteroid}
                  />
                  <NameDescription
                    asteroid={asteroid}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <AsteroidCard name="Asteroid 1" />
                    </div>
                    <div className="col-md-6">
                      <AsteroidCard name="Asteroid 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="row">
                <div className="col-sm">
                  <Image />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
