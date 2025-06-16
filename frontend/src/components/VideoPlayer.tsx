import { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col items-center p-4">
      <h1>Video Player</h1>
      <video
        ref={videoRef}
        className="rounded-lg max-w-xl shadow-lg w-full"
        controls>
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
