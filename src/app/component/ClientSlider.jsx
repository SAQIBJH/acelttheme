"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const clientLogos = [
  {
    src: "/logo.png",
    alt: "Client Logo 1",
  },
  {
    src: "/logo.png",
    alt: "Client Logo 2", 
  },
  {
    src: "/logo.png",
    alt: "Client Logo 3",
  },
  {
    src: "/logo.png",
    alt: "Client Logo 4",
  },
  {
    src: "/logo.png",
    alt: "Client Logo 5",
  }
];

const CompanyClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clientsToShow, setClientsToShow] = useState(4);

  // Responsive slider logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setClientsToShow(2);
      else if (window.innerWidth < 1024) setClientsToShow(3);
      else setClientsToShow(4);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => 
        (prev + 1) % Math.ceil(clientLogos.length / clientsToShow)
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [clientsToShow]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(clientLogos.length / clientsToShow) - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % Math.ceil(clientLogos.length / clientsToShow)
    );
  };

  return (
    <section className="container mx-auto px-8 py-12 flex justify-center items-center">
      <div className="grid md:grid-cols-10 gap-6 items-center">
        <div className="md:col-span-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 relative inline-block  flex justify-center items-center ">
              SOME OF OUR CLIENTS
              <span className="absolute bottom-[-10px]  w-16 h-1 bg-blue-500 mx-auto justify-center inline-flex"></span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / Math.ceil(clientLogos.length / clientsToShow))}%)`,
                width: `${Math.ceil(clientLogos.length / clientsToShow) * 100}%`
              }}
            >
              {Array.from({ length: Math.ceil(clientLogos.length / clientsToShow) }).map((_, groupIndex) => (
                <div 
                  key={groupIndex} 
                  className="grid grid-cols-4 gap-4 flex-shrink-0"
                  style={{ width: `${100 / Math.ceil(clientLogos.length / clientsToShow)}%` }}
                >
                  {clientLogos
                    .slice(groupIndex * clientsToShow, (groupIndex + 1) * clientsToShow)
                    .map((logo, index) => (
                      <a 
                        href="#" 
                        key={index} 
                        // target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors rounded-lg"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={150}
                          height={150}
                          className="max-h-20 max-w-full object-contain"
                        />
                      </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={handlePrevSlide} 
              className="p-2 bg-blue-500 rounded-full hover:bg-gray-300 transition"
            >
              ← Prev
            </button>
            <button 
              onClick={handleNextSlide} 
              className="p-2 bg-blue-500 rounded-full hover:bg-gray-300 transition"
            >
              Next →
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(clientLogos.length / clientsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
        <div className="md:col-span-4 hidden md:block">
          <div className="relative w-full aspect-square">
            <Image
              src="/product3.png"
              alt="Prince"
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
    </section>
  );
};

export default CompanyClients;