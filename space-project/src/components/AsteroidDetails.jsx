import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";
import FetchSpaceInfo from "./FetchSpaceInfo";
import MoreInfo from "./MoreInfo";


function AsteroidDetails(props){

    return(
        <div>

            {/* <FetchSpaceInfo /> */}
            

            <LocationDistance
                astType="Asteroid/Earth"
                distMiles={props.distance} />
            <NameDescription 
                name={props.name}
                description={props.description}
                hazard={props.hazard}
            />
        </div>
        
    );
}

export default AsteroidDetails;