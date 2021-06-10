import React from "react";
import AsteroidDetails from "./components/AsteroidDetails";
import FetchSpaceInfo from "./FetchSpaceInfo.js";

function Searchbar(props){

  console.log("DATE?", props.date);
  return(
    <div>
      <input className="searchbar form-control" type="date" value={props.date} placeholder={props.placeholder} onChange={(event)=>{props.setLookupDate(event.target.value)}} />
    </div>
  )
}

export default Searchbar