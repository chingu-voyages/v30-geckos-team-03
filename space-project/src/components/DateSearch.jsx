import React from "react";
import Searchbar from "./Searchbar";

function DateSearch(){
    return(
        <div>
            <p>Search for Asteroids based on their closest approach date to Earth: </p>
          <div className="row">
            <div className="col-md-2"><Searchbar placeholder="YYYY-MM-DD"/></div>
            <div className="col-md-auto"><button type="button" class="btn btn-light search-button"><i class="fas fa-search"></i></button></div>
          </div>
        </div>
        
    );
}

export default DateSearch;