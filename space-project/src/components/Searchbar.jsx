import React from "react";

const Searchbar = (props) => {
  return (
    <>
      <div>
        <p>
          Search for Asteroids based on their closest approach date to Earth:{" "}
        </p>
        <div className="row">
          <div className="col-xs-6">
            <input
            className="searchbar form-control"
            type="date"
            placeholder={props.placeholder}
            />
          </div>
          <div className="col-xs-6">
            <button id="search-button" type="button" className="btn btn-light">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
