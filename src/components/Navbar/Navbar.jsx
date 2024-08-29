import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
  const dropdownLinks = [
    {
      name: "Our Service",
      link: "/#service",
    },
    {
      name: "Top Brands",
      link: "/#mobile_brands",
    },
    {
      name: "Location",
      link: "/#location",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[9999]">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden ">
            <div className="flex justify-between ">
              <p>20% off on next booking</p>
              <p>Mobile No : +91 1234567890</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo section start  */}
            <div className="">
              <Link to="/">
                <h3
                  className="text-[25px]"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Tour & Travel
                </h3>
              </Link>
            </div>
            {/* logo section end */}
            {/*desktop navlinks section start  */}
            <div className=" hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4 ">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-primary" : "text-black"
                      } hover:text-primary`
                    }
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4 ">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-primary" : "text-black"
                      } hover:text-primary`
                    }
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-primary" : "text-black"
                      } hover:text-primary`
                    }
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-primary" : "text-black"
                      } hover:text-primary`
                    }
                    to="/blogs"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blog
                  </NavLink>
                </li>
                {/* dropdown section start  */}
                <li className="group relative py-4 cursor-pointer hover:text-primary ">
                  <div className="dropdown  flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className="duration-200 transition-all group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {dropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                            <a
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.link}
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                {/* dropdown section end  */}
              </ul>
            </div>
            {/* desktop navlinks section end  */}
            {/* book Now button start  */}
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-500 text-white px-3 py-1 rounded-full">
                Book Now
              </button>
              {/* mobile Hamburger menu start */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
              {/* mobile Hamburger menu end */}
            </div>
            {/* book Now button end  */}
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
}

export default Navbar;
