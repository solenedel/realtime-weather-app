import { Request, Response } from 'express';
import { RequestHandler } from 'express';
import axios from 'axios';

// -------------- FUNCTIONS -------------------------------------------------------------------
const getWebcamData = async (req: Request, res: Response) => {
  const apiKey = process.env.WINDY_WEBCAM_API_KEY;

  const windyWebcamUrl = `https://webcams.windy.com/api/v3/webcams?country=FR`;

  try {
    const webcamResponse = await axios.get(windyWebcamUrl, {
      headers: {
        'x-windy-api-key': apiKey as string,
      },
    });

    res.json(webcamResponse.data);
  } catch (error) {
    console.error('Error fetching webcam data:', error);
    res.status(500).json({ error: 'Failed to fetch webcam data' });
  }
};

// --------- main controller function ---------

export const getWebcam: RequestHandler = async (req, res) => {
  // to do
  const webcamData = await getWebcamData(req, res);
  res.json(webcamData);
};
