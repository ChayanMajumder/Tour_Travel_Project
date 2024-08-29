import React, { useState } from "react";
import { PiCurrencyInrBold } from "react-icons/pi";

function Hero() {
  const [priceValue, setPriceValue] = useState("10000");
  return (
    <>
      <div className="bg-black/30 h-full">
        <div className="h-full flex justify-center items-center p-4 bg-primary/10">
          <div className="container grid grid-cols-1 gap-4">
            {/* text content section start  */}
            <div className="text-white">
              <p data-aos="fade-up" data-aos-delay="300">
                Our Packages
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold text-3xl"
              >
                Search Your Destination
              </p>
            </div>
            {/* text content section end */}
            {/* from section start  */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white p-4 rounded-md space-y-4 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 py-3 gap-2">
                <div>
                  <label htmlFor="destination" className="opacity-70">
                    Search Your Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    placeholder="Dubai"
                    className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="opacity-70">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="destination"
                    id="destination"
                    className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="opacity-70">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="destination"
                    id="destination"
                    className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="opacity-70 block">
                    <div className="w-full flex justify-between items-center">
                      <p>Max Price</p>
                      <p className="font-bold text-xl">
                        <PiCurrencyInrBold className="inline" />
                        {priceValue}
                      </p>
                    </div>
                  </label>
                  <div className="bg-gray-100 rounded-full p-2 flex justify-center items-center my-2">
                    <input
                      type="range"
                      name="destination"
                      id="destination"
                      className="w-full appearance-none h-2 rounded-full my-2 bg-gradient-to-r from-primary to-secondary cursor-pointer"
                      min="10000"
                      max="60000"
                      step="10"
                      value={priceValue}
                      onChange={(e) => setPriceValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* search button section start  */}
              <button className="absolute -bottom-5 left-1/2 bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 -translate-x-1/2">
                Search Now
              </button>
              {/* search button section end */}
            </div>
            {/* from section end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
