import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-global-2 border-t border-global-2 shadow-purple">
      <div className="w-full max-w-[1596px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center w-full py-6 lg:py-8">
          {/* Logo (same size as header logo) */}
          <div className="w-[35px] h-[25px] sm:w-[35px] sm:h-[25px] lg:w-[135px] lg:h-[85px]">
            <img
              src="/images/pixelart-logo.png"
              alt="DigitX Logo"
              className="w-full h-full object-contain filter brightness-110"
            />
          </div>

          {/* Footer Links (compact, inline like nav) */}
          <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 text-sm sm:text-base lg:text-lg font-sora">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"]?.map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-global-text3 hover:text-accent-1 transition-all duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
