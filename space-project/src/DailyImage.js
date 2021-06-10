import React from "react";

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

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.info2) {
      return <div>didn't get any information</div>;
    }

    return (
      <div style={{display:'flex',flexWrap:'wrap'}}
      >
        <div>{this.state.info2.title}: ©{this.state.info2.copyright} <br></br>
        <img src={this.state.info2.url} alt="nasa daily" style={{maxHeight: '100px', maxWidth: '200px'}}/> {this.state.info2.explanation}</div>
         
 
      </div>
    );
  }
}