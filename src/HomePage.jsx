import React, { useState, useEffect } from "react";
import LoadingAnimation from "./components/LoadingAnimation";
import Header from "./components/common/Header";
import hero_video from "./videos/hero-video.mp4";
import logo from "./images/pixelart-logo.png";
import { motion } from "framer-motion";
import Counter from "./components/CounterComponent";
import Footer from "./components/common/Footer";

// Simulated Routes component (replace with your actual Routes)
const HomePage = () => {
  return (
    <div className="min-h-screen bg-global-1 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full mb-10">
        {/* Hero Section with Video Background */}
        <section className="relative w-full h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={hero_video} type="video/mp4" />
              {/* Fallback gradient background if video fails to load */}
              <div className="w-full h-full bg-gradient-to-br from-global-1 via-global-2 to-global-3"></div>
            </video>

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Gradient overlay for cinematic effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Hero Content - Left Aligned */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1596px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
              <div className="max-w-3xl">
                {/* Tagline */}
                <div className="space-y-6 lg:space-y-8">
                  <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-sora font-bold leading-tight text-left">
                    <span className="text-global-text4">Crafting</span>
                    <br />
                    <span className="gradient-primary bg-clip-text text-transparent">
                      Digital
                    </span>
                    <br />
                    <span className="text-global-text3">Experiences</span>
                    <br />
                    <span className="text-accent-1">That Matter</span>
                  </h1>

                  <p className="text-lg sm:text-xl lg:text-2xl font-sora font-normal leading-relaxed text-global-text2 max-w-2xl mt-8 lg:mt-12">
                    We transform your vision into powerful digital solutions
                    that drive growth and success
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button className="px-4 py-2 bg-accent-1 hover:bg-accent-3 text-global-text4 font-sora font-medium text-sm rounded-lg transition-all duration-300">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-global-text4 hover:bg-global-text4 text-global-text4 hover:text-global-1 font-sora font-medium text-sm rounded-lg transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-global-text4 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-global-text4 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="w-full py-20 px-6 sm:px-8 lg:px-12 xl:px-16 bg-global-2">
          <div className="max-w-[1596px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Logo Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-global-3 border border-global-2 rounded-3xl p-10 flex items-center justify-center shadow-lg transition-transform duration-500 cursor-pointer"
            >
              <img
                src={logo}
                alt="VFX Company Logo"
                className="w-48 h-48 object-contain"
              />
            </motion.div>

            {/* Intro Text Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-global-3 border border-global-2 rounded-3xl p-10 shadow-lg transition-transform duration-500 cursor-pointer"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-global-text4 mb-6">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-global-text2 leading-relaxed">
                At{" "}
                <span className="text-accent-1 font-semibold">
                  [Your VFX Company]
                </span>
                , we specialize in transforming imagination into stunning visual
                experiences. Our team of passionate artists and cutting-edge
                technology bring cinematic stories to life for film, gaming, and
                digital media.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pre Highlights Section */}
        <section className="w-full py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-global-1">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-global-text4 mb-12"></h2>

            <div className="space-y-6">
              {[
                "Great VFX, Great Value",
                "But don’t just take our word for it—see what our clients say.",
              ].map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl lg:text-3xl font-sora text-accent-1"
                >
                  <span className="inline-block animate-gradient-text bg-clip-text text-transparent">
                    {line}
                  </span>
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="w-full py-2 px-6 sm:px-8 lg:px-12 xl:px-16 bg-global-1">
          <div className="max-w-[1200px] mx-auto text-center space-y-16">
            {/* Stats Count Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: "Projects Completed", value: 150 },
                { label: "Happy Clients", value: 80 },
                { label: "Awards Won", value: 12 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  className="bg-global-3 border border-global-2 rounded-3xl p-10 shadow-lg hover:scale-105 transition-transform duration-500"
                >
                  <Counter
                    end={stat.value}
                    duration={2000}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-1"
                  />
                  <p className="mt-4 text-lg text-global-text2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Carousel */}
            {/* <div className="relative w-full overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex animate-carousel"
              >
                {[
                  "Trusted by top film studios",
                  "Delivering cinematic excellence",
                  "Pioneering digital storytelling",
                  "Crafting immersive VFX experiences",
                ].map((highlight, index) => (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0 flex items-center justify-center p-12"
                  >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sora font-semibold text-accent-1">
                      {highlight}
                    </h3>
                  </div>
                ))}
              </motion.div>
            </div> */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
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
    const loadingTimeout = setTimeout(
      () => {
        handleLoadingComplete();
      },
      Math.random() * 1000 + 1500
    ); // 1.5-2.5 seconds

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
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-4"
      }`}
    >
      <HomePage />

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

        .bg-global-1 {
          background-color: var(--global-bg-1);
        }
        .bg-global-2 {
          background-color: var(--global-bg-2);
        }
        .bg-global-3 {
          background-color: var(--global-surface-1);
        }
        .border-global-2 {
          border-color: var(--global-border-2);
        }
        .text-global-text1 {
          color: var(--global-text-1);
        }
        .text-global-text2 {
          color: var(--global-text-2);
        }
        .text-global-text3 {
          color: var(--global-text-3);
        }
        .text-global-text4 {
          color: var(--global-text-4);
        }
        .text-accent-1 {
          color: var(--global-accent-1);
        }
        .text-accent-2 {
          color: var(--global-accent-2);
        }
        .bg-accent-1 {
          background-color: var(--global-accent-1);
        }
        .bg-accent-2 {
          background-color: var(--global-accent-2);
        }
        .bg-accent-3 {
          background-color: var(--global-accent-3);
        }
        .gradient-primary {
          background: var(--gradient-primary);
        }
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        .shadow-purple {
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15);
        }

        body {
          background-color: var(--global-bg-1);
          color: var(--global-text-1);
          font-family:
            "Sora",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
