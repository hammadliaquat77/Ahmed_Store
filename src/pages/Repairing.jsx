import React from 'react'

function Repairing() {
  return (
    <>
      <div className=" min-h-screen flex flex-col items-center justify-center font-sans text-gray-900 p-4 pt-20">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-4xl mx-auto transform transition-all duration-500 hover:scale-[1.02] ">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-24 h-24 text-indigo-500 animate-pulse-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2a1 1 0 00-1 1v2a1 1 0 002 0V3a1 1 0 00-1-1zm-4 4a1 1 0 00-1 1v12a2 2 0 002 2h6a2 2 0 002-2V7a1 1 0 00-1-1H7zm1 2h6a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V9a1 1 0 011-1zm3 10a.5.5 0 100 1 .5.5 0 000-1z" fill="currentColor"/>
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Mobile Repair Services
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mt-2 font-medium">
            Your device, our expertise.
          </p>
        </header>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-xl p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">Screen Repair</h3>
              <p className="text-gray-600">We fix cracked and shattered screens for all mobile models.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Battery Replacement</h3>
              <p className="text-gray-600">Get a new battery to extend your phone's life and performance.</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2 text-pink-700">Water Damage</h3>
              <p className="text-gray-600">Specialized repair for phones damaged by water or other liquids.</p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gray-100 rounded-3xl p-8 shadow-inner text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Connect with Our Mechanic
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-200 rounded-xl p-4">
              <span className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-4">Name:</span>
              <span className="font-light text-gray-900">Asif Ali Nagori</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-200 rounded-xl p-4">
              <span className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-4">Contact:</span>
              <span className="font-light text-gray-900">03142366246</span>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="tel:923142366246"
              className="inline-block bg-indigo-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </section>

      </div>
    </div>
    </>
  )
}

export default Repairing