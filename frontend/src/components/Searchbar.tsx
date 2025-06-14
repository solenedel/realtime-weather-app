import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherDataForDisplay {
  city: string;
  humidity: string;
  temperature: string;
  weather_code: string;
  wind: string;
  time: string;
}

interface SearchbarProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherDataForDisplay>>;
}

const Searchbar = ({ setWeatherData }: SearchbarProps) => {
  const [city, setCity] = useState('');

  // reset city state when component mounts
  useEffect(() => {
    setCity('');
  }, []);

  // handle search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // call weather api to get weather data
  const confirmCitySearch = async () => {
    console.log('city ====>', city);
    // call the api to get the weather data

    const response = await axios.get(
      `http://localhost:3000/api/weather/${city}`
    );
    console.log('data ====>', response.data);

    // if success, clear city state and show weather display
    if (response.status === 200) {
      setWeatherData(response.data);
      setCity('');
    }
  };

  return (
    <div className="">
      <input
        type="text"
        value={city}
        onChange={handleSearchInputChange}
        placeholder="Search for a city"
      />
      <button onClick={confirmCitySearch}>Search</button>
    </div>
  );
};

export default Searchbar;
