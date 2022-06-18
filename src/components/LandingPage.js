import React, { useEffect, useState } from 'react';
import './custom.css';

const LandingPage = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchApi();
  }, [search]);
  
  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a64c6d4723b6813ebde00ac1ce6b35aa`;
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    setCity(data.main);
  };
  

  return (
    <>
      <h3 className="header">Today's Weather</h3>
      <div className="inputdata">
          <input
            type="search"
            placeholder="Enter city name"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      <div className="box">
        
        {!city ? (
          <p>City not Found </p>
        ) : (
          <div>
            <div className="info">
              <h3 className="location"> {search}</h3>
              <h1 className="temp">{city.temp}°C</h1>
              <h5 className="tempmin_max">
                min: {city.temp_max}°C | max: {city.temp_min}°C
              </h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;

