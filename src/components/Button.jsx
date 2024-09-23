import React from 'react';

const Button = ({ classValue = '', hover, text, Icon, style = {} }) => {
  return (
    <button
      className={`flex items-center px-4 py-2 text-base font-medium rounded border-none cursor-pointer 
        ${classValue} 
        ${hover === 'green' ? 'hover:bg-green-600' : ''}
        ${hover === 'white' ? 'hover:text-green-600' : ''}
      `}
      style={style}
    >
      {Icon && <Icon className="mr-2" />} {/* If Icon is passed from parent then only show it */}
      {text}
    </button>
  );
};

export default Button;
