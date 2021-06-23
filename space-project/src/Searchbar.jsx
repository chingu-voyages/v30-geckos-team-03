import React from "react";

const Searchbar = (props) => {

  return(
    <div>
      <p>{props.topic}</p>
      <input className="searchbar form-control" type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

export default Searchbar