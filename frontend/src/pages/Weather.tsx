import Searchbar from '../components/Searchbar';
import WeatherDisplay from '../components/WeatherDisplay';
import { useState } from 'react';

interface WeatherDataForDisplay {
  city: string;
  humidity: string;
  temperature: string;
  weather_code: string;
  wind: string;
  time: string;
}

// TO DOS
// implement react context and redux state management
// video implementation

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataForDisplay>({
    city: '',
    humidity: '',
    temperature: '',
    weather_code: '',
    wind: '',
    time: '',
  });

  return (
    <div>
      <h1>Weather page</h1>
      <p>this is the weather page</p>
      <Searchbar setWeatherData={setWeatherData} />
      <WeatherDisplay WeatherData={weatherData} />
    </div>
  );
};

export default Weather;
