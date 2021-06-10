
import './effects.css';
import './styles.css';
import React from "react";
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import AsteroidDetails from './components/AsteroidDetails';
// import AsteroidCard from './components/AsteroidCard';
import Image from './components/Image';
// import MoreInfo from './components/MoreInfo';
import FetchSpaceInfo from './components/FetchSpaceInfo';
import Signup from './components/Signup';
import Comments from './components/Comments';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


export const App = () => {
  
  return (
    <Router>
      <div className="App">
          <div className="container-fluid">
          <Switch>

            <Route exact path="/">
            <div className="row">
              <div className="col-md-7">
                <Navbar 
                  brandhref="/"
                  brandName="Asteroids"
                  firstLink="/Signup"
                  firstLinkName="Sign Up"
                  secondLink="/Comments"
                  secondLinkName="Comments"
                />
                <Searchbar />
                {/* <AsteroidDetails/> */}
                <FetchSpaceInfo />

                {/* <div className="row">
                  <div className="col-sm-auto"><AsteroidCard name="Asteroid 1"/></div>
                  <div className="col-sm-auto"><AsteroidCard name="Asteroid 2"/></div>
                </div> */}

              </div>
              <div className="col-md-5">
                <Image />
              </div>
            </div>

            </Route>
     
            <Route exact path="/Signup">
              <Signup />
            </Route>

            <Route exact path="/Comments">
              <Comments />
            </Route>

          </Switch>
          
        </div>
      </div>
    </Router>
  );
};

export default App;
