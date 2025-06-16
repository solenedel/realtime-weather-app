import { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // change video speed
  const setPlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  // capture the current video frame on the canvas
  const captureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      // match canvas size to video size
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current frame from the video onto the canvas
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }

      // blocked by CORS for google storage video
      // You can get the image as a data URL:
      // const imageDataUrl = canvas.toDataURL('image/png');
      // console.log('imageDataUrl', imageDataUrl);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-xl">
        <button onClick={() => setPlaybackRate(0.5)}>Slow down</button>
        <button onClick={() => setPlaybackRate(2)}>Speed up</button>
        <button onClick={() => setPlaybackRate(1)}>Normal speed</button>
      </div>
      <video
        ref={videoRef}
        autoPlay
        loop
        className="rounded-lg shadow-lg w-full"
        width={640}
        height={360}
        controls>
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={captureFrame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Capture Frame
      </button>
      <canvas
        ref={canvasRef}
        style={{ marginTop: 16, border: '1px solid #ccc', maxWidth: '100%' }}
      />
    </div>
  );
}

export default VideoPlayer;
