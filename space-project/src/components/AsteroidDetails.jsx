import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";

function AsteroidDetails(props){

    return(
        <div>

            

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
        
    );
}

export default AsteroidDetails;