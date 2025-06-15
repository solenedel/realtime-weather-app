// types used in the front end

export interface WeatherValues {
  temperature: number;
  humidity: number;
  weather: string;
}

export interface WeatherUnits {
  temperature: string;
  humidity: string;
}

export interface DisplayedWeather {
  city: string;
  values: WeatherValues;
  units: WeatherUnits;
}
