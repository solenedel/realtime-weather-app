function WeatherDisplay({
  WeatherData,
}: {
  WeatherData: WeatherDataForDisplay;
}) {
  return (
    <section>
      <h2>Weather Display</h2>
      {WeatherData.city}
    </section>
  );
}

export default WeatherDisplay;
