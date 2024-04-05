 import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  
  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97c33390904adc2fcca867d28c79a5a3`);
      const temp = response.data.main.temp;
      const tc = temp-273.15
      setTemperature(tc.toFixed(2));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <center>
      <h1>Weather Report</h1>
      <div >
        <input  type="text" placeholder="Enter city"value={city} onChange={(e) => setCity(e.target.value)}
        /><br></br>
        <br></br>
        <button onClick={getWeather}>Get Weather</button>
        <h2>Temperature: {temperature} °C</h2>
      </div>
      </center>
    </div>

  );
};

export default Weather;