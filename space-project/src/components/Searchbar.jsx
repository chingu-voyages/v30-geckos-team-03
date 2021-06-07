import React, { useState } from "react";


const Searchbar = () => {
  const [startDate, setStartDate] = useState("");
  const endDate = startDate;
  const [asteroid, setAsteroid] = useState({});
  

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <input
            className="searchbar form-control"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-light search-button"
            onClick={(e) => setStartDate(e.target.value)}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
