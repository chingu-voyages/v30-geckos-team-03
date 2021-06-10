import React from "react";

const Searchbar = (props) => {
  return (
    <>
      <div className="row">
        <p>
          Search for Asteroids based on their closest approach date to Earth:{" "}
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <input
            className="searchbar form-control"
            type="text"
            placeholder={props.placeholder}
          />
        </div>
        <div className="col-md-2">
          <button type="button" class="btn btn-light search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
