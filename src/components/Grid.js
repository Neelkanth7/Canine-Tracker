import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomBtn from "./CustomBtn";
import { useState, useEffect } from "react";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 5rem 0 5rem",
  },
  item: {
    paddingTop: "1rem",
  },
});

function Grid(props) {
  const { icon, title, btnTitle } = props;
  const classes = styles();
  const [apiResponse, setApiResponse] = useState("");

  const handleClick = async () => {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&hourly=rain&hourly=weathercode&hourly=visibility&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm&timeformat=iso8601&past_days=0&forecast_days=7&start_date=2023-04-09&end_date=2023-04-09&timezone=GMT"
    );
    const data = await response.json();
    setApiResponse(data);
    console.log(data);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>{icon}</div>
      <Typography className={classes.item} variant="h5">
        {title}
      </Typography>
      <div className={classes.item}>
        <button onClick={handleClick}>Show More</button>
      </div>
      {apiResponse && (
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <p>Latitude: {apiResponse.latitude}</p>
          <p>Timezone: {apiResponse.timezone}</p>
          <p>Temperature: {apiResponse.current_weather.temperature}</p>
          <p>Weather Code: {apiResponse.current_weather.weathercode}</p>
          <p>Wind Direction: {apiResponse.current_weather.winddirection}</p>
          <p>Wind Speed: {apiResponse.current_weather.windspeed}</p>
          {/* Display more data from the API response as needed */}
        </div>
      )}
    </div>
  );
}

export default Grid;
