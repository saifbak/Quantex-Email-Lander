import { useEffect, useRef, useState } from "react";
import CompanyInfo from "./CompanyInfo";
import { Button } from '@/components/ui/button';
import { RotateCcw, PlayCircle } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  // Listen for video end event
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => setVideoEnded(true);
    video.addEventListener('ended', onEnded);
    return () => video.removeEventListener('ended', onEnded);
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play()
      .then(() => {
        setVideoStarted(true);
        setVideoEnded(false);
      })
      .catch((err) => console.error('Manual play failed:', err));
  };

  // Replay button handler
  const handleRepeat = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setVideoEnded(false);
    video.play()
      .catch((err) => console.error('Replay failed:', err));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative ">
      <div className="flex items-center space-x-2 mb-20 md:mb-10">
        <img
          src="image/logo.png"
          alt="Quantex Logo"
          className="h-20 w-[270px] object-contain"
        />
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-5xl mb-8">
          <div className="p-1 bg-gradient-to-r from-purple-500 via-blue-400 to-yellow-400 rounded-xl md:rounded-3xl">
            <div className="bg-slate-900 rounded-xl md:rounded-3xl overflow-hidden relative">
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                playsInline
                preload="auto"
              >
                <source src="videos/video4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!videoStarted && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 cursor-pointer">
                  <button
                    onClick={handlePlay}
                    className="flex flex-col items-center"
                  >
                    <PlayCircle className="w-10 md:w-20 h-10 md:h-20 text-white drop-shadow-lg" />
                    <span className="mt-2 text-white text-sm md:text-lg font-medium">Play Video</span>
                  </button>
                </div>
              )}

              {/* Replay button (after video ends, for all devices) */}
              {videoEnded && videoStarted && (
                <div className="absolute inset-0 z-30 flex items-center justify-center">
                  <Button
                    onClick={handleRepeat}
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
