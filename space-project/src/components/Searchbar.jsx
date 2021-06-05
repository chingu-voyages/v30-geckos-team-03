import React, { useState } from "react";
import AsteroidDetails from "./AsteroidDetails";
import { fetchAsteroid } from "../FetchSpaceInfo.js";

const Searchbar = () => {
  const [startDate, setStartDate] = useState("");
  const endDate = startDate;
  const [asteroid, setAsteroid] = useState({});
  

  const searchAsteroid = async (e) => {
    if (e.key === "Enter") {
      const dataAsteroid = fetchAsteroid(startDate, endDate);

      setAsteroid(dataAsteroid);
      setStartDate("");
    } else {
      const dataAsteroid = fetchAsteroid(startDate, endDate);

      setAsteroid(dataAsteroid);
      setStartDate("");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <input
            className="searchbar form-control"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            onKeyPress={searchAsteroid}
            placeholder="Search..."
          />
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-light search-button"
            onClick={searchAsteroid}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <AsteroidDetails asteroid={asteroid} />
    </>
  );
};

export default Searchbar;
