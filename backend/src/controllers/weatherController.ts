// controllers/weatherController.ts
import { Request, Response } from 'express';
import { RequestHandler } from 'express';
import axios from 'axios';
import { RawWeatherData } from '../models/Weather';
import { weatherCodes } from '../utils/weatherCodes';

//RequestHandler is a TypeScript type from Express that provides proper type definitions for Express route handlers. Here's what it does:
// It ensures your route handler function has the correct parameter types:
// req: The request object (with proper typing for params, query, body, etc.)
// res: The response object
// next: The next middleware function (optional)
// It enforces the correct return type:
// Either void or Promise<void>
// This is why we had to fix our error response to not return the response object

// -------------- FUNCTIONS -------------------------------------------------------------------

// Get coordinates from city name
const getCoordinates = async (city: string) => {
  // Call OpenMeteo's Geocoding API
  const response = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  const { latitude, longitude } = response.data.results[0];
  console.log('COORDINATES', latitude, longitude);
  return { latitude, longitude };
  // Return latitude and longitude
};

// Get weather data from coordinates
const getWeatherData = async (latitude: number, longitude: number) => {
  // Call OpenMeteo's Weather API
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`
  );
  const weatherData = response.data;
  console.log('WEATHER DATA 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥', weatherData);
  return weatherData;
};

// Process the weather data for front end
const processWeatherData = (weatherData: RawWeatherData, city: string) => {
  const { current } = weatherData;
  const { temperature_2m, relative_humidity_2m, weather_code } = current;

  const { current_units } = weatherData;
  const { temperature_2m: tempUnit, relative_humidity_2m: rhUnit } =
    current_units;

  // get weather from weather code
  const weather = weatherCodes[weather_code];

  return {
    city: city,
    values: {
      temperature: temperature_2m,
      humidity: relative_humidity_2m,
      weather: weather,
    },
    units: {
      temperature: tempUnit,
      humidity: rhUnit,
    },
  };
};

// -------------- CONTROLLER FUNCTIONS -------------------------------------------------------------------

//  Main controller function that combines other functions
const getWeather: RequestHandler = async (req, res) => {
  try {
    const city = req.params.city;

    if (!city) {
      res.status(400).json({ error: 'City parameter is required' });
      return;
    }

    // 2. Get coordinates
    const coordinates = await getCoordinates(city);
    console.log(coordinates);

    // 3. Get weather data
    const weatherData = await getWeatherData(
      coordinates.latitude,
      coordinates.longitude
    );

    // 4. process the data for front end display
    const processedData = processWeatherData(weatherData, city);
    console.log('PROCESSED WEATHER DATA🔥🔥🔥🔥🔥🔥🔥', processedData);

    // 5. Send response
    res.json(processedData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

export { getWeather };
