import React from "react";

function AsteroidCard(props){
    return(
        <div>
            <div className="ast-card">
                <h5>{props.name}</h5>
                <img></img>
            </div>
        </div>
    );
}

export default AsteroidCard;