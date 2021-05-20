import React from "react";
import LocationDistance from "./LocationDistance";
import NameDescription from "./NameDescription";


function AsteroidDetails(){
    return(
        <div>
            <LocationDistance
                astType="Asteroid/Earth"
                distMiles="Distance mi" />
            <NameDescription 
                name="Asteroid Name"
                description="This will be a brief description of the asteroid. The information can come from the API or we could create it ourselves. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor sapien et quam blandit hendrerit."
                
            />
        </div>
        
    );
}

export default AsteroidDetails;