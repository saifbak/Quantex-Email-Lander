
const CompanyInfo = () => {
  return (
    <div className="flex items-start justify-center space-x-8 text-black">
      {/* Logo */}
      {/* <div className="flex items-center space-x-2">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
        <span className="text-3xl font-bold tracking-wider">QUANTEX</span>
      </div> */}
      <img
        src="image/logo2.png"
        alt="Quantex Logo"
        className="h-20 w-[230px] object-contain"
      />

      <div className="w-1 h-24 bg-gradient-to-t from-blue-400 via-purple-500 to-yellow-400 rounded-full flex items-center justify-center"></div>

      {/* Company Details */}
      <div className="text-left space-y-1">
        <h3 className="font-semibold text-xs">Quantex L.L.C.</h3>
        <div className="text-gray-600 space-y-0.5 text-xs">
          <p><span className="font-medium">Address:</span> Office M48-2, Art Tower,</p>
          <p className="">Al Raffa, Dubai, UAE</p>
          <p><span className="font-medium">Email:</span> info@quantex-ai.com</p>
          <p><span className="font-medium">Website:</span> www.quantex-ai.com</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
