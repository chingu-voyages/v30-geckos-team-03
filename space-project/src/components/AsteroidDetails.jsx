import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";
import FetchSpaceInfo from "./FetchSpaceInfo";
import MoreInfo from "./MoreInfo";


const AsteroidDetails = (props) => {
    return(
        <div>

            {/* <FetchSpaceInfo /> */}
            

            <LocationDistance
                astType="Asteroid/Earth"
                distMiles="Distance" />
            
            <NameDescription 
                name="Name"
                description="Description"
                hazard="Hazard"
            />
        </div>
        
    );
}

export default AsteroidDetails;