import React, {useState} from "react";


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
    console.log("NEAR EARTH OBJECTS", dates)
    const date_keys = Object.keys(dates)
    console.log("DATE KEYS", date_keys)
    const date_vals=Object.values(dates)
    console.log("DATE VALUES", date_vals)
    let astro_list_compiled=[] //this list will provide all asteroid objects for the dates in question

    for (const dv of date_vals){for (const dw of dv){astro_list_compiled.push(dw)}}
    //"for of" loop above works to get individual objects-don't use a "for in" loop

    console.log('COMPILED',astro_list_compiled);


    let keys=Object.keys(dates);
    console.log('keys',keys)
    let values=Object.values(dates);
    let astros=values.map(function(d){let myiterator=d.values(); for(let myitem of myiterator) {return "****ASTEROID INFORMATION Name: "+myitem.name
    +" Orbiting: "+myitem.close_approach_data[0].orbiting_body
    +" JPL ID: "+myitem.id
    +" Close Approach Date: "+myitem.close_approach_data[0].close_approach_date_full
    +" Dangerous?: "+myitem.close_approach_data.is_potentially_hazardous_asteroid
    +" Distance in Miles: "+myitem.close_approach_data[0].miss_distance.miles
    +" Distance in Kilometers: "+myitem.close_approach_data[0].miss_distance.kilometers
    +" Relative Velocity Miles per Hour: "+myitem.close_approach_data[0].relative_velocity.miles_per_hour
    +" Relative Velocity Kilometers per Hour: "+myitem.close_approach_data[0].relative_velocity.kilometers_per_hour
    +" Relative Velocity Kilometers per Second: "+myitem.close_approach_data[0].relative_velocity.kilometers_per_second
    +" Minimum Diameter in Feet: "+myitem.estimated_diameter.feet.estimated_diameter_min
    +" Maximum Diameter in Feet: "+myitem.estimated_diameter.feet.estimated_diameter_max
    +" Minimum Diameter in Meters: "+myitem.estimated_diameter.meters.estimated_diameter_min
    +" Maximum Diameter in Meters: "+myitem.estimated_diameter.meters.estimated_diameter_max}; 
    return d.length});
    console.log('astros list',astros);
    let astro_object_list=values.map(function(g){let newiterator=g.values(); for(let newitem of newiterator) {return newitem};});
    console.log('astro object list',astro_object_list)
    let hazard=astro_list_compiled[0].is_potentially_hazardous_asteroid
    console.log('individual object values(boolean)',hazard)

    this.setState({ information: data.near_earth_objects, astros:astros, astro_list_compiled:astro_list_compiled, hazard:hazard, loading: false });
    
  
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.information) {
      return <div>didn't get any information</div>;
    }

    return (
      <div style={{display:'flex',flexWrap:'wrap'}}// 
      >
        <div>{this.state.astros}</div>
        <div>Potentially Hazardous? Boolean:{JSON.stringify(this.state.hazard)}</div>
        {/* <div>{JSON.stringify(this.state.astro_list_compiled)}</div> */}
        {/* The above code works, temporarily toggled off for space/formatting issues */}

      </div>
    );
  }
}