import React from "react";

function AstNameDescription(props) {
    return (
        <div className="name-description">
            <h1>{props.name}</h1>
            <p className="description">{props.description}</p>
            <button className="btn btn-light more-button">More Info</button>
        </div>
    );
}

export default AstNameDescription;