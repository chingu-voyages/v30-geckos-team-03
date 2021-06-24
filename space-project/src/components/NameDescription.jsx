import React, {useState} from "react";

function NameDescription(props) {
    const [displayNone, setDisplayNone] = useState(true);

    function showMoreInfo() {
        setDisplayNone(!displayNone);
        displayNone ? document.getElementById("more-info").style.display = "block" : document.getElementById("more-info").style.display = "none";

    }

    return (
        <div className="name-description">
            <h2>{props.name}</h2>
            <div className="description">
                <span>Potentially Hazardous: {props.hazard}</span>
                <span>{props.description}</span> 
            </div>
            <button onClick={showMoreInfo} className="btn btn-light more-button">
                {displayNone ? "More" : "Less"}
            </button>

        </div>
    );
}

export default NameDescription;