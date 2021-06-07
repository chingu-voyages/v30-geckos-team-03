
import React from "react";
import Navbar from './components/Navbar';
import Image from './components/Image';
import FetchSpaceInfo from './components/FetchSpaceInfo';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


export const App = () => {
  
  return (
    <Router>
      <div className="App">
          <div className="container-border container-fluid">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <FetchSpaceInfo />
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
    </Router>
  );
};

export default App;
