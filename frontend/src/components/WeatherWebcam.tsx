// ssr or csr for realtime video streaming?
import { useRef, useEffect, useState } from 'react';

interface WeatherWebcamProps {
  city: string;
}

function WeatherWebcam({ city }: WeatherWebcamProps) {
  const [webcamUrl, setWebcamUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return <div></div>;
}

export default WeatherWebcam;
