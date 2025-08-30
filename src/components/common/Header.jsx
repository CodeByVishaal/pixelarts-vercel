import React, { useState } from 'react';

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    'Home', 'Services', 'Projects', 'About Us', 'Contact Us'
  ];

  const handleMenuClick = (item) => {
    setActiveMenuItem(item);
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-global-2 border-b border-global-2 shadow-purple">
      {/* Added generous padding and margin */}
      <div className="w-full max-w-[1596px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10">
        <div className="flex justify-between items-center w-full">
          {/* Logo with better spacing */}
          <div className="w-[45px] h-[35px] sm:w-[65px] sm:h-[50px] lg:w-[84px] lg:h-[64px] mr-8">
            <img 
              src="/images/img_logo.svg" 
              alt="DigitX Logo" 
              className="w-full h-full object-contain filter brightness-110"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-3 text-global-text4 rounded-lg hover:bg-global-3 transition-colors duration-200" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu with enhanced spacing */}
          <nav className={`
            ${menuOpen ? 'block' : 'hidden'} lg:block 
            absolute lg:relative 
            top-full lg:top-auto 
            left-0 lg:left-auto 
            w-full lg:w-auto 
            bg-global-2 lg:bg-transparent 
            z-50 lg:z-auto
            mt-2 lg:mt-0
            rounded-b-2xl lg:rounded-none
            shadow-dark lg:shadow-none
            border-t border-global-2 lg:border-none
          `}>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 xl:gap-8 p-6 lg:p-0">
              {menuItems?.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  onClick={() => handleMenuClick(item)}
                  className={`
                    text-sm sm:text-base lg:text-[16px] xl:text-[18px] 
                    font-sora font-medium leading-relaxed 
                    text-left lg:text-center
                    px-4 py-3 sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 xl:px-7 xl:py-5
                    rounded-xl sm:rounded-2xl lg:rounded-2xl 
                    transition-all duration-300 ease-in-out
                    hover:bg-global-3 hover:shadow-purple hover-lift
                    ${activeMenuItem === item 
                      ? 'bg-global-3 border border-global-3 text-accent-1 shadow-purple' 
                      : 'border border-transparent text-global-text4 hover:text-accent-1'
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;