import React from "react";

function MoreInfo() {

  function showMoreInfo() {
    document.getElementById("more-info").style.display = "block";
  }

  return (
<<<<<<< HEAD
  <button onClick={showMoreInfo} className="btn btn-light more-button">More<i class="fas fa-caret-down"></i></button>
=======
  <button onClick={showMoreInfo} className="btn btn-light more-button">More Info</button>
>>>>>>> TiffanyBranch
  // document.getElementById("more-info").style.display = "block";
  );
}

export default MoreInfo;