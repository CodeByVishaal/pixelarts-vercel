import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-global-1 mt-16 lg:mt-24">
      {/* Added significant top margin and enhanced padding */}
      <div className="w-full max-w-[1596px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Section with Logo and Social Media */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 sm:py-16 lg:py-24 border-b border-global-2 gap-12 lg:gap-16">
          
          {/* Logo with enhanced spacing */}
          <div className="w-[45px] h-[35px] sm:w-[65px] sm:h-[50px] lg:w-[84px] lg:h-[64px]">
            <img 
              src="/images/img_logo.svg" 
              alt="DigitX Logo" 
              className="w-full h-full object-contain filter brightness-110"
            />
          </div>

          {/* Social Media Section with better spacing */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
            <p className="text-base sm:text-lg lg:text-xl font-sora font-medium leading-relaxed text-global-text3 mb-2 sm:mb-0">
              Follow Us On Social Media
            </p>
            <div className="flex gap-4 sm:gap-5 lg:gap-6">
              {[
                { src: "/images/img_linkedin_logo_2430.svg", alt: "LinkedIn" },
                { src: "/images/img_instagram.png", alt: "Instagram" },
                { src: "/images/img_twitter_logo_2429.svg", alt: "Twitter" }
              ]?.map((social, index) => (
                <div 
                  key={index}
                  className="group flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl lg:rounded-3xl border border-global-2 bg-global-2 hover:bg-global-3 hover:border-accent-1 transition-all duration-300 cursor-pointer hover-lift shadow-dark hover:shadow-purple"
                >
                  <img 
                    src={social?.src} 
                    alt={social?.alt}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Links with enhanced spacing */}
        <div className="py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-20">
            
            {/* Home Section */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-semibold leading-relaxed text-accent-1">
                Home
              </h3>
              <div className="flex flex-col gap-4 lg:gap-5">
                {['Benefits', 'Our Testimonials', 'Partners']?.map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-semibold leading-relaxed text-accent-1">
                Services
              </h3>
              <div className="flex flex-col gap-4 lg:gap-5">
                {['Web Design', 'Website Development', 'App Development', 'Digital Marketing']?.map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-semibold leading-relaxed text-accent-1">
                Projects
              </h3>
              <div className="flex flex-col gap-4 lg:gap-5">
                {['ABC Tech Solutions', 'GreenEarth Eco Store', 'HealthTech Innovations', 'GlobalTech Solutions', 'TechGuru Inc.']?.map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* About Us Section */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-semibold leading-relaxed text-accent-1">
                About Us
              </h3>
              <div className="flex flex-col gap-4 lg:gap-5">
                {['Our Team', 'Achievements', 'Awards']?.map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Careers & Blogs Section */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-10 lg:gap-12">
                
                {/* Careers */}
                <div className="flex flex-col gap-6 lg:gap-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-semibold leading-relaxed text-accent-1">
                    Careers
                  </h3>
                  <a 
                    href="#" 
                    className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-x-1"
                  >
                    Job Openings
                  </a>
                </div>

                {/* Blogs */}
                <div className="flex flex-col gap-6 lg:gap-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-semibold leading-relaxed text-accent-1">
                    Blogs
                  </h3>
                  <a 
                    href="#" 
                    className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-x-1"
                  >
                    Our Blogs
                  </a>
                </div>
              </div>

              {/* Additional Links with enhanced spacing */}
              <div className="flex flex-col gap-4 lg:gap-5 mt-6 lg:mt-8">
                {['Benefits & Perks', 'Employee Referral']?.map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with enhanced spacing */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 sm:py-10 lg:py-12 border-t border-global-2 gap-6 sm:gap-8">
          <p className="text-base sm:text-lg lg:text-xl font-sora font-light leading-relaxed text-global-text2">
            @2023 Digitax. All Rights Reserved.
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl font-sora font-light leading-relaxed text-global-text2 hidden sm:block lg:hidden xl:block">
            Version 1.0
          </p>

          <div className="flex flex-wrap gap-6 sm:gap-7 lg:gap-8 justify-center sm:justify-end">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy']?.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-base sm:text-lg lg:text-xl font-sora font-light leading-relaxed text-global-text2 hover:text-accent-1 transition-all duration-300 hover:translate-y-[-1px]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;