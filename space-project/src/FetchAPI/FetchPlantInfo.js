import React, { useState, useEffect } from "react";

const FecthPlanetInfo = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [planetData, setPlanetData] = useState({});

  
  const fetchPlanetData = async () => {
    const planet = props.planetSearch
    const res = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/moon`);
    setPlanetData(await res.json());
    setIsLoading(false);
  };
  

  useEffect(() => {
    fetchPlanetData();
  }, []);

  return isLoading ? (
    "Loading.."
  ) : (
    <>
      <div className="container">
        <div className="row">
          <p>{planetData.name}</p>
        </div>
      </div>
    </>
  );
};

export default FecthPlanetInfo;
