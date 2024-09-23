import React from 'react';


const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="/assets/Logo.svg" alt="Logo" className="h-10 mb-4" />
      <div className="flex space-x-1">
        <div className="dot animate-dot"></div>
        <div className="dot animate-dot animation-delay-200"></div>
        <div className="dot animate-dot animation-delay-400"></div>
      </div>
    </div>
  );
};

export default Loading;
