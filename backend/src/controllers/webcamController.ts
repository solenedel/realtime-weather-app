import { Request, Response } from 'express';
import { RequestHandler } from 'express';
import axios from 'axios';

// for now use hard coded webcam ID : 1179853135 (Sydney)
// const webcamId = '1179853135';

// -------------- FUNCTIONS -------------------------------------------------------------------

export const getWebcam: RequestHandler = async (req, res) => {
  const apiKey = process.env.WINDY_WEBCAM_API_KEY;
  const { webcamId } = req.params;

  const windyWebcamUrl = `https://webcams.windy.com/api/v3/webcams/${webcamId}`;

  try {
    const webcamResponse = await axios.get(windyWebcamUrl, {
      headers: {
        'x-windy-api-key': apiKey as string,
      },
      baseURL: undefined, // This disables any default baseURL for this request
    });

    console.log('Requesting:=============', windyWebcamUrl);
    res.json(webcamResponse.data);
  } catch (error: any) {
    console.error(
      'Error fetching webcam by ID:',
      error.response?.data || error.message
    );
    res.status(500).json({ error: 'Failed to fetch webcam data' });
  }
};
