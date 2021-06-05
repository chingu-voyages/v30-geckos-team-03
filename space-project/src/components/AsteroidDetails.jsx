import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";

const AsteroidDetails = (props) => {
  return (
    <>
      {props.asteroid.name && (
        <div>
          <div className="row asteroid-details">
            <div className="col-md-auto sm-circle-img">
              <img alt="Here"></img>
            </div>
            <div className="col-md-auto">
              <p className="astType">{props.astType}</p>
              <p className="distMiles">{props.asteroid.name}</p>
            </div>
            <div className="col-md-auto">
              <button type="button" className="btn btn-light km-button">
                /km
              </button>
            </div>
          </div>
          {/*
      <LocationDistance astType="Asteroid/Earth" distMiles={props.distance} asteroid={props.asteroid} />
      <NameDescription
        name={props.name}
        description={props.description}
        hazard={props.hazard}
      />
      */}
        </div>
      )}
    </>
  );
};

export default AsteroidDetails;
