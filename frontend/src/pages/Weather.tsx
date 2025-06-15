import Searchbar from '../components/Searchbar';
import WeatherDisplay from '../components/WeatherDisplay';
import { useState } from 'react';
import type { DisplayedWeather } from '../types/DisplayedWeather';

// TO DOS ------------------------------------------------------------
// implement react context and redux state management
// video implementation
// cors, security improvements etc
// review use memo and useeffect cleanup
// review hooks
// caching (not local storage tho)

const Weather = () => {
  const [weatherData, setWeatherData] = useState<DisplayedWeather>({
    city: '',
    humidity: '',
    temperature: '',
    weather: '',
  });

  return (
    <div>
      <h1>Weather page</h1>
      <p>this is the weather page</p>
      <Searchbar setWeatherData={setWeatherData} />
      {weatherData.city ? <WeatherDisplay WeatherData={weatherData} /> : null}
    </div>
  );
};

export default Weather;
