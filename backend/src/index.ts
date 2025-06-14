// this file is where we set up middleware and config for all the backend routes
// middleware is software that sits between the operating system and the application
// it is used to:
// 1. handle requests and responses
// 2. handle errors
// 3. handle authentication
// 4. handle logging
// 5. handle caching
// 6. handle compression

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weather';

// load environment variables
dotenv.config();

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Add request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Add weather routes
app.use('/api', weatherRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Weather API is running' });
});

// define port & Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
