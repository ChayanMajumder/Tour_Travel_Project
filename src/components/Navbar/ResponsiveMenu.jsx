import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function ResponsiveMenu({ showMenu, setShowMenu }) {
  const navbarLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Best Places",
      link: "/places",
    },
  ];

  return (
    <>
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[65%] flex-col justify-between bg-white  px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
      >
        <div className="Navbar__card">
            {/* top section start  */}
            <div className="">
                <div className="flex gap-5">
                <FaUserCircle size={50} className="text-gray-500" />
                <div className="text-gray-500">
                    <h2>Hello User</h2>
                    <h2>Premium User</h2>
                </div>
                </div>
            </div>

            {/* top section end */}
            {/* navbar section start */}
                <div className="text-black mt-12">
                    <ul className="text-xl">
                        {
                            navbarLinks.map((data) => {
                                return(
                                    <li key={data.name}>
                                        <NavLink className="mb-5 inline-block" to={data.link} onClick={() => setShowMenu(false)}>
                                        {data.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            {/* navbar section end */}
        </div>
      </div>
    </>
  );
}

export default ResponsiveMenu;
