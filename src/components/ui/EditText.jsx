import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  rightImage = null,
  leftImage = null,
  fullWidth = true,
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e?.target?.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'font-sora font-normal text-sm sm:text-base lg:text-[18px] lg:leading-[23px] text-global-text4 bg-transparent border border-global-4 rounded-[21px] sm:rounded-[32px] lg:rounded-[42px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-global-text4 focus:border-transparent';
  
  const paddingClasses = rightImage 
    ? 'pl-4 sm:pl-6 lg:pl-[36px] pr-12 sm:pr-16 lg:pr-[64px] py-3 sm:py-4 lg:py-[28px]'
    : leftImage 
    ? 'pl-12 sm:pl-14 lg:pl-[58px] pr-4 sm:pr-6 lg:pr-[12px] py-3 sm:py-4 lg:py-[18px]'
    : 'px-4 sm:px-6 lg:px-[36px] py-3 sm:py-4 lg:py-[28px]';

  const inputClasses = `
    ${baseClasses} 
    ${paddingClasses}
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-text'}
  `?.trim()?.replace(/\s+/g, ' ');

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
      {leftImage && (
        <div className="absolute left-3 sm:left-4 lg:left-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none">
          <img 
            src={leftImage?.src} 
            alt="Left icon"
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px]"
          />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {rightImage && (
        <div className="absolute right-3 sm:right-4 lg:right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none">
          <img 
            src={rightImage?.src} 
            alt="Right icon"
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[28px] lg:h-[28px]"
          />
        </div>
      )}
    </div>
  );
};

EditText.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  type: PropTypes?.string,
  disabled: PropTypes?.bool,
  rightImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number,
    height: PropTypes?.number,
  }),
  leftImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number,
    height: PropTypes?.number,
  }),
  fullWidth: PropTypes?.bool,
};

export default EditText;