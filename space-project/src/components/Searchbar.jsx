import React from "react";

function Searchbar(props){
    return(
        <div>
            <input className="searchbar form-control" type="text" placeholder={props.placeholder}/>
        </div>
        
    );
}

export default Searchbar;