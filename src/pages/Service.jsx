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

const Scards = (props) => {
  return (
    <div className="col-md-4 col-lg-4 mb-3 text-center">
      <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded">
        <img
          src={props.scardimage}
          className="img-fluid mb-2"
          alt="cards"
          width="20%"
        />
        <p className="my-2">{props.scardtitle}</p>
        <p className="text-muted text-left text-xl-center text-lg-center">
          {props.scarddesc}
        </p>
      </div>
    </div>
  );
};

const Service = () => {
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
		"https://api.open-meteo.com/v1/forecast?latitude=35.77&longitude=-78.69&hourly=temperature_2m,rain,weathercode,windspeed_10m&current_weather=true&forecast_days=1&start_date=2023-04-15&end_date=2023-04-15&timezone=America%2FNew_York"
      );
      const data = await response.json();
      setApiResponse(data.hourly);
    };

    fetchData();
  }, []);

  

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
			  {console.log("hey", apiResponse.temperature_2m[hour])}
              </TableCell>
            );
          } else {
            return <TableCell key={`${column}-${hour}`}></TableCell>;
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
