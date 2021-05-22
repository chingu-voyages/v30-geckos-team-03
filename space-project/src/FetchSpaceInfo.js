import React from "react";


//const dotenv = require('dotenv');
const nasa_key=process.env.REACT_APP_NASA_API_KEY;

export default class FetchSpaceInfo extends React.Component {
  state = {
    loading: true,
    info: null
  };

  async componentDidMount() {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${nasa_key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("ALL RESPONSE DATA",data);
    const dates = data.near_earth_objects
    //console.log("DATES", dates);
    for (const date in dates){console.log("DATE LIST", dates[date]);}
    this.setState({ information: data.near_earth_objects, loading: false });
    
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.information) {
      return <div>didn't get any information</div>;
    }

    return (
      <div>
        <div>Name: {this.state.information["2015-09-07"][0].name}</div>
        <div>JPL ID: {this.state.information["2015-09-07"][0].id}</div>
        <div>Close Approach Date: {this.state.information["2015-09-07"][0].close_approach_data[0].close_approach_date_full}</div>
        <div>Dangerous?: {this.state.information["2015-09-07"][0].is_potentially_hazardous_asteroid}</div>
        <div>Orbiting: {this.state.information["2015-09-07"][0].close_approach_data[0].orbiting_body}</div>
        <div>Distance in Miles: {this.state.information["2015-09-07"][0].close_approach_data[0].miss_distance.miles} mi</div>
        <div>Distance in Kilometers: {this.state.information["2015-09-07"][0].close_approach_data[0].miss_distance.kilometers} km</div>
        <div>Relative Velocity Miles per Hour: {this.state.information["2015-09-07"][0].close_approach_data[0].relative_velocity.miles_per_hour}</div>
        <div>Relative Velocity Kilometers per Hour: {this.state.information["2015-09-07"][0].close_approach_data[0].relative_velocity.kilometers_per_hour}</div>
        <div>Relative Velocity Kilometers per Second: {this.state.information["2015-09-07"][0].close_approach_data[0].relative_velocity.kilometers_per_second}</div>
        <div>Minimum Diameter in Feet : {this.state.information["2015-09-07"][0].estimated_diameter.feet.estimated_diameter_min}</div>
        <div>Maximum Diameter in Feet : {this.state.information["2015-09-07"][0].estimated_diameter.feet.estimated_diameter_max}</div>
        <div>Minimum Diameter in Meters : {this.state.information["2015-09-07"][0].estimated_diameter.meters.estimated_diameter_min}</div>
        <div>Maximum Diameter in Meters : {this.state.information["2015-09-07"][0].estimated_diameter.meters.estimated_diameter_max}</div>
        <div>Absolute Magnitude : {this.state.information["2015-09-07"][0].absolute_magnitude_h}</div>




        
      </div>
    );
  }
}