
import './App.css';
<<<<<<< HEAD
import React, { Component } from "react";
import {useState} from "react";
||||||| d164460
import React, { Component } from "react";
=======
import React, {useState} from "react";
>>>>>>> TiffanyBranch
import FetchSpaceInfo from "./FetchSpaceInfo";
import Navbar from './components/Navbar';
import Image from './components/Image';
import DailyImage from './DailyImage';
import Searchbar from './Searchbar';


<<<<<<< HEAD
export const App = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [asteroid, setAsteroid] = useState({});

  const searchAsteroid = async (e) => {
    
      const dataAsteroid = await searchAsteroid(start, end);

      setAsteroid(dataAsteroid);
      setStart("");
      setEnd("");
  };

||||||| d164460
function App() {
=======
function App() {

  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const setLookupDate = (date)=>{setDate((CurrentDate)=>date)}
  const onChange=(event)=>{setLookupDate(event.target.value)}
>>>>>>> TiffanyBranch
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <Searchbar date={date} setLookupDate={setLookupDate} onChange={onChange}/>
          <FetchSpaceInfo date={date}/>
          <DailyImage />

          
          <Image />
        </div>
      </div>
    </div>
  );
};

export default App;
