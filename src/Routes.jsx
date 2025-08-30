import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../src/components/LoadingAnimation';
import Header from './components/common/Header';

// Simulated Routes component (replace with your actual Routes)
const Routes = () => {
  return (
    <div className="min-h-screen bg-global-1 flex flex-col">
      {/* Header */}
      <Header />
      

      {/* Main Content */}
      <main className="flex-1 w-full">
        <section className="w-full py-16 sm:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1596px] mx-auto">
            <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sora font-bold leading-tight">
                  <span className="text-global-text4">Digital</span><br/>
                  <span className="gradient-primary bg-clip-text text-transparent">Solutions</span><br/>
                  <span className="text-global-text3">That Drive</span><br/>
                  <span className="text-accent-1">Success</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl font-sora font-normal leading-relaxed text-global-text2 max-w-4xl mx-auto mt-8 lg:mt-12">
                  Empowering businesses with innovative digital solutions that transform ideas into reality
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center mt-12 lg:mt-16">
                <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-accent-1 hover:bg-accent-3 text-global-text4 font-sora font-semibold text-base sm:text-lg lg:text-xl rounded-2xl transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-purple">
                  Get Started
                </button>
                <button className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 border-2 border-accent-2 hover:bg-accent-2 text-accent-2 hover:text-global-text4 font-sora font-semibold text-base sm:text-lg lg:text-xl rounded-2xl transition-all duration-300 hover:transform hover:scale-105">
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
                    className="group p-8 lg:p-10 bg-global-3 border border-global-2 rounded-3xl hover:border-accent-1 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-purple"
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
      </main>

      {/* Footer */}
      <footer className="w-full bg-global-1 mt-16 lg:mt-24">
        <div className="w-full max-w-[1596px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 sm:py-16 lg:py-24 border-b border-global-2 gap-12 lg:gap-16">
            <div className="w-[45px] h-[35px] sm:w-[65px] sm:h-[50px] lg:w-[84px] lg:h-[64px]">
              <div className="w-full h-full bg-global-text4 rounded-lg flex items-center justify-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  X
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
              <p className="text-base sm:text-lg lg:text-xl font-sora font-medium leading-relaxed text-global-text3">
                Follow Us On Social Media
              </p>
              <div className="flex gap-4 sm:gap-5 lg:gap-6">
                {['📘', '📷', '🐦'].map((icon, index) => (
                  <div 
                    key={index}
                    className="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl border border-global-2 bg-global-2 hover:bg-global-3 hover:border-accent-1 transition-all duration-300 cursor-pointer hover:transform hover:scale-110"
                  >
                    <span className="text-xl">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center py-8">
            <p className="text-global-text2">@2023 Digitax. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time for assets, API calls, etc.
    const minLoadingTime = 2000; // Minimum 2 seconds
    const startTime = Date.now();

    const handleLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        // Small delay for smooth transition
        setTimeout(() => {
          setShowContent(true);
        }, 100);
      }, remainingTime);
    };

    // Call loading complete after a random time (simulating real loading)
    const loadingTimeout = setTimeout(() => {
      handleLoadingComplete();
    }, Math.random() * 1000 + 1500); // 1.5-2.5 seconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    return (
      <LoadingAnimation 
        onLoadingComplete={() => {
          setIsLoading(false);
          setTimeout(() => setShowContent(true), 100);
        }} 
      />
    );
  }

  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        showContent 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-4'
      }`}
    >
      <Routes />
      
      <style jsx global>{`
        :root {
          --global-bg-1: #0a0a0a;
          --global-bg-2: #1a1625;
          --global-surface-1: #1f1a2e;
          --global-surface-2: #2d2440;
          --global-border-2: #3d2a4a;
          --global-text-1: #a8a8b3;
          --global-text-2: #c8c8d3;
          --global-text-3: #e8e8ed;
          --global-text-4: #ffffff;
          --global-accent-1: #8b5cf6;
          --global-accent-2: #ef4444;
          --global-accent-3: #a855f7;
          --gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #ef4444 100%);
        }

        .bg-global-1 { background-color: var(--global-bg-1); }
        .bg-global-2 { background-color: var(--global-bg-2); }
        .bg-global-3 { background-color: var(--global-surface-1); }
        .border-global-2 { border-color: var(--global-border-2); }
        .text-global-text1 { color: var(--global-text-1); }
        .text-global-text2 { color: var(--global-text-2); }
        .text-global-text3 { color: var(--global-text-3); }
        .text-global-text4 { color: var(--global-text-4); }
        .text-accent-1 { color: var(--global-accent-1); }
        .text-accent-2 { color: var(--global-accent-2); }
        .bg-accent-1 { background-color: var(--global-accent-1); }
        .bg-accent-2 { background-color: var(--global-accent-2); }
        .bg-accent-3 { background-color: var(--global-accent-3); }
        .gradient-primary { background: var(--gradient-primary); }
        .bg-clip-text { -webkit-background-clip: text; background-clip: text; }
        
        .shadow-purple { box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15); }

        body {
          background-color: var(--global-bg-1);
          color: var(--global-text-1);
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default App;