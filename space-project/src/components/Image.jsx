import React from "react";
import asteroid from './images/asteroid.jpg';

function Image(){
    return(
        <div className="image">
            <img src={asteroid}/>
        </div>
    );
}

export default Image;