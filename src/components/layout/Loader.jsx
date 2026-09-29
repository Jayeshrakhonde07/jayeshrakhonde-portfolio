import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-bg-page">
      <div className="flex flex-col items-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#00d4ff] mb-3">
          Jayesh Rakhonde
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-white mb-8">
          Welcome to My Portfolio
        </p>

        <div className="w-52 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full w-full bg-[#00d4ff] animate-loading" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
