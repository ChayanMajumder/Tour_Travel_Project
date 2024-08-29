import React from "react";
import TravelBannerImg from "../../assets/Images/TravelBannerImg.jpg";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";

function Banner() {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
              {/* banner images section start  */}
              <div className="">
                <img
                  className="w-[450px] drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                  src={TravelBannerImg}
                  alt=""
                />
              </div>
              {/* banner images section end */}
              {/* banner text section start  */}
                <div>
                    <h4 className="text-3xl font-bold">Explore all corners of the world  with us</h4>
                    <p className="text-sm text-gray-500 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in earum a accusantium eveniet iste totam provident mollitia vitae nulla fugiat similique maxime aliquam voluptatibus libero! Ad, corporis? Libero, tempore.</p>
                    <div>
                        <div className=" grid grid-cols-2 justify-between">
                            <div className="flex items-center gap-4 mb-4">
                                <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                                <p>Flight</p>

                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                                <p>Flight</p>

                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <FaHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                                <p>Hotel</p>

                            </div>
                        </div>
                    </div>
                </div>
              {/* banner text section end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
