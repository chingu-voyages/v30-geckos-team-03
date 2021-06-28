import React, { useState, useEffect } from "react";

const FecthPlanetInfo = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/${props.planetSearch}`;

    const fetchPlanetData = async () => {
      const res = await fetch(url);
      setPlanetData(await res.json());
      setIsLoading(false);
    };

    fetchPlanetData();
  }, [props.planetSearch]);

  return isLoading ? (
    "Loading.."
  ) : (
    <>
      <div className="container">
        <div className="row">
          <h1>{planetData.englishName}</h1>
        </div>
        <div className="row">
          <h3>Planet: {JSON.stringify(planetData.isPlanet)}</h3>
        </div>
        <div className="row">
          <h4>Density: {planetData.density}</h4>
        </div>
        <div className="row">
          <h5>Discovered: {planetData.discoveryDate}</h5>
        </div>
        <div className="row">
          <h5>Discovered By: {planetData.discoveredBy}</h5>
        </div>
      </div>
    </>
  );
};

export default FecthPlanetInfo;
