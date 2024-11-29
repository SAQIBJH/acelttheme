// import React from "react";

// const Content = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//     <div className="container mx-auto px-4">
//       <div className="text-center max-w-3xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" itemProp="headline">
//         FITTINGS/FLANGES
//         </h2>
//         <h4 className="text-lg md:text-xl text-gray-600 mb-6" itemProp="alternativeHeadline">
//          Ace Energy can meet your need with the most adaptable selection of industrial fittings and flanges Available material range as per ASTM/ASME, JIS, EN Carbon and Low Alloy, Low Temperature Stainless, Duplex and Super Duplex, Nickel and Super Alloy, Copper, Nickel, Titanium, Weld Overlay, Clad and Others.
//         </h4>
//         <div className="flex justify-center items-center">
//           <span className="inline-block w-16 h-1 bg-blue-500"></span>
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// };

// export default Content;

import React from 'react';
import Card from './Card';

const Content = () => {
  const materials = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/product1.jpeg",
      link: "/"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "/product2.jpg",
      link: "/"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "/product3.png",
      link: "/"
    }
  ];

  return (
    <section className="py-16" id="building-materials-section">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">FITTINGS/FLANGES</h2>
          <h4 className="text-lg md:text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
          Ace Energy can meet your need with the most adaptable selection of industrial fittings and flanges Available material range as per ASTM/ASME, JIS, EN Carbon and Low Alloy, Low Temperature Stainless, Duplex and Super Duplex, Nickel and Super Alloy, Copper, Nickel, Titanium, Weld Overlay, Clad and Others.
          </h4>
          <div className="flex justify-center items-center">
            <span className="inline-block w-16 h-1 bg-blue-500"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-fit mx-auto">
          {materials.map((material, index) => (
            <Card key={index} {...material} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;


