import React from "react";
import earth from './images/earth.jpg';

function LocationDistance(props) {
  return (
    <div className="row asteroid-details">
      <div className="col-xs-4 sm-circle-img">
        <img className="earth-img" src={earth}/>
      </div>
      <div className="col-xs-4">
        <p className="astType">{props.astType}</p>
        <p className="distMiles">{props.distMiles}</p>
      </div>
      <div className="col-xs-4">
        <button type="button" className="btn btn-light km-button">
          /km
        </button>
      </div>
    </div>
  );
}

export default LocationDistance;
