import React from "react";

function AsteroidCard(props){
    return(
        <div>
            <div className="ast-card">
                <h5>Name</h5>
                <p>Orbiting: </p>
                <p>Close Approach Distance: </p>

                {/* <h5>{props.name}</h5>
                <p>Orbiting: {props.orbiting}</p>
                <p>Close Approach Distance: {props.distance}</p> */}
            </div>
        </div>
    );
}

export default AsteroidCard;