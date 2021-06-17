import React, { useState, useEffect } from "react";


const FecthPlanetInfo = () => {
  const [planet, setPlanet] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchPlanet = async () => {
      let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`);
      response = await response.json();
      setPlanet(response);
    };
    
    fetchPlanet();
  }, []);

  return (
      <>
        <div className="container">
            <div className="row">
                
            </div>
        </div>
      </>
    )
}

export default FecthPlanetInfo;
