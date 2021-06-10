import React from "react";
import AsteroidDetails from "./components/AsteroidDetails";
import FetchSpaceInfo from "./FetchSpaceInfo.js";

function Searchbar(props){

  return(
    <div>
      <input className="searchbar form-control" type="date" value={props.date} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

export default Searchbar