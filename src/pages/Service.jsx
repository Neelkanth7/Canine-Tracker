import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Secheader from "./common/Secondaryheader";
import Data from "../data/Servicesdata";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const columns = ["Temperature", "Rain", "Weather Code", "Wind Speed"];
const hoursOfDay = Array.from({ length: 24 }, (_, i) => i);

const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog and depositing rime fog",
  48: "Fog and depositing rime fog",
  51: "Drizzle: Light intensity",
  53: "Drizzle: Moderate intensity",
  55: "Drizzle: Dense intensity",
  56: "Freezing Drizzle: Light intensity",
  57: "Freezing Drizzle: Dense intensity",
  61: "Rain: Slight intensity",
  63: "Rain: Moderate intensity",
  65: "Rain: Heavy intensity",
  66: "Freezing Rain: Light intensity",
  67: "Freezing Rain: Heavy intensity",
  71: "Snow fall: Slight intensity",
  73: "Snow fall: Moderate intensity",
  75: "Snow fall: Heavy intensity",
  77: "Snow grains",
  80: "Rain showers: Slight intensity",
  81: "Rain showers: Moderate intensity",
  82: "Rain showers: Violent intensity",
  85: "Snow showers: Slight intensity",
  86: "Snow showers: Heavy intensity",
  95: "Thunderstorm: Slight or moderate intensity",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

const corsProxy = "https://cors-anywhere.herokuapp.com/";


function sendPostRequest(result) {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://maker.ifttt.com/trigger/alert/with/key/jYQPvCu0FhLHWWubV9HtYXC26cpOPTzypnDvzurjZNl",
    {
      method: "POST",
      mode: 'cors',
      headers: {

    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
 
      },
      body: JSON.stringify({ value1: result }),
    }
  )
	.then(response => response.json())
    .then((responseJson) => {
		console.log(responseJson)
      // handle response
    })
    .catch((error) => {
      // handle error
    });
}

function getWeatherConditions(data) {
	const weatherCodes = {
	  0: "Clear sky",
	  1: "Mainly clear",
	  2: "Partly cloudy",
	  3: "Overcast"
	};
  
	const weatherConditions = [];
	let currentWeather = null;
	let start = null;
	
	for (let i = 0; i < data.time.length; i++) {
	  const weatherCode = data.weathercode[i];
	  const time = new Date(data.time[i]).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
	  
	  if (weatherCode !== currentWeather) {
		if (currentWeather !== null) {
		  const end = new Date(data.time[i-1]).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
		  weatherConditions.push({ start, end, condition: weatherCodes[currentWeather] });
		}
		currentWeather = weatherCode;
		start = time;
	  }
	}
	
	if (currentWeather !== null) {
	  const end = new Date(data.time[data.time.length-1]).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
	  weatherConditions.push({ start, end, condition: weatherCodes[currentWeather] });
	}
	
	let result = '';
  
  for (const { start, end, condition } of weatherConditions) {
    result += `${start} - ${end} -> ${condition}\n`;
  }
  
  sendPostRequest(result)
  }

  function checkWeather(data) {
   
    const latestTemp = data.temperature_2m[data.temperature_2m.length - 1];
    const latestWeatherCode = data.weathercode[data.weathercode.length - 1];

    const weatherCodesToWatch = [51, 53, 55, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99];
    const isWeatherCodeToWatch = weatherCodesToWatch.includes(latestWeatherCode);

    // if the temperature is below 10 degrees and the weather code is in the list of codes to watch, send an alert
    if (latestTemp < 10 && isWeatherCodeToWatch) {
        sendPostRequest("The temperature is below 10 degrees and there is a weather code to watch. Please be careful.")
    }

    // set the timeout to call the function again in 30 minutes
    setTimeout(checkWeather, 30 * 60 * 1000);
}

// call the function to start checking the weather


  
  

// const Scards = (props) => {
//   return (
//     <div className="col-md-4 col-lg-4 mb-3 text-center">
//       <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded">
//         <img
//           src={props.scardimage}
//           className="img-fluid mb-2"
//           alt="cards"
//           width="20%"
//         />
//         <p className="my-2">{props.scardtitle}</p>
//         <p className="text-muted text-left text-xl-center text-lg-center">
//           {props.scarddesc}
//         </p>
//       </div>
//     </div>
//   );
// };

const Service = () => {
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    const fetchData = async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=35.77&longitude=-78.69&hourly=temperature_2m,rain,weathercode,windspeed_10m&current_weather=true&forecast_days=1&start_date=${currentDate}&end_date=${currentDate}&timezone=America%2FNew_York`
      );
      const data = await response.json();
      setApiResponse(data.hourly);
    };

    fetchData();
  }, []);

  console.log("hey", apiResponse);
  apiResponse && getWeatherConditions(apiResponse)
  apiResponse && checkWeather(apiResponse);

  return (
    <>
      <Secheader
        sectitle="Weather Status"
        secdesc="Check if the weather is right to have fun today!"
      />

      <section>
        <div className="container mx-auto py-5">
          <div className="mb-5 text-center">
            <p className="display-6 mb-1">Weather Status for Today!</p>
          </div>
          <div className="row d-flex items-align-center justify-content-evenly">
            

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  {columns.map((column) => (
                    <TableCell key={column}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {hoursOfDay.map((hour) => (
                  <TableRow key={hour}>
                    <TableCell>{hour}:00</TableCell>
                    {columns.map((column) => {
                      if (column === "Temperature") {
                        return (
                          <TableCell key={`${column}-${hour}`}>
                            {apiResponse.temperature_2m &&
                              apiResponse.temperature_2m[hour]}
                          </TableCell>
                        );
                      } else if (column === "Rain") {
                        return (
                          <TableCell key={`${column}-${hour}`}>
                            {apiResponse.rain && `${apiResponse.rain[hour]} mm`}
                          </TableCell>
                        );
                      } else if (column === "Weather Code") {
                        return (
                          <TableCell key={`${column}-${hour}`}>
                            {apiResponse.weathercode &&
                              weatherCodes[apiResponse.weathercode[hour]]}
                          </TableCell>
                        );
                      } else if (column === "Wind Speed") {
                        return (
                          <TableCell key={`${column}-${hour}`}>
                            {apiResponse.windspeed_10m &&
                              apiResponse.windspeed_10m[hour]}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={`${column}-${hour}`}></TableCell>
                        );
                      }
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5 text-center">
          <p className="display-6">Not quite sure yet ?</p>
          <p className="text-muted">
            Why not visit our{" "}
            <NavLink className="text-decoration-none" to="/contact">
              contact page
            </NavLink>
            , we would love to chat with you!
          </p>
        </div>
      </section>
    </>
  );
};

export default Service;
