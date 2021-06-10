import './App.css';
import React, {useState} from "react";
import FetchSpaceInfo from "./FetchSpaceInfo";
import Navbar from './components/Navbar';
import Image from './components/Image';
import MoreInfo from './components/MoreInfo';
import DailyImage from './DailyImage';
import Searchbar from './Searchbar';


function App() {

  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const setLookupDate = (date)=>{setDate((CurrentDate)=>date)}
  const onChange=(event)=>{setLookupDate(event.target.value)}
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <Searchbar date={date} setLookupDate={setLookupDate} onChange={onChange}/>
          <FetchSpaceInfo date={date}/>
          <DailyImage />

          
        </div>
      </div>
    
  );
};

export default App;
