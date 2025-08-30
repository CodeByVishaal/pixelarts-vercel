import React, { useState, useEffect } from 'react';

const LoadingAnimation = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const texts = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
    let textIndex = 0;

    const textInterval = setInterval(() => {
      setLoadingText(texts[textIndex]);
      textIndex = (textIndex + 1) % texts.length;
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-global-1">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-1 rounded-full opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-32 right-32 w-24 h-24 bg-accent-2 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 bg-accent-3 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-accent-1 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>

        {/* Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-1 gradient-primary opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-full h-1 gradient-primary opacity-30 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-18 sm:w-32 sm:h-24 lg:w-40 lg:h-30">
            <div className="w-full h-full bg-global-text4 rounded-xl flex items-center justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-white">
                Pixel Arts
              </span>
            </div>
          </div>
        </div>

        {/* Spinning Loader */}
        <div className="relative">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-global-2"></div>

            {/* Animated Ring */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent-1 border-r-accent-2 animate-spin"
              style={{
                animation: 'spin 2s linear infinite',
              }}
            ></div>

            {/* Inner Pulse */}
            <div className="absolute inset-4 rounded-full bg-accent-1 opacity-20 animate-pulse"></div>

            {/* Center Dot */}
            <div className="absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-accent-2 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sora font-bold text-global-text4">
            {loadingText}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-sora font-normal text-global-text2">
            Preparing your digital experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 sm:w-96 lg:w-[480px] mx-auto">
          <div className="relative h-2 bg-global-2 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full gradient-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-global-text1">
            <span>0%</span>
            <span className="font-medium text-accent-1">
              {Math.round(Math.min(progress, 100))}%
            </span>
            <span>100%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-accent-1 rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1s',
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
