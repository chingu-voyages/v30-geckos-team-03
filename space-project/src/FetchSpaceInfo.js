import React, { useState } from "react";
import AsteroidDetails from "./components/AsteroidDetails";
import AsteroidCard from "./components/AsteroidCard";
import Image from "./components/Image";
import axios from "axios";

//const dotenv = require('dotenv');

const URL = "https://api.nasa.gov/neo/rest/v1/feed?";
const nasa_key = process.env.REACT_APP_NASA_API_KEY;

export const fetchAsteroid = async (startDate, endDate) => {
  const { data } = await axios
    .get(URL, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: nasa_key,
      },
    })
    .catch((error) => {
      console.log(error);
      console.clear();
    });

  //console.log("ALL RESPONSE DATA", data);
  const dates = data.near_earth_objects;
  console.log("NEAR EARTH OBJECTS", dates);
  const date_keys = Object.keys(dates);
  //console.log("DATE KEYS", date_keys);
  const date_vals = Object.values(dates);
  //console.log("DATE VALUES", date_vals);
  let astro_list_compiled = []; //this list will provide all asteroid objects for the dates in question


  for (const dv of date_vals) {
    for (const dw of dv) {
      astro_list_compiled.push(dw);
    }
  }
  console.log(astro_list_compiled)

  //console.log(data);
  return astro_list_compiled;
};
/*

const fecthAsteroid = async (startDate, endDate) => {


  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${nasa_key}`;
  const response = await fetch(url);
  const data = await response.json();

 
  console.log("ALL RESPONSE DATA", data);
  const dates = data.near_earth_objects;
  console.log("NEAR EARTH OBJECTS", dates);
  const date_keys = Object.keys(dates);
  console.log("DATE KEYS", date_keys);
  const date_vals = Object.values(dates);
  console.log("DATE VALUES", date_vals);
  let astro_list_compiled = []; //this list will provide all asteroid objects for the dates in question

  for (const dv of date_vals) {
    for (const dw of dv) {
      astro_list_compiled.push(dw);
    }
  }
  

  //console.log('COMPILED',astro_list_compiled);


  let keys = Object.keys(dates);
  console.log("keys", keys);
  let values = Object.values(dates);
  let astros = values.map(function (d) {
    let myiterator = d.values();
    for (let myitem of myiterator) {
      return (
        <ul>
          <li>Name: {myitem.name}</li>
          <li>Orbiting: {myitem.close_approach_data[0].orbiting_body}</li>
          <li>JPL ID: {myitem.id}</li>
          <li>
            Close Approach Date:{" "}
            {myitem.close_approach_data[0].close_approach_date_full}
          </li>
          <li>
            Distance in Miles:{" "}
            {myitem.close_approach_data[0].miss_distance.miles}
          </li>
          <li>
            Distance in Kilometers:{" "}
            {myitem.close_approach_data[0].miss_distance.kilometers}
          </li>
          <span id="more-info">
            <li>
              Relative Velocity Miles per Hour:{" "}
              {myitem.close_approach_data[0].relative_velocity.miles_per_hour}
            </li>
            <li>
              Relative Velocity Kilometers per Hour:{" "}
              {
                myitem.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              }
            </li>
            <li>
              Relative Velocity Kilometers per Second:{" "}
              {
                myitem.close_approach_data[0].relative_velocity
                  .kilometers_per_second
              }
            </li>
            <li>
              Minimum Diameter in Feet:{" "}
              {myitem.estimated_diameter.feet.estimated_diameter_min}
            </li>
            <li>
              Maximum Diameter in Feet:{" "}
              {myitem.estimated_diameter.feet.estimated_diameter_max}
            </li>
            <li>
              Minimum Diameter in Meters:{" "}
              {myitem.estimated_diameter.meters.estimated_diameter_min}
            </li>
            <li>
              Maximum Diameter in Meters:{" "}
              {myitem.estimated_diameter.meters.estimated_diameter_max}
            </li>
          </span>
        </ul>
      );
    }
    return d.length;
  });


  console.log("astros list", astros);
  let astro_object_list = date_vals.map(async function (g) {
    let newiterator = g.values();
    for (let newitem of newiterator) {
      return newitem;
    }
  });
 

  console.log("astro object list", astro_object_list);
  let hazard = JSON.stringify(
    astro_list_compiled[0].is_potentially_hazardous_asteroid
  );


  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="row">
        <div className="col-md-auto">
          <div className="row">
          </div>
          <div className="row">
            <AsteroidDetails
              name={this.state.astro_list_compiled[0].name}
              distance={
                this.state.astro_list_compiled[0].close_approach_data[0]
                  .miss_distance.miles + " miles"
              }
              description={this.state.astros[0]}
              hazard={this.state.hazard}
            />
          </div>
          <div className="row">
            <div className="col-md-auto">
              <AsteroidCard
                name={this.state.astro_list_compiled[1].name}
                distance={
                  this.state.astro_list_compiled[1].close_approach_data[0]
                    .miss_distance.miles + " miles"
                }
                orbiting={
                  this.state.astro_list_compiled[1].close_approach_data[0]
                    .orbiting_body
                }
              />
            </div>
            <div className="col-md-auto">
              <AsteroidCard
                name={this.state.astro_list_compiled[2].name}
                distance={
                  this.state.astro_list_compiled[2].close_approach_data[0]
                    .miss_distance.miles + " miles"
                }
                orbiting={
                  this.state.astro_list_compiled[2].close_approach_data[0]
                    .orbiting_body
                }
              />
            </div>
          </div>
        </div>
        <div className="col-sm">
          <Image />
        </div>
      </div>
    </div>
  );

  
}

export default fecthAsteroid;
  */
