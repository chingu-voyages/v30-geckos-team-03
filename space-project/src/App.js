
import './effects.css';
import './styles.css';
import React from "react";
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import AsteroidDetails from './components/AsteroidDetails';
import AsteroidCard from './components/AsteroidCard';
import Image from './components/Image';
import MoreInfo from './components/MoreInfo';
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
              <Navbar />
              <Searchbar />
              {/* <AsteroidDetails/> */}
              {/* <FetchSpaceInfo /> */}

              <div className="row">
                <div className="col-md-auto"><AsteroidCard name="Asteroid 1"/></div>
                <div className="col-md-auto"><AsteroidCard name="Asteroid 2"/></div>
              </div>
              
              <Image />
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
