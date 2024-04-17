import React, { useState } from "react";
import './App.css';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  name: string;
}

const api = {
  key: "a67532da5c1f94cb987e3381ee461fad",
  base: "https://api.openweathermap.org/data/2.5/weather"
};

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [search, setSearch] = useState<string>("");

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSearch);
    } else {
      console.log("Geolocation not supported");
    }
  };

  const handleSearch = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`${api.base}?q=${search}&lat=${latitude}&lon=${longitude}&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then((data: WeatherData) => setWeather(data));
  };

  return (
    <div className="App">
      <section className="Sec">
        <input type="search" placeholder="Search City" onChange={(e) => setSearch(e.target.value)} />
        <br />
        <button onClick={handleClick}>Search</button>
        {weather && typeof weather.main !== "undefined" ? (
          <div className="Container">
            <p>Name: {weather.name}</p>
            <p>Temp: {weather.main.temp}</p>
            <p>Cloud/Rain: {weather.weather[0].main}</p>
            <p>Description: {weather.weather[0].description}</p>
          </div>
        ) : (
          <p>Not Found</p>
        )}
      </section>
    </div>
  );
};

export default App;
