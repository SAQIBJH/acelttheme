import React from 'react';
import Image from 'next/image';

const clients = [
  { id: 1, image: "/logo.png" },
  { id: 2, image: "/logo.png" },
  { id: 3, image: "/logo.png" },
  { id: 4, image: "/logo.png" },
  { id: 5, image: "/logo.png" },
];

const ClientsSection = () => {
  return (
    <section className="py-16 mx-auto" id="clients-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full  px-4">
            <h2 className="text-3xl font-bold mb-2 flex w-full justify-center text-black">OUR SUPPLIERS</h2>
            <div className="h-1 w-16 bg-blue-500 mb-8 flex mx-auto justify-center"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {clients.map((client) => (
                <div key={client.id} className=" rounded-lg shadow-md">
                  <Image
                    src={client.image}
                    alt={`Client ${client.id}`}
                    width={200}
                    height={200}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <div className="relative h-0 pb-[100%]">
              <Image
                src="/images/prince.jpg"
                alt="Prince"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

