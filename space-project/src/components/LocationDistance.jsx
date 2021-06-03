import React from "react";

const LocationDistance = (props) => {
  return (
    <div className="row asteroid-details">
      <div className="col-md-auto sm-circle-img">
        <img alt="Here"></img>
      </div>
      <div className="col-md-auto">
        <p className="astType">{props.astType}</p>
        <p className="distMiles">{props.distMiles}</p>
      </div>
      <div className="col-md-auto">
        <button type="button" className="btn btn-light km-button">
          /km
        </button>
      </div>
    </div>
  );
}

export default LocationDistance;
