import './effects.css';
import './styles.css';
import React, {useState} from "react";
import FetchSpaceInfo from "./FetchSpaceInfo";
import Navbar from './components/Navbar';
import Image from './components/Image';
import MoreInfo from './components/MoreInfo';
import DailyImage from './DailyImage';
import Searchbar from './components/Searchbar';
import Signup from './components/Signup';
import Comments from './components/Comments';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const setLookupDate = (date)=>{setDate((CurrentDate)=>date)}
  const onChange=(event)=>{setLookupDate(event.target.value)}
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
                    thirdLink="/DailyImage"
                    thirdLinkName="DailyImage"
                  />
                  <Searchbar date={date} setLookupDate={setLookupDate} onChange={onChange}/>
                  <FetchSpaceInfo date={date}/>
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

          <Route exact path="/DailyImage">
            <DailyImage />
          </Route>
          

        </Switch> 
        </div>
      </div>
    </Router>
    
    
  );
};

export default App;
