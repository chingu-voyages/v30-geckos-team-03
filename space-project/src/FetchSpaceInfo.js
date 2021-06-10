import React, {useState} from "react";
import AsteroidDetails from './components/AsteroidDetails'
import AsteroidCard from './components/AsteroidCard'
import MoreInfo from './components/MoreInfo';


//const dotenv = require('dotenv');
const nasa_key=process.env.REACT_APP_NASA_API_KEY;

/* const startDate=new Date().toISOString().slice(0,10);
const endDate=new Date().toISOString().slice(0,10); */

/* const date_trial=this.props.date;
console.log('DATE FROM APP to FSI', date_trial); */

export default class FetchSpaceInfo extends React.Component {

  state = {
    loading: true,
    info: null,
    startDate:''
  };

  
  async componentDidMount() {
    const startDate=this.props.date;
    console.log('START DATE variable',startDate);
    const endDate=startDate;
    console.log('DATE FROM FetchSpaceInfo', startDate);
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.props.date}&end_date=${this.props.date}&api_key=${nasa_key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("ALL RESPONSE DATA",data);
    const dates = data.near_earth_objects
    console.log("NEAR EARTH OBJECTS", dates)
    const date_keys = Object.keys(dates)
    console.log("DATE KEYS", date_keys)
    const date_vals=Object.values(dates)
    console.log("DATE VALUES", date_vals)
    let astro_list_compiled=[] //this list will provide all asteroid objects for the dates in question

    for (const dv of date_vals){for (const dw of dv){astro_list_compiled.push(dw)}}

    console.log('COMPILED',astro_list_compiled);

    astro_list_compiled.sort((a,b)=>{ return a.close_approach_data[0].miss_distance.kilometers-b.close_approach_data[0].miss_distance.kilometers;})

    console.log("SORTED COMPILED", astro_list_compiled);

    let astros=astro_list_compiled.map(function compile(myitem){return(<ul>
      <li>Name: {myitem.name}</li>
      <li>Orbiting: {myitem.close_approach_data[0].orbiting_body}</li>
      <li>JPL ID: {myitem.id}</li>
      <li>Close Approach Date: {myitem.close_approach_data[0].close_approach_date_full}</li>
      <li>Distance in Miles: {myitem.close_approach_data[0].miss_distance.miles}</li>
      <li>Distance in Kilometers: {myitem.close_approach_data[0].miss_distance.kilometers}</li>
      <span id="more-info">
      <li>Relative Velocity Miles per Hour: {myitem.close_approach_data[0].relative_velocity.miles_per_hour}</li>
      <li>Relative Velocity Kilometers per Hour: {myitem.close_approach_data[0].relative_velocity.kilometers_per_hour}</li>
      <li>Relative Velocity Kilometers per Second: {myitem.close_approach_data[0].relative_velocity.kilometers_per_second}</li>
      <li>Minimum Diameter in Feet: {myitem.estimated_diameter.feet.estimated_diameter_min}</li>
      <li>Maximum Diameter in Feet: {myitem.estimated_diameter.feet.estimated_diameter_max}</li>
      <li>Minimum Diameter in Meters: {myitem.estimated_diameter.meters.estimated_diameter_min}</li>
      <li>Maximum Diameter in Meters: {myitem.estimated_diameter.meters.estimated_diameter_max}</li>
      </span>
      
    </ul>)});
    console.log('astros formatted information',astros);
    let hazard=JSON.stringify(astro_list_compiled[0].is_potentially_hazardous_asteroid)


    this.setState({ information: data.near_earth_objects, data:data, astros:astros, astro_list_compiled:astro_list_compiled, hazard:hazard, startDate:startDate, endDate:endDate,loading: false });
    
  
  }

  async componentDidUpdate(prevProps, prevState){if (prevProps.date !== this.props.date){
    const startDate=this.props.date;
    console.log('START DATE variable',startDate);
    const endDate=startDate;
    console.log('DATE FROM FetchSpaceInfo', startDate);
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.props.date}&end_date=${this.props.date}&api_key=${nasa_key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("ALL RESPONSE DATA",data);
    const dates = data.near_earth_objects
    console.log("NEAR EARTH OBJECTS", dates)
    const date_keys = Object.keys(dates)
    console.log("DATE KEYS", date_keys)
    const date_vals=Object.values(dates)
    console.log("DATE VALUES", date_vals)
    let astro_list_compiled=[] //this list will provide all asteroid objects for the dates in question

    for (const dv of date_vals){for (const dw of dv){astro_list_compiled.push(dw)}}

    console.log('COMPILED',astro_list_compiled);

    astro_list_compiled.sort((a,b)=>{ return a.close_approach_data[0].miss_distance.kilometers-b.close_approach_data[0].miss_distance.kilometers;})

    console.log("SORTED COMPILED", astro_list_compiled);

    let astros=astro_list_compiled.map(function compile(myitem){return(<ul>
      <li>Name: {myitem.name}</li>
      <li>Orbiting: {myitem.close_approach_data[0].orbiting_body}</li>
      <li>JPL ID: {myitem.id}</li>
      <li>Close Approach Date: {myitem.close_approach_data[0].close_approach_date_full}</li>
      <li>Distance in Miles: {myitem.close_approach_data[0].miss_distance.miles}</li>
      <li>Distance in Kilometers: {myitem.close_approach_data[0].miss_distance.kilometers}</li>
      <span id="more-info">
      <li>Relative Velocity Miles per Hour: {myitem.close_approach_data[0].relative_velocity.miles_per_hour}</li>
      <li>Relative Velocity Kilometers per Hour: {myitem.close_approach_data[0].relative_velocity.kilometers_per_hour}</li>
      <li>Relative Velocity Kilometers per Second: {myitem.close_approach_data[0].relative_velocity.kilometers_per_second}</li>
      <li>Minimum Diameter in Feet: {myitem.estimated_diameter.feet.estimated_diameter_min}</li>
      <li>Maximum Diameter in Feet: {myitem.estimated_diameter.feet.estimated_diameter_max}</li>
      <li>Minimum Diameter in Meters: {myitem.estimated_diameter.meters.estimated_diameter_min}</li>
      <li>Maximum Diameter in Meters: {myitem.estimated_diameter.meters.estimated_diameter_max}</li>
      </span>
      
    </ul>)});
    console.log('astros formatted information',astros);
    let hazard=JSON.stringify(astro_list_compiled[0].is_potentially_hazardous_asteroid)

    this.setState({ information: data.near_earth_objects, data:data, astros:astros, astro_list_compiled:astro_list_compiled, hazard:hazard, startDate:startDate, endDate:endDate,loading: false });

}}

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.information) {
      return <div>didn't get any information</div>;
    }

    return (
      <div style={{display:'flex',flexWrap:'wrap'}}>
        <AsteroidDetails 
        name={this.state.astro_list_compiled[0].name} 
        distance= {parseFloat(this.state.astro_list_compiled[0].close_approach_data[0].miss_distance.miles).toFixed(2) + " miles"}
        distance_km={parseFloat(this.state.astro_list_compiled[0].close_approach_data[0].miss_distance.kilometers).toFixed(2) + " km"}
        description={this.state.astros[0]}
        hazard={this.state.hazard}
        />
       

      <div className="row">
            <div className="col-md-auto"><AsteroidCard name={this.state.astro_list_compiled[1].name} 
            distance={this.state.astro_list_compiled[1].close_approach_data[0].miss_distance.miles + " miles"}
            orbiting={this.state.astro_list_compiled[1].close_approach_data[0].orbiting_body}/></div>
            <div className="col-md-auto"><AsteroidCard name={this.state.astro_list_compiled[2].name} 
            distance={this.state.astro_list_compiled[2].close_approach_data[0].miss_distance.miles + " miles"}
            orbiting={this.state.astro_list_compiled[2].close_approach_data[0].orbiting_body}/></div>
          </div>




        
 
      </div>
    );
  }
}