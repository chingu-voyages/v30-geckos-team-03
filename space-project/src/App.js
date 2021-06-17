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
            <Route exact path="/">
              <Navbar
                brandhref="/"
                brandName="Home"
                firstLink="/Asteroid"
                firstLinkName="Asteroid"
                secondLink="/Planets"
                secondLinkName="Planets"
                thirdLink="/Comments"
                thirdLinkName="Comments"
                fourthLink="/SignUp"
                fourthLinkName="Sign Up"
              />
              <DailyImage />
            </Route>

            <Route exact path="/Planets">
              <Navbar
                brandhref="/Planets"
                brandName="Planets"
                firstLink="/H"
                firstLinkName="Home"
                secondLink="/Asteroid"
                secondLinkName="Asteroid"
                thirdLink="/Comments"
                thirdLinkName="Comments"
                fourthLink="/SignUp"
                fourthLinkName="Sign Up"
              />
              <Searchbar
                topic={"Search a Planet for more info: "}
                type={"text"}
              />
              <FecthPlanetInfo />
            </Route>

            <Route exact path="/Asteroid">
              <div className="row">
                <div className="col-md-7">
                  <Navbar
                    brandhref="/Asteroid"
                    brandName="AstroWatch"
                    firstLink="/"
                    firstLinkName="Home"
                    secondLink="/Planets"
                    secondLinkName="Planets"
                    thirdLink="/Comments"
                    thirdLinkName="Comments"
                    fourthLink="/SignUp"
                    fourthLinkName="Sign Up"
                  />
                  <Searchbar
                    topic={
                      "Search for Asteroids based on their closest approach date to Earth:"
                    }
                    type={"date"}
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

            <Route exact path="/Comments">
              <Navbar
                brandhref="/Comments"
                brandName="Comments"
                firstLink="/"
                firstLinkName="Home"
                secondLink="/Planets"
                secondLinkName="Planets"
                thirdLink="/Asteroid"
                thirdLinkName="Asteroid"
                fourthLink="/SignUp"
                fourthLinkName="Sign Up"
              />
              <Comments />
            </Route>

            <Route exact path="/Signup">
              <Navbar
                brandhref="/Signup"
                brandName="Signup"
                firstLink="/"
                firstLinkName="Home"
                secondLink="/Planets"
                secondLinkName="Planets"
                thirdLink="/Asteroid"
                thirdLinkName="Asteroid"
                fourthLink="/Comments"
                fourthLinkName="Comments"
              />
              <Signup />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
