import React from 'react';
import Link from 'next/link';

const BrochureRequest = () => {
  return (
    <section className="container mx-auto px-8 py-12 bg-slate-100">
      <div className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Request A Brochure
            </h2>
            <p className="text-gray-600 text-lg">
              Get all our products informations in one place, download our brochure now.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-2 flex justify-end">
          <Link 
            href="/" 
            // target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center inline-block"
          >
            Download Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrochureRequest;