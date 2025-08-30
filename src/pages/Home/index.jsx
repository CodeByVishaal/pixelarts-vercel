import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import SearchView from '../../components/ui/SearchView';

const HomePage = () => {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="min-h-screen bg-global-1 flex flex-col">
      {/* Header with proper spacing */}
      <Header />
      
      {/* Main Content with generous spacing */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-16 sm:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1596px] mx-auto">
            <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
              
              {/* Main Heading */}
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sora font-bold leading-tight">
                  <span className="text-global-text4">Digital</span><br/>
                  <span className="text-global-text4">Solutions</span><br/>
                  <span className="text-global-text3">That Drive</span><br/>
                  <span className="text-accent-1">Success</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl font-sora font-normal leading-relaxed text-global-text2 max-w-4xl mx-auto mt-8 lg:mt-12">
                  Empowering businesses with innovative digital solutions that transform ideas into reality
                </p>
              </div>

              {/* Search Component */}
              {/* <div className="flex justify-center mt-12 lg:mt-16">
                <SearchView 
                  placeholder="Search for services, projects, or solutions..."
                  onSearch={handleSearch}
                  fullWidth={false}
                />
              </div> */}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center mt-12 lg:mt-16">
                <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-accent-1 hover:bg-accent-3 text-global-text4 font-sora font-semibold text-base sm:text-lg lg:text-xl rounded-2xl transition-all duration-300 hover-lift shadow-purple hover:shadow-red">
                  Get Started
                </button>
                <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 border-2 border-accent-2 hover:bg-accent-2 text-accent-2 hover:text-global-text4 font-sora font-semibold text-base sm:text-lg lg:text-xl rounded-2xl transition-all duration-300 hover-lift">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 sm:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 xl:px-16 bg-global-2">
          <div className="max-w-[1596px] mx-auto">
            <div className="text-center space-y-12 sm:space-y-16 lg:space-y-20">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold leading-tight text-global-text4">
                Why Choose <span className="text-accent-1">DigitX</span>?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                {[
                  {
                    title: "Expert Team",
                    description: "Skilled professionals with years of experience in digital solutions",
                    icon: "👥"
                  },
                  {
                    title: "Cutting-Edge Technology",
                    description: "Latest tools and frameworks to build modern, scalable applications",
                    icon: "🚀"
                  },
                  {
                    title: "24/7 Support",
                    description: "Round-the-clock assistance to ensure your business never stops",
                    icon: "🛠️"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="group p-8 lg:p-10 bg-global-3 border border-global-2 rounded-3xl hover:border-accent-1 transition-all duration-300 hover-lift hover:shadow-purple"
                  >
                    <div className="text-4xl lg:text-5xl mb-6 lg:mb-8">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-sora font-semibold text-accent-1 mb-4 lg:mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="w-full py-16 sm:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1596px] mx-auto">
            <div className="text-center space-y-12 sm:space-y-16 lg:space-y-20">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold leading-tight text-global-text4">
                Our <span className="text-accent-2">Services</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                {[
                  {
                    title: "Web Development",
                    description: "Custom websites and web applications built with modern technologies"
                  },
                  {
                    title: "Mobile Apps",
                    description: "Native and cross-platform mobile applications for iOS and Android"
                  },
                  {
                    title: "Digital Marketing",
                    description: "Strategic marketing solutions to grow your online presence"
                  },
                  {
                    title: "UI/UX Design",
                    description: "Beautiful, user-friendly designs that convert visitors into customers"
                  }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="group p-8 lg:p-12 bg-global-2 border border-global-2 rounded-3xl hover:border-accent-2 transition-all duration-300 hover-lift hover:shadow-red text-left"
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-sora font-semibold text-accent-2 mb-4 lg:mb-6">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed text-global-text2">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-16 sm:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 xl:px-16 bg-global-2">
          <div className="max-w-[1596px] mx-auto">
            <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold leading-tight text-global-text4">
                Ready to <span className="gradient-primary bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl font-sora font-normal leading-relaxed text-global-text2 max-w-3xl mx-auto">
                Let's discuss how we can help you achieve your digital goals
              </p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center">
                <button className="px-10 sm:px-12 lg:px-16 py-5 sm:py-6 lg:py-7 gradient-primary text-global-text4 font-sora font-bold text-base sm:text-lg lg:text-xl rounded-2xl transition-all duration-300 hover-lift shadow-purple hover:shadow-red">
                  Start Your Project
                </button>
                <button className="px-10 sm:px-12 lg:px-16 py-5 sm:py-6 lg:py-7 border-2 border-global-text3 hover:bg-global-text3 text-global-text3 hover:text-global-1 font-sora font-semibold text-base sm:text-lg lg:text-xl rounded-2xl transition-all duration-300 hover-lift">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer with proper spacing */}
      <Footer />
    </div>
  );
};

export default HomePage;