import React, { useState } from 'react';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 5000);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See Free Image AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your photo and watch our AI transform it into a advanced-quality image in real-time. 
            No complex editing software required.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Upload Area */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Photo</h3>
                  <p className="text-gray-600 mb-4">Drag and drop or click to select</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={() => {}}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors inline-block"
                  >
                    Choose File
                  </label>
                  <p className="text-sm text-gray-500 mt-2">Supports JPG, PNG, WebP up to 10MB</p>
                </div>
              </div>

              {/* Demo Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lightning Fast</h4>
                  <p className="text-sm text-gray-600">Process in seconds</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">advanced Quality</h4>
                  <p className="text-sm text-gray-600">Studio-grade results</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mobile Friendly</h4>
                  <p className="text-sm text-gray-600">Works on any device</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Secure & Private</h4>
                  <p className="text-sm text-gray-600">Your data is safe</p>
                </div>
              </div>
            </div>

            {/* Right Side - Video Demo */}
            <div className="relative">
              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  {!isPlaying ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <button
                          onClick={handlePlay}
                          className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110 shadow-lg mb-4"
                        >
                          <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                        <p className="text-white text-lg font-medium">Watch Demo</p>
                        <p className="text-gray-400 text-sm">See how it works</p>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-lg font-medium">Processing Demo...</p>
                        <p className="text-sm opacity-75">This would be your actual video</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="text-white hover:text-gray-300 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                      <div className="text-white text-sm">
                        {isPlaying ? '0:15' : '0:00'} / 2:30
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-white hover:text-gray-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </button>
                      <button className="text-white hover:text-gray-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Stats */}
              <div className="mt-6 bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Real-time Processing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Image Analysis</span>
                    <span className="text-sm font-medium text-green-600">✓ Complete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">AI Enhancement</span>
                    <span className="text-sm font-medium text-blue-600">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Quality Check</span>
                    <span className="text-sm font-medium text-gray-400">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
