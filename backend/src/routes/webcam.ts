import { Router } from 'express';
import { getWebcam } from '../controllers/webcamController';

const router = Router();

console.log('=======Registering webcam routes...');

// GET WEATHER WEBCAM ------------------------------------------------------------

router.get(
  '/webcam/id/:webcamId',
  (req, res, next) => {
    console.log('webcam route hit');
    next();
  },
  getWebcam
);

console.log('=======Registered webcam route');

// -----------------------------------------------------------------------------

export default router;
