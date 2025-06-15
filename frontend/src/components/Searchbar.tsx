import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { DisplayedWeather } from '../types/DisplayedWeather';

interface SearchbarProps {
  setWeatherData: React.Dispatch<React.SetStateAction<DisplayedWeather>>;
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
    const response = await axios.get(
      `http://localhost:3000/api/weather/${city}`
    );

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
