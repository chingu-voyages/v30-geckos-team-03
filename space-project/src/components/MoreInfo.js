import React from "react";

const MoreInfo = () => {

  const showMoreInfo = () => {
    document.getElementById("more-info").style.display = "block";
  }

  return (
  <button onClick={showMoreInfo} className="btn btn-light more-button">More Info</button>
  // document.getElementById("more-info").style.display = "block";
  );
}

export default MoreInfo;