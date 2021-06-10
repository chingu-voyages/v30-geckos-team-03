import React from "react";
import MoreInfo from "./MoreInfo";

function NameDescription(props) {
    return (
        <div className="name-description">
            <h1>{props.name}</h1>
            <p className="description">
                <ul>
                    <li>{props.description}</li>
                    <li>Potentially Hazardous?: {props.hazard}</li>
                </ul>
            </p>
            <MoreInfo />
        </div>
    );
}

export default NameDescription;