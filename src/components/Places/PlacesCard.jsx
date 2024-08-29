import React from "react";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

function PlacesCard({ img, title, location, description, price, type }) {
  return (
    <>
      <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={img}
            alt=""
            className=" w-full h-[220px] object-cover mx-auto transition duration-700  hover:scale-110"
          />
        </div>
        <div className="px-4 py-4">
          <h4 className="font-bold text-xl line-clamp-1 py-2">{title}</h4>
          <div className="flex items-center gap-3 pb-2">
          <FaLocationDot  />
          <p>{location}</p>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 !mt-3">
            <div className="w-full opacity-70 flex justify-between items-center">
              <p>{type}</p>
              <div>
                <p className="text-2xl font-bold">
                  <PiCurrencyInrBold className="inline" />
                  {price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacesCard;
