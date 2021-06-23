import React, { useState, useEffect } from "react";

const FecthPlanetInfo = (props) => {
  const [planet, setPlanet] = useState({});

  const fetchPlanet = async () => {
    let response = await fetch(
      `https://api.le-systeme-solaire.net/rest/bodies/`
    );
    response = await response.json();
    let data = response;
    setPlanet(data);
    console.log(planet);
  };

  useEffect(() => {
    fetchPlanet().then(() => console.log(planet));
  }, []);

 

  return (
    <>
      <div className="container">
        <div className="row">{planet.bodies[0].englishName}</div>
      </div>
    </>
  );
};

export default FecthPlanetInfo;
