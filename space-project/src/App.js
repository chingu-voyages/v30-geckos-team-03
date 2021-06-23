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

  const [id, setId] = useState("");

  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <Navbar
                brandhref="/"
                brandName="Home"
                firstLink="/planets"
                firstLinkName="Planets"
                secondLink="/asteroids"
                secondLinkName="AstroWatch"
                thirdLink="/comments"
                thirdLinkName="Comments"
                fourthLink="/signUp"
                fourthLinkName="Sign Up"
              />
              <DailyImage />
            </Route>

            <Route exact path="/planets">
              <Navbar
                brandhref="/planets"
                brandName="Planets"
                firstLink="/"
                firstLinkName="Home"
                secondLink="/asteroids"
                secondLinkName="AstroWatch"
                thirdLink="/comments"
                thirdLinkName="Comments"
                fourthLink="/signUp"
                fourthLinkName="Sign Up"
              />
              <Searchbar
                topic={"Search a Planet for more info: "}
                type={"text"}
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder={"Search a Planet"}
              />
              <FecthPlanetInfo id={id} />
            </Route>

            <Route exact path="/asteroids">
              <div className="row">
                <div className="col-md-7">
                  <Navbar
                    brandhref="/asteroids"
                    brandName="AstroWatch"
                    firstLink="/"
                    firstLinkName="Home"
                    secondLink="/planets"
                    secondLinkName="Planets"
                    thirdLink="/comments"
                    thirdLinkName="Comments"
                    fourthLink="/signUp"
                    fourthLinkName="Sign Up"
                  />
                  <Searchbar
                    topic={
                      "Search for Asteroids based on their closest approach date to Earth:"
                    }
                    type={"date"}
                    value={date}
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

            <Route exact path="/comments">
              <Navbar
                brandhref="/comments"
                brandName="Comments"
                firstLink="/"
                firstLinkName="Home"
                secondLink="/planets"
                secondLinkName="Planets"
                thirdLink="/asteroids"
                thirdLinkName="AstroWatch"
                fourthLink="/signUp"
                fourthLinkName="Sign Up"
              />
              <Comments />
            </Route>

            <Route exact path="/signup">
              <Navbar
                brandhref="/signup"
                brandName="Signup"
                firstLink="/"
                firstLinkName="Home"
                secondLink="/planets"
                secondLinkName="Planets"
                thirdLink="/asteroids"
                thirdLinkName="AstroWatch"
                fourthLink="/comments"
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
