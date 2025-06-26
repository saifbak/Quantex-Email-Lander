
const CompanyInfo = () => {
  return (
    <div className="flex items-start space-x-8 text-black">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
        <span className="text-3xl font-bold tracking-wider">QUANTEX</span>
      </div>

      {/* Company Details */}
      <div className="text-left space-y-1">
        <h3 className="font-semibold text-lg">Quantex L.L.C.</h3>
        <div className="text-gray-600 space-y-0.5">
          <p><span className="font-medium">Address:</span> Office M48-2, Art Tower,</p>
          <p className="ml-16">Al Raffa, Dubai, UAE</p>
          <p><span className="font-medium">Email:</span> info@quantex-ai.com</p>
          <p><span className="font-medium">Website:</span> www.quantex-ai.com</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
