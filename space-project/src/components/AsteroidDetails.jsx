import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";

const AsteroidDetails = (props) => {
  return (
    <div>
      <LocationDistance astType="Asteroid/Earth" distMiles={props.distance} />
      <NameDescription
        name={props.name}
        description={props.description}
        hazard={props.hazard}
      />
    </div>
  );
};

export default AsteroidDetails;
