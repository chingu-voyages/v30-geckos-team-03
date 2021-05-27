import React, { useState } from "react";
import AsteroidDetails from "../components/AsteroidDetails";
import AsteroidCard from "../components/AsteroidCard";
import { fetchAstriod } from "../FetchSpaceInfo";

const DateSearch = (props) => {
  const [date, setDate] = useState("");
  const [astriod, setAstriod] = useState({});

  const searchAstriod = async (e) => {
    if (e.key === "Enter") {
      const astriodData = await fetchAstriod();

      setAstriod(astriodData);
      setDate("");
    }
  };

  return (
    <div>
      <p>
        Search for Asteroids based on their closest approach date to Earth:{" "}
      </p>
      <div className="row">
        <div className="col-md-2">
          <input
            className="searchbar form-control"
            type="text"
            placeholder={props.placeholder}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onKeyPress={searchAstriod}
          />
        </div>
        <div className="col-md-auto">
          <button type="button" className="btn btn-light search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <AsteroidDetails astriod={astriod} />
      <div className="row">
        <div className="col-md-auto">
          <AsteroidCard name="Asteroid 1" />
        </div>
        <div className="col-md-auto">
          <AsteroidCard name="Asteroid 2" />
        </div>
      </div>
    </div>
  );
};

export default DateSearch;
