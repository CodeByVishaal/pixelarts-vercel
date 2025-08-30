import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchView = ({ 
  placeholder = 'Search', 
  value = '', 
  onChange, 
  onSearch,
  disabled = false,
  leftImage = { src: "/images/img_search.svg", width: 24, height: 24 },
  fullWidth = false,
  ...props 
}) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e?.target?.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && onSearch) {
      onSearch(searchValue);
    }
  };

  const baseClasses = `
    font-sora font-normal 
    text-base sm:text-lg lg:text-xl 
    leading-relaxed 
    text-global-text3 
    bg-global-2 
    border-2 border-global-2 
    rounded-2xl sm:rounded-3xl lg:rounded-3xl 
    transition-all duration-300 ease-in-out
    focus:outline-none 
    focus:ring-2 focus:ring-accent-1 focus:ring-opacity-50
    focus:border-accent-1 
    focus:bg-global-3
    hover:border-global-3
    hover:shadow-purple
    placeholder-global-text1 
    placeholder-opacity-70
  `;
  
  const paddingClasses = 'pl-14 sm:pl-16 lg:pl-20 pr-6 sm:pr-8 lg:pr-10 py-4 sm:py-5 lg:py-6';

  const inputClasses = `
    ${baseClasses} 
    ${paddingClasses}
    ${fullWidth ? 'w-full' : 'w-full sm:w-80 lg:w-96'} 
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-text'}
  `?.trim()?.replace(/\s+/g, ' ');

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-full sm:w-80 lg:w-96'} component-spacing`}>
      {leftImage && (
        <div className="absolute left-5 sm:left-6 lg:left-7 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <img 
            src={leftImage?.src} 
            alt="Search icon"
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 opacity-70 filter brightness-110"
          />
        </div>
      )}
      <input
        type="search"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
    </div>
  );
};

SearchView.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  onSearch: PropTypes?.func,
  disabled: PropTypes?.bool,
  leftImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number,
    height: PropTypes?.number,
  }),
  fullWidth: PropTypes?.bool,
};

export default SearchView;