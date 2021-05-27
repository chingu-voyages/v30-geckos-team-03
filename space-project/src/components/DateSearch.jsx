import Reactfrom "react";

function DateSearch() {
  return (
    <div>
      <div>
        <div>
          <p>
            Search for Asteroids based on their closest approach date to Earth:{" "}
          </p>
          <div className="row">
            <div className="col-md-2">
              <Searchbar placeholder="start MM/DD/YYYY" />
            </div>
            <div className="col-md-2">
              <Searchbar placeholder="end MM/DD/YYYY" />
            </div>
            <div className="col-md-auto">
              <button type="button" class="btn btn-light search-button">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSearch;
