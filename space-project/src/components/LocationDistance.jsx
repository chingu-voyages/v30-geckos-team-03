import React from "react";

function LocationDistance(props) {
<<<<<<< HEAD
  return (
    <div className="row asteroid-details">
      <div className="col-md-auto sm-circle-img">
        <img alt="Here"></img>
      </div>
      <div className="col-md-auto">
        <p className="astType">{props.astType}</p>
        <p className="distMiles">{props.distMiles}</p>
      </div>
      <div className="col-md-auto">
        <button type="button" className="btn btn-light km-button">
          /km
        </button>
      </div>
    </div>
  );
||||||| d164460
    return(
        <div className="row asteroid-details">
            <div className="col-md-auto sm-circle-img">
                <img/>
            </div>
            <div className="col-md-auto">
                <p className="astType">{props.astType}</p>
                <p className="distMiles">{props.distMiles}</p>
            </div>
            <div className="col-md-auto"><button type="button" class="btn btn-light km-button">/km</button></div>
        </div>   
    );
=======

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
            <div className="col-md-auto sm-circle-img">
                <img/>
            </div>
            <div className="col-md-auto">
                <p className="astType">{props.astType}</p>
                <p className="distMiles" id="miles">{props.distMiles}</p>
                <p className="distKm" id="kilometers" style={{display:"none"}}>{props.distKm}</p>
            </div>
            <div className="col-md-auto"><button onClick={changeDistance} type="button" class="btn btn-light km-button">mi/km</button></div>
        </div>   
    );
>>>>>>> TiffanyBranch
}

export default LocationDistance;
