
import { useEffect, useRef, useState } from "react";
import CompanyInfo from "./CompanyInfo";
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video
      .play()
      .then(() => {
        video.muted = false;
      })
      .catch((err) => console.error('Autoplay failed:', err));
    const onEnded = () => setVideoEnded(true);
    video.addEventListener('ended', onEnded);
    return () => void video.removeEventListener('ended', onEnded);
  }, []);

  const handleRepeat = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setVideoEnded(false);
    video
      .play()
      .then(() => {
        video.muted = false;
      })
      .catch((err) => console.error('Replay failed:', err));
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative ">
      <div className="flex items-center space-x-2 mb-5">
        <img
          src="image/logo.png"
          alt="Quantex Logo"
          className="h-20 w-[270px] object-contain"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-4xl mb-8">
          <div className="p-1 bg-gradient-to-r from-purple-500 via-blue-400 to-yellow-400 rounded-3xl">
            <div className="bg-slate-900 rounded-3xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                autoPlay
                playsInline
                preload="auto"
              >
                <source src="videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {videoEnded && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
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
