import React from "react";

function MoreInfo() {

  function showMoreInfo() {
    document.getElementById("more-info").style.display = "block";
  }

  return (
  <button onClick={showMoreInfo} className="btn btn-light more-button">More<i class="fas fa-caret-down"></i></button>
  // document.getElementById("more-info").style.display = "block";
  );
}

export default MoreInfo;