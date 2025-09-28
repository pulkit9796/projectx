import React, { useState } from 'react';

const Hero = () => {
  const [activeComparison, setActiveComparison] = useState('portrait');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparisons = {
    portrait: {
      before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=enhance&q=80'
    },
    product: {
      before: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=enhance&q=80'
    },
    landscape: {
      before: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=enhance&q=80'
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn your photographs into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                professional photoshoots
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transform ordinary photos into stunning professional images with our AI-powered photo enhancement technology. 
              Perfect lighting, flawless skin, and magazine-quality results in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('demo')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Let's fix the photo
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>100,000+ users</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Before/After Comparison */}
          <div className="relative">
            {/* Comparison Tabs */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                {Object.keys(comparisons).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveComparison(type)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                      activeComparison === type
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Before/After Images */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <img
                    src={comparisons[activeComparison].before}
                    alt="Before"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <img
                    src={comparisons[activeComparison].after}
                    alt="After"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-500/20"></div>
                </div>
              </div>

              {/* Comparison Slider */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white shadow-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Enhancement Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">4x</div>
                <div className="text-sm text-gray-600">Resolution</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">2s</div>
                <div className="text-sm text-gray-600">Processing</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
