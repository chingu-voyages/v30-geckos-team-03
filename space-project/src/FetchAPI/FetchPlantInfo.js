import React, { useState, useEffect } from "react";
import axios from 'axios';

const FecthPlanetInfo = (props) => {
  const [planet, setPlanet] = useState({});

  

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(
          `https://api.le-systeme-solaire.net/rest/bodies/`
        );
        setPlanet(response.data);
        console.log(planet);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPlanet();
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
