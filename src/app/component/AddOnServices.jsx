"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Lorem Ipsum',
    image: '/Inspection.webp',
    link: '/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Lorem Ipsum',
    image: '/Inspection.webp',
    link: '/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const AddOnServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide + 1) % services.length
      );
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? services.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide + 1) % services.length
    );
  };

//   return (
//     <section className="container mx-auto px-4 py-12">
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         {/* Text Column */}
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-gray-800">
//             Our Add-On Services
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
//           </p>
//         </div>

//         {/* Image Gallery Column */}
//         <div className="relative w-full">
//           <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-red-500">
//             {services.map((service, index) => (
//               <div
//                 key={service.title}
//                 className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
//                   index === currentSlide ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <Link href={service.link} className="block relative group">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     // layout="responsive"
//                     width={250}
//                     height={200}
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                     <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
//                       {service.title}
//                     </span>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-center mt-4 space-x-4">
//             <button 
//               onClick={handlePrevSlide} 
//               className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//             >
//               ← Prev
//             </button>
//             <button 
//               onClick={handleNextSlide} 
//               className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//             >
//               Next →
//             </button>
//           </div>

//           {/* Dot Indicators */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {services.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
return (
    <section className="py-12 px-6 bg-blue-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className='flex flex-col px-8'>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Add-On Services</h2>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_self"
                className="relative group"
                title={service.title}
                rel="noopener noreferrer"
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    objectFit='cover'
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{service.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOnServices;