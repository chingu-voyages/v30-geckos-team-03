import "./effects.css";
import "./styles.css";
import React, { useState } from "react";
import FetchAsteroidInfo from "./FetchAPI/FetchAsteroidInfo";
import FecthPlanetInfo from "./FetchAPI/FetchPlantInfo";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import DailyImage from "./DailyImage";
import Searchbar from "./Searchbar";
import Signup from "./components/Signup";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const setLookupDate = (date) => {
    setDate((CurrentDate) => date);
  };
  const onChange = (event) => {
    setLookupDate(event.target.value);
  };
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <Switch>
            <Route exact path="/Planets">
              <Navbar
                brandhref="/Planets"
                brandName="Planets"
                firstLink="/Signup"
                firstLinkName="Sign Up"
                secondLink="/Comments"
                secondLinkName="Comments"
                thirdLink="/DailyImage"
                thirdLinkName="DailyImage"
                fourthLink="/"
                fourthLinkName="Asteroid"
              />
              <Searchbar />
              <FecthPlanetInfo />
            </Route>
            <Route exact path="/">
              <div className="row">
                <div className="col-md-7">
                  <Navbar
                    brandhref="/"
                    brandName="AstroWatch"
                    firstLink="/Signup"
                    firstLinkName="Sign Up"
                    secondLink="/Comments"
                    secondLinkName="Comments"
                    thirdLink="/DailyImage"
                    thirdLinkName="DailyImage"
                    fourthLink="/Planets"
                    fourthLinkName="Planets"
                  />
                  <Searchbar
                    topic={"Search for Asteroids based on their closest approach date to Earth:"}
                    date={date}
                    setLookupDate={setLookupDate}
                    onChange={onChange}
                  />
                  <FetchAsteroidInfo date={date} />
                </div>

                <div className="col-md-5">
                  <Image />
                </div>
              </div>
            </Route>

            <Route exact path="/Signup">
              <Navbar
                brandhref="/Signup"
                brandName="Signup"
                firstLink="/"
                firstLinkName="Asteroid"
                secondLink="/Comments"
                secondLinkName="Comments"
                thirdLink="/DailyImage"
                thirdLinkName="Daily Image"
                fourthLink="/Planets"
                fourthLinkName="Planets"
              />
              <Signup />
            </Route>

            <Route exact path="/Comments">
              <Navbar
                brandhref="/"
                brandName="Comments"
                firstLink="/"
                firstLinkName=""
                secondLink="/Signup"
                secondLinkName="Sign Up"
                thirdLink="/DailyImage"
                thirdLinkName="Daily Image"
                fourthLink="/Planets"
                fourthLinkName="Planets"
              />
              <Comments />
            </Route>

            <Route exact path="/DailyImage">
              <Navbar
                brandhref="/DailyImage"
                brandName="Daily Image"
                firstLink="/"
                firstLinkName="Home"
                secondLink="/Signup"
                secondLinkName="Sign Up"
                thirdLink="/Comments"
                thirdLinkName="Comments"
                fourthLink="/Planets"
                fourthLinkName="Planets"
              />
              <DailyImage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
