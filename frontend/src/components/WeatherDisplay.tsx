import type { DisplayedWeather } from '../types/DisplayedWeather';

function WeatherDisplay({ WeatherData }: { WeatherData: DisplayedWeather }) {
  return (
    <section>
      <h2>Weather in {WeatherData.city}</h2>

      <p>Temperature: {WeatherData.temperature}</p>
      <p>Humidity: {WeatherData.humidity}</p>
      <p>Weather: {WeatherData.weather}</p>
    </section>
  );
}

export default WeatherDisplay;
