import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [zip, setZip] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`https://custome-mmm-weather-backend.herokuapp.com/${zip}`)
      .then((res) => setWeatherData(res))
      .catch((err) => console.log(err.response));
  }

  function handleChange(e) {
    setZip(e.target.value);
  }

  if (!weatherData) {
    return (
      <div className="zipForm">
        <form onSubmit={handleSubmit}>
          <label>
            Enter Zip Code:&nbsp;
            <input type="integer" name="zip" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  } else
    return (
      <>
        <div className="weather-data-row">
          <div className="weather-data">
            {weatherData.data.city} Temperature Mean Data
            <br />
            {weatherData.data.mean}
          </div>
          <div className="weather-data">
            {weatherData.data.city} Temperature Median Data
            <br />
            {weatherData.data.median}
          </div>
          <div className="weather-data">
            {weatherData.data.city} Temperature Mode Data
            <br />
            {weatherData.data.mode}
          </div>
        </div>
      </>
    );
};

export default Weather;
