import React from "react";
import MoreInfo from "./MoreInfo";

function NameDescription(props) {
    return (
        <div className="name-description">
            <h2>{props.name}</h2>
            <div className="description">
                <p>Potentially Hazardous?: {props.hazard}</p>
                <p>{props.description}</p>
            </div>
            <MoreInfo />
        </div>
    );
}

export default NameDescription;