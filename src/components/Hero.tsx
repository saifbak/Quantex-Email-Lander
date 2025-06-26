
import CompanyInfo from "./CompanyInfo";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative bg-white">
      {/* Quantex Logo at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-black text-2xl font-bold tracking-wider">QUANTEX</span>
        </div>
      </div>

      {/* Main content container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Video container with gradient border */}
        <div className="relative w-full max-w-4xl mb-8">
          {/* Gradient border wrapper */}
          <div className="p-1 bg-gradient-to-r from-purple-500 via-blue-400 to-yellow-400 rounded-3xl">
            <div className="bg-slate-900 rounded-3xl overflow-hidden">
              <video
                className="w-full h-auto aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <CompanyInfo />
      </div>
    </div>
  );
};

export default Hero;
