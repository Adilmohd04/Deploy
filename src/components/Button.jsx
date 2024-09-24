import React from 'react';

const Button = ({ classValue = '', hover, text, Icon, imgSrc, style = {} }) => {
  return (
    <button
      className={`flex items-center px-4 py-2 text-base font-medium rounded border-none cursor-pointer 
        ${classValue} 
        ${hover === 'green' ? 'hover:bg-green-600' : ''}
        ${hover === 'white' ? 'hover:text-green-600' : ''}
      `}
      style={style}
    >
      {imgSrc ? (
        <img src={imgSrc} alt="Button Icon" className="w-6 h-6 mr-2" />
      ) : Icon ? (
        <Icon className="mr-2 w-6 h-6" />
      ) : null}
      {text}
    </button>
  );
};

export default Button;
