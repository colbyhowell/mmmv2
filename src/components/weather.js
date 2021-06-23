import React, { useState } from "react";
import axios from "axios";
import Mean from "../hooks/mean"
import Median from "../hooks/median"
import Mode from "../hooks/mode"

const Weather = () => {
  const [weatherData, setWeatherData] = useState()
  const [zip, setZip] = useState()
  const [unit, setUnit] = useState("Farenheit")

  const request = {
    params: {
      zip: zip,
      unit: unit
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .get(`https://custome-mmm-weather-backend.herokuapp.com/zip`, request)
      .then((res) => setWeatherData(res))
      .catch((err) => console.log(err.response));
  }

  function handleChange(e) {
    setZip(e.target.value);
  }

  function handleToggle(e) {
    e.preventDefault()
    if (unit === 'Farenheit') {
      setUnit('Celcius')
      setWeatherData(null)
    } else {
      setUnit('Farenheit')
      setWeatherData(null)
    }
  }

  if (!weatherData) {
    return (
      <div>
        <div className="zipForm">
          <form onSubmit={handleSubmit}>
            <label>
              Enter Zip Code:&nbsp;
              <input type="integer" name="zip" onChange={handleChange} required />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div className="tempFormat">
            <button className="tempButton" defaultValue="Farenheit" onClick={handleToggle}>
              {unit}
            </button>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    );
  } else
return (
  <>
    <div>
      <div className="zipForm">
        <form onSubmit={handleSubmit}>
          <label>
            Enter Zip Code:&nbsp;
            <input type="integer" name="zip" onChange={handleChange} required />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="tempFormat">
          <button className="tempButton" defaultValue="Farenheit" onClick={handleToggle}>
            {unit}
          </button>
        </div>
      </div>
    </div>
    <div className="weather-data-row">
      <div className="weather-data">
        {weatherData.data.city} Temperature Mean Data
        <br />
        <Mean weatherData={weatherData} /> °{unit.charAt(0)}
      </div>
      {<div className="weather-data">
        {weatherData.data.city} Temperature Median Data
        <br />
        <Median weatherData={weatherData} /> °{unit.charAt(0)}
      </div>}
      <div className="weather-data">
        {weatherData.data.city} Temperature Mode Data
        <br />
        <Mode weatherData={weatherData} /> °{unit.charAt(0)}
      </div>
    </div>
  </>
);
};

export default Weather;
