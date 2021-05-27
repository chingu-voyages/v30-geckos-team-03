import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import DateSearch from "./components/DateSearch";


export const App = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="App">
        <div className="container-fluid">
          <div className="container-border">
            <div className="row">
              <Navbar />
            </div>
            <div className="row">
              <DateSearch />
            </div>
=======
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <DateSearch />
          <AsteroidDetails />
          {/* <FetchSpaceInfo /> */}

          <div className="row">
            <div className="col-md-auto"><AsteroidCard name="Asteroid 1"/></div>
            <div className="col-md-auto"><AsteroidCard name="Asteroid 2"/></div>
>>>>>>> parent of ca12087 (Merge pull request #16 from chingu-voyages/DevelopmentBranch)
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
