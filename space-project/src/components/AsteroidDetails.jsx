import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";
import FetchSpaceInfo from "./FetchSpaceInfo";
import MoreInfo from "./MoreInfo";


const AsteroidDetails = (props) => {
    return(
        <div>

            <FetchSpaceInfo />
            <MoreInfo />

            <LocationDistance
                astType="Asteroid/Earth"
                distMiles={props.distance} 
                distKm={props.distance_km}/>
            <NameDescription 
                name={props.name}
                description={props.description}
                hazard={props.hazard}
            />
        </div>
      )}
    </>
  );
};

export default AsteroidDetails;
