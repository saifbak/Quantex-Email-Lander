import { useRef, useState } from "react";
import CompanyInfo from "./CompanyInfo";
import { Button } from '@/components/ui/button';
import { RotateCcw, PlayCircle } from 'lucide-react';
import ReactPlayer from "react-player";

const Hero = () => {
  const playerRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handlePlay = () => {
    setVideoStarted(true);
    setVideoEnded(false);
  };

  const handleReplay = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
    setVideoEnded(false);
    setVideoStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative ">
      <div className="flex items-center space-x-2 mb-20 md:mb-5">
        <img
          src="image/logo.png"
          alt="Quantex Logo"
          className="h-20 w-[270px] object-contain"
        />
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-4xl mb-8">
          <div className="p-1 bg-gradient-to-r from-purple-500 via-blue-400 to-yellow-400 rounded-xl md:rounded-3xl">
            <div className="bg-slate-900 rounded-xl md:rounded-3xl overflow-hidden relative">
              <ReactPlayer
                ref={playerRef}
                url="/videos/video4.mp4"
                width="100%"
                height="100%"
                playing={videoStarted && !videoEnded}
                controls={false}
                playsinline
                onEnded={() => setVideoEnded(true)}
                style={{ aspectRatio: "16/9" }}
              />

              {/* Play button overlay for all devices, only before video starts */}
              {!videoStarted && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 cursor-pointer">
                  <button
                    onClick={handlePlay}
                    className="flex flex-col items-center"
                  >
                    <PlayCircle className="w-20 h-20 text-white drop-shadow-lg" />
                    <span className="mt-2 text-white text-lg font-medium">Play Video</span>
                  </button>
                </div>
              )}

              {/* Replay button */}
              {videoEnded && videoStarted && (
                <div className="absolute inset-0 z-30 flex items-center justify-center">
                  <Button
                    onClick={handleReplay}
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold"
                  >
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Replay
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <CompanyInfo />
      </div>
    </div>
  );
};

export default Hero;
