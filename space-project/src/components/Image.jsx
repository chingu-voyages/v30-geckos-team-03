import React from "react";
import asteroid from './images/asteroid.jpg';

function Image(){
    return(
        <div>
            <img className="image" src={asteroid} alt="asteroid" />
        </div>
    );
}

export default Image;