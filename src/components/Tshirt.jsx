import React from 'react';

const Tshirt = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-gray-100 min-h-screen">
      {/* Left Section: Text and Buttons */}
      <div className="space-y-4 max-w-md">
        <h1 className="text-4xl font-bold text-gray-900">
          Create and sell <br /> custom products
        </h1>
        <ul className="space-y-2 text-gray-600">
          <li>✅ 100% Free to use</li>
          <li>✅ 900+ High-Quality Products</li>
          <li>✅ Largest global print network</li>
        </ul>
        <div className="flex space-x-4 mt-6">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition">
            Start for free
          </button>
          <button className="border border-gray-300 py-3 px-6 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition">
            <span>▶️</span>
            <span>How it works?</span>
          </button>
        </div>
        <p className="text-gray-500 mt-4">Trusted by over 8M sellers around the world</p>
      </div>

      {/* Right Section: T-shirt Image */}
      <div className="relative">
        <img
          src="tshirt.png"
          alt="T-shirt"
          className="w-64 h-64 object-cover"
        />
        {/* The woman pointing illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="woman-pointing.png"
            alt="Woman Pointing"
            className="w-48 h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
