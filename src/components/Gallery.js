import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'portrait', name: 'Portrait', count: 4 },
    { id: 'product', name: 'Product', count: 3 },
    { id: 'real-estate', name: 'Real Estate', count: 3 },
    { id: 'landscape', name: 'Landscape', count: 2 }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'portrait',
      title: "Professional Headshots",
      description: "Transform casual photos into professional headshots",
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=enhance&q=80",
      enhancement: "Face Enhancement + Lighting"
    },
    {
      id: 2,
      category: 'product',
      title: "E-commerce Product Photos",
      description: "Studio-quality product shots for online stores",
      beforeImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=enhance&q=80",
      enhancement: "Background Removal + Color Correction"
    },
    {
      id: 3,
      category: 'real-estate',
      title: "Real Estate Photography",
      description: "Stunning property photos that sell faster",
      beforeImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&auto=enhance&q=80",
      enhancement: "HDR + Lighting Enhancement"
    },
    {
      id: 4,
      category: 'landscape',
      title: "Landscape Photography",
      description: "Breathtaking nature and cityscape photos",
      beforeImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=enhance&q=80",
      enhancement: "Color Enhancement + Sharpening"
    },
    {
      id: 5,
      category: 'portrait',
      title: "Wedding Photography",
      description: "Perfect wedding moments enhanced",
      beforeImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=face&auto=enhance&q=80",
      enhancement: "Skin Retouching + Color Grading"
    },
    {
      id: 6,
      category: 'product',
      title: "Fashion Photography",
      description: "High-end fashion and lifestyle shots",
      beforeImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&auto=enhance&q=80",
      enhancement: "Style Transfer + Detail Enhancement"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Any Photo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI works with all types of photography. From portraits to products, 
            real estate to events - see the magic happen.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Image Comparison */}
              <div className="relative h-64">
                {/* Before Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* After Image Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={item.afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Enhancement Badge */}
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.enhancement}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Try This Style →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Professionals Worldwide
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of photographers, designers, and businesses who rely on Free Image AI 
              for their image enhancement needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Photos Enhanced</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
