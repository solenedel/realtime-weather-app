import type { DisplayedWeather } from '../types/DisplayedWeather';

function WeatherDisplay({ WeatherData }: { WeatherData: DisplayedWeather }) {
  const { values, units } = WeatherData;
  return (
    <section>
      <h2>Weather in {WeatherData.city}</h2>

      <p>
        Temperature: {values.temperature} {units.temperature}
      </p>
      <p>
        Humidity: {values.humidity} {units.humidity}
      </p>
      <p>Weather: {values.weather}</p>
    </section>
  );
}

export default WeatherDisplay;
