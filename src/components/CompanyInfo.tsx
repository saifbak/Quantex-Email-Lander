import React from "react";

const CompanyInfo = () => {
  return (
    <div className="flex flex-row items-center md:items-start justify-center gap-3 mt-20 md:mt-3 md:space-y-0 md:space-x-8 md:px-0 text-black">
      {/* Logo */}
      <img
        src="image/logo2.png"
        alt="Quantex Logo"
        className="w-40 sm:h-20 sm:w-[230px] object-contain"
      />

      {/* Vertical Divider */}
      <div className="w-[2px] h-[50px] sm:w-1 sm:h-24 bg-gradient-to-t from-blue-400 via-purple-500 to-yellow-400 rounded-full" />
      {/* Text Details */}
      <div className="text-left ">
        <h3 className="font-semibold text-[6px]  sm:text-xs">Quantex L.L.C.</h3>
        <div className="text-gray-600 space-y-0.5 text-[6px] sm:text-xs">
          <p>
            <span className="font-medium">Address:</span> Office M48-2,
            Art Tower,
          </p>
          <p>Al Raffa, Dubai, UAE</p>
          <p>
            <span className="font-medium">Email:</span> info@quantex-ai.com
          </p>
          <p>
            <span className="font-medium">Website:</span> www.quantex-ai.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
