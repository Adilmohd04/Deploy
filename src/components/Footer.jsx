import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* First Line: Legal Links */}
        <div className="text-gray-600 space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Intellectual Property Policy
          </a>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Security
          </a>
        </div>

        {/* Second Line: Copyright */}
        <div className="text-gray-600 text-sm mt-2">
          © 2024 Printify, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
