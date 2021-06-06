
import React, {useState} from "react";
import Navbar from './components/Navbar';
import DateSearch from './components/DateSearch';
import AsteroidDetails from './components/AsteroidDetails';
import AsteroidCard from './components/AsteroidCard';
import Searchbar from './components/Searchbar';
import fecthAsteroid from './FetchSpaceInfo';
import Image from './components/Image';
import MoreInfo from './components/MoreInfo';
import FetchSpaceInfo from './components/FetchSpaceInfo';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


export const App = () => {
  
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="container-border">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Searchbar />
			  <fecthAsteroid />
              {/* <AsteroidDetails/> */}
              {/* <FetchSpaceInfo /> */}

              {/* <div className="row">
                <div className="col-md-auto"><AsteroidCard name="Asteroid 1"/></div>
                <div className="col-md-auto"><AsteroidCard name="Asteroid 2"/></div>
              </div> */}
              
              <Image />
            </Route>

            <Route exact path="/Signup">
              <Signup />
            </Route>

          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
