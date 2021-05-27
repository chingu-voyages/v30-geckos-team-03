import React from "react";

const AstNameDescription = (props) => {
    return (
        <div className="name-description">
            <h1>{props.astriod.information["2015-09-07"][0].name}</h1>
            <p className="description">{props.description}</p>
            <button className="btn btn-light more-button">More Info</button>
        </div>
    );
}

export default AstNameDescription;