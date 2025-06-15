import { Router } from 'express';
import { getWebcam } from '../controllers/webcamController';

const router = Router();

// GET WEATHER WEBCAM ------------------------------------------------------------

router.get('/webcam/:city', getWebcam);

// ------------------------------------------------------------

export default router;
