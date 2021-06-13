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

    console.log(data2);

    this.setState({ info2:data2, loading: false });
     
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.info2) {
      return <div>didn't get any information</div>;
    }

    return (
      
      <div>
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
      
        
        <div className="row">

          <div className="col-md-7">
            <p>A different astronomy and space science related image is featured each day, along with a brief explanation.</p>
            <p className="image-description">{this.state.info2.title}: ©{this.state.info2.copyright}</p>
            {this.state.info2.media_type ==="video" && <p><a href={this.state.info2.url}target="_blank" rel="noopener noreferrer">Today's Image is a Video: Click Here</a></p>}
            <p>{this.state.info2.explanation}</p>
          </div>

          <div className="col-md-5">
            {this.state.info2.media_type==="video"? <p><a href={this.state.info2.url}target="_blank" rel="noopener noreferrer">Today's Image is a Video: Click Here</a></p>:
            <img className="image" alt="Uh Oh. The Daily Image is not loading today." src={this.state.info2.url}/>
            }
          </div>

        </div>
                
 
      </div>
    );
  }
}