import Searchbar from '../components/Searchbar';
import WeatherDisplay from '../components/WeatherDisplay';
import { useState } from 'react';
import type { DisplayedWeather } from '../types/DisplayedWeather';
// import VideoPlayer from '../components/VideoPlayer';
import ThemeToggle from '../components/ThemeToggle';

// TO DOS ------------------------------------------------------------
// implement react context and redux state management
// video implementation
// cors, security improvements etc
// review use memo and useeffect cleanup
// review hooks
// caching (not local storage tho)
// update weather every hour (?)
// web sockets ???
// get units
// ------------------------------------------------------------

const Weather = () => {
  const [weatherData, setWeatherData] = useState<DisplayedWeather>({
    city: '',
    values: {
      temperature: 0,
      humidity: 0,
      weather: '',
    },
    units: {
      temperature: '',
      humidity: '',
    },
  });

  return (
    <div>
      {/* <VideoPlayer /> */}
      <ThemeToggle />
      <Searchbar setWeatherData={setWeatherData} />
      {weatherData.city ? <WeatherDisplay WeatherData={weatherData} /> : null}
    </div>
  );
};

export default Weather;
