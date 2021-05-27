import React from "react";
import asteroid from './images/asteroid.jpg';

function Image(){
    return(
        <div className="image">
            <img src={asteroid} alt="asteroid" />
        </div>
    );
}

export default Image;