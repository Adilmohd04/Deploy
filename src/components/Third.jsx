import React from 'react';

const Third = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4"> {/* Wrapping div for centering and limiting width */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 py-16">
        {/* Feature 1: Higher Profits */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/Third/higher-profits.svg" alt="Higher Profits" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Higher Profits</h3>
          <p className="text-gray-600 mt-2">
            We offer some of the lowest prices in the industry because print providers continuously
            compete to win your business.
          </p>
        </div>

        {/* Feature 2: Robust Scaling */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/Third/robust-scaling.svg" alt="Robust Scaling" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Robust Scaling</h3>
          <p className="text-gray-600 mt-2">
            Easily handle peak holiday seasons, with our wide network of partners and automatic
            routing functionality.
          </p>
        </div>

        {/* Feature 3: Best Selection */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/Third/best-selection.svg" alt="Best Selection" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Best Selection</h3>
          <p className="text-gray-600 mt-2">
            With 900+ products and top-quality brands, you can choose the best products for your
            business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
