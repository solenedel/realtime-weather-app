// 1. Import Router from express
import { Router } from 'express';

// 2. Import your controller function
import { getWeather } from '../controllers/weatherController';

// 3. Create router instance
const router = Router();

// Debug log to show route registration
console.log('Registering weather routes...');

// 4. Define the route
router.get('/weather/:city', getWeather);

// Debug log to show route is registered
console.log('Weather routes registered');

// 5. Export the router
export default router;
