import React from "react";
import Searchbar from "./Searchbar";

const DateSearch = () => {
  return (
    <div>
      <div>
        <div>
          <p>
            Search for Asteroids based on their closest approach date to Earth:{" "}
          </p>
          <div className="row">
            <div className="col-md"><Searchbar placeholder="start MM/DD/YYYY"/></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSearch;
