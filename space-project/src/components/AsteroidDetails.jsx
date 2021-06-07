import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";
import MoreInfo from "./MoreInfo";

const AsteroidDetails = (props) => {
  return (
    <>
      <div>
        <MoreInfo />

        <LocationDistance astType="Asteroid/Earth" distMiles={props.distance} />
        <NameDescription
          name={props.name}
          description={props.description}
          hazard={props.hazard}
        />
      </div>
    </>
  );
};

export default AsteroidDetails;
