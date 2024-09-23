import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  const toggleDropdown = (item) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Mobile Menu Button */}
        <button className="lg:hidden p-0" onClick={toggleSidebar}>
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {/* Logo for Desktop */}
        <img src="/assets/Logo.svg" alt="Logo" className="hidden lg:h-8 lg:block" />
        {/* Logo for Mobile */}
        <img src="/assets/logo-half.svg" alt="Logo" className="lg:hidden h-10" />

        {/* Normal Navigation List */}
        <ul className="hidden lg:flex space-x-8 items-center justify-center flex-1">
          {['Catalog', 'How it Works', 'Pricing', 'Blog', 'Services', 'Use Cases', 'Need Help?'].map((item) => (
            <li key={item} className="relative">
              <button 
                onClick={() => toggleDropdown(item)} 
                className="flex items-center hover:text-green-500"
              >
                {item}
                {['How it Works', 'Services', 'Use Cases', 'Need Help?'].includes(item) && (
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${dropdownOpen === item ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {dropdownOpen === item && item === 'How it Works' && (
                <ul className="absolute left-0 bg-white shadow-md py-2 w-48 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">How Printify Works</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Print On Demand</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Printify Quality Promise</li>
                  <li className="px-4 py-2 hover:bg-gray-100">What to Sell?</li>
                </ul>
              )}
              {dropdownOpen === item && item === 'Services' && (
                <ul className="absolute left-0 bg-white shadow-md py-2 w-48 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">Printify Studio</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Printify Express Delivery</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Transfer Products</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Order In Bulk</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Experts Program</li>
                </ul>
              )}
              {dropdownOpen === item && item === 'Use Cases' && (
                <ul className="absolute left-0 bg-white shadow-md py-2 w-48 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">Merch for Fans</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Merch for eCommerce</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Merch for Enterprises</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Grow Your Store</li>
                </ul>
              )}
              {dropdownOpen === item && item === 'Need Help?' && (
                <ul className="absolute left-0 bg-white shadow-md py-2 w-48 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">Help Center</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Contacts</li>
                  <li className="px-4 py-2 hover:bg-gray-100">My Requests</li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Log In and Sign Up Buttons */}
        <div className="lg:flex items-center space-x-4 ml-auto">
          <button className="border px-4 py-2 rounded-lg text-black hover:bg-gray-100">Log In</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Sign Up</button>
        </div>

        {/* Sidebar Menu for Mobile */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed left-0 top-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button className="text-green-500" onClick={toggleSidebar}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col p-4 space-y-2">
              {['Catalog', 'How it Works', 'Pricing', 'Blog', 'Services', 'Use Cases', 'Need Help?'].map((item) => (
                <li key={item} className="relative">
                  <button 
                    onClick={() => toggleDropdown(item)} 
                    className="flex justify-between items-center w-full font-bold text-left hover:text-green-500"
                  >
                    {item}
                    {['How it Works', 'Services', 'Use Cases', 'Need Help?'].includes(item) && (
                      <svg
                        className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${dropdownOpen === item ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {dropdownOpen === item && item === 'How it Works' && (
                    <ul className="bg-white shadow-md py-2 w-full text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100">How Printify Works</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Print On Demand</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Printify Quality Promise</li>
                      <li className="px-4 py-2 hover:bg-gray-100">What to Sell?</li>
                    </ul>
                  )}
                  {dropdownOpen === item && item === 'Services' && (
                    <ul className="bg-white shadow-md py-2 w-full text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100">Printify Studio</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Printify Express Delivery</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Transfer Products</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Order In Bulk</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Experts Program</li>
                    </ul>
                  )}
                  {dropdownOpen === item && item === 'Use Cases' && (
                    <ul className="bg-white shadow-md py-2 w-full text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100">Merch for Fans</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Merch for eCommerce</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Merch for Enterprises</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Grow Your Store</li>
                    </ul>
                  )}
                  {dropdownOpen === item && item === 'Need Help?' && (
                    <ul className="bg-white shadow-md py-2 w-full text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100">Help Center</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Contacts</li>
                      <li className="px-4 py-2 hover:bg-gray-100">My Requests</li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
