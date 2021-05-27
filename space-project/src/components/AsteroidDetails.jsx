import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";
import Image from "../components/Image";

const AsteroidDetails = (props) => {
  return (
    <>
      {props.astriod.information["2015-09-07"][0](
        <div className="row">
          <div className="col-sm">
            <LocationDistance
              astType="Asteroid/Earth"
              distMiles="Distance mi"
            />
            <NameDescription
              name="Astriod Name"
              description="This will be a brief description of the asteroid. The information can come from the API or we could create it ourselves. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor sapien et quam blandit hendrerit."
            />
            {props.astriod.information["2015-09-07"][0].name}
          </div>
          <div className="col-sm mb-5">
            <Image />
          </div>
        </div>
      )}
    </>
  );
};

export default AsteroidDetails;
