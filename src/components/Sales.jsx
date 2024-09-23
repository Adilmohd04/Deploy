import React from 'react';

const Sales = () => {
  return (
    <div className="flex items-center justify-center h-80 bg-white">
      <div className="relative p-5 rounded-lg shadow-md bg-green-100 w-full max-w-3xl">
        {/* Image as background, positioned to the right */}
        <div 
          className="absolute inset-0 bg-cover bg-right rounded-lg" 
          style={{ 
            backgroundImage: "url('assets/sales/talk-to-sales.svg')", 
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat' 
          }} 
        />

        <div className="flex justify-between items-center relative z-10">
          <h1 className="text-3xl font-bold text-green-700 max-w-md">
            Are you a large business looking for custom solutions?
          </h1>
          <button className="bg-white text-green-600 px-6 py-3 rounded shadow">
            Talk to Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
