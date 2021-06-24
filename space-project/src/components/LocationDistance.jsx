import React from "react";
import earth from './images/earth.jpg';


function LocationDistance(props) {

    function changeDistance(){
        let miles=document.getElementById('miles');
        let kilos=document.getElementById('kilometers');

        if (miles.style.display==="none"){
            miles.style.display="block";
            kilos.style.display="none";
        }else{
            miles.style.display="none";
            kilos.style.display="block";
        }
    }
    return(
        
        <div className="row asteroid-details">
            <div className="col-sm-auto sm-circle-img">
                <img className="earth-img" alt="earth-logo" src={earth}/>
            </div>
            <div className="col-sm-auto">
                <span className="astType">{props.astType}</span>
                <span className="distMiles" id="miles">{props.distMiles}</span>
                <span className="distKm" id="kilometers" style={{display:"none"}}>{props.distKm}</span>
            </div>
            <div className="col-sm-auto"><button onClick={changeDistance} type="button" class="btn btn-light km-button">mi/km</button></div>
        </div>   
    );
}

export default LocationDistance;
