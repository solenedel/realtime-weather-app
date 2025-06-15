// define typescript types for weather data

// the model should represent the raw data structure returned by the API
// not the processed data structure for front end display

export interface RawWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: 'GMT';
  timezone_abbreviation: 'GMT';
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    weather_code: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    weather_code: number;
  };
}
