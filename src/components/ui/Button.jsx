import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'font-sora font-normal rounded-[15px] sm:rounded-[22px] lg:rounded-[30px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-global-text4';
  
  const variants = {
    primary: 'bg-button-2 text-button-1 hover:bg-opacity-90 disabled:bg-gray-400',
    secondary: 'bg-global-3 text-global-text4 hover:bg-global-4 disabled:bg-gray-600',
    outline: 'border border-global-4 text-global-text4 hover:bg-global-3 disabled:border-gray-600 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base',
    medium: 'px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base lg:px-[24px] lg:py-[18px] lg:text-[18px] lg:leading-[23px]',
    large: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants?.[variant]} 
    ${sizes?.[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'}
  `?.trim()?.replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes?.node,
  onClick: PropTypes?.func,
  variant: PropTypes?.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes?.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes?.bool,
  type: PropTypes?.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes?.bool,
};

export default Button;