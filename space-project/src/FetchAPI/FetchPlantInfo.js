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
          <p>{planetData.englishName}</p>
          <p>{planetData.density}</p>
          <p>{planetData.discoveryDate}</p>
          <p>{planetData.discoveredBy}</p>
        </div>
      </div>
    </>
  );
};

export default FecthPlanetInfo;
