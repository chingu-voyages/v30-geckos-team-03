import './App.css';
import React, { Component, useState} from "react";
import FetchSpaceInfo from "./FetchSpaceInfo";
import Navbar from './components/Navbar';
import DateSearch from './components/DateSearch';
import AsteroidDetails from './components/AsteroidDetails';
import AsteroidCard from './components/AsteroidCard';
import Image from './components/Image';
import MoreInfo from './components/MoreInfo';
import DailyImage from './DailyImage';
import Searchbar from './Searchbar';


function App() {

  const [date, setDate] = useState("2021-05-12");
  const setLookupDate = (date)=>{setDate((CurrentDate)=>date)}
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <Searchbar date={date} setLookupDate={setLookupDate}/>
          {/* <DateSearch /> */}
          {/* <AsteroidDetails/> */}
          <FetchSpaceInfo date={date}/>
          <DailyImage />

          {/* <div className="row">
            <div className="col-md-auto"><AsteroidCard name="Asteroid 1"/></div>
            <div className="col-md-auto"><AsteroidCard name="Asteroid 2"/></div>
          </div> */}
          
          <Image />
        </div>
      </div>
    </div>
  );
}

export default App;

