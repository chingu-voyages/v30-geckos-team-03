import React, {useState} from "react";
import Navbar from "./components/Navbar";
import earth from "./components/images/earth.jpg";

const nasa_key=process.env.REACT_APP_NASA_API_KEY;

export default class DailyImage extends React.Component {
  state = {
    loading: true,
    info: null
  };

  
  async componentDidMount() { 
    const url2= `https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`;
    const response2=await fetch(url2);
    const data2=await response2.json();

    this.setState({ info2:data2, loading: false });
     
  }

  readMore(){
    console.log("Click happened");
    document.getElementById("full-text").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("daily-more-btn").style.display = "none";
    document.getElementById("daily-less-btn").style.display = "block";

    // const [isTruncated, setIsTruncated] = useState(true);
    // const resultString = isTruncated ? text.slice(0, 100) : text;
  }

  readLess(){
    console.log("Click 2 happened");
    document.getElementById("full-text").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("daily-more-btn").style.display = "block";
    document.getElementById("daily-less-btn").style.display = "none";
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.info2) {
      return <div>didn't get any information</div>;
    }

    return (
      <>
      
      <div style={{display:'flex',flexWrap:'wrap'}}>
                  <Navbar 
                    brandhref="/DailyImage"
                    brandName="Daily Image"
                    firstLink="/"
                    firstLinkName="Home"
                    secondLink="/Signup"
                    secondLinkName="Sign Up"
                    thirdLink="/Comments"
                    thirdLinkName="Comments"
                  />
      </div>
      
        <div>{this.state.info2.title}: ©{this.state.info2.copyright}</div>
        <img className="daily-image" src={earth} style={{maxHeight: '100px', maxWidth: '200px'}}/> 
        {/* <img className="daily-image" src={this.state.info2.url} style={{maxHeight: '100px', maxWidth: '200px'}}/>  */}
        <br></br> 

        <div id="sliced-text">{this.state.info2.explanation.slice(0,500)}<span id="dots">...</span>
        <span id="full-text">{this.state.info2.explanation.slice(500, (this.state.info2.explanation.length))}</span>
        </div>
        
        <button id="daily-more-btn" className="btn btn-light more-button" onClick={this.readMore.bind(this)}>More</button>
        <button id="daily-less-btn" className="btn btn-light more-button" onClick={this.readLess.bind(this)}>Less</button>

 
      
      </>
    );
  }
}